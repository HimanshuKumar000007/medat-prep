/**
 * src/pages/PrivacyPage.tsx
 *
 * Dedicated, comprehensive Data Protection & Privacy Policy page (#/privacy & #/datenschutz).
 * Fully compliant with EU DSGVO (GDPR) and Austrian DSG.
 * Transparently documents the data storage architecture powered by Supabase (PostgreSQL, EU Region, RLS, AES-256),
 * user data categories, retention periods, zero-data-selling guarantee, and data subject rights.
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconShield,
  IconCheck,
  IconSpark,
  IconClock,
  IconUsers,
  IconBrain,
  IconSend,
} from "../lib/icons";
import { toast, track } from "../lib/core";

export default function PrivacyPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    document.title = "Datenschutz & DSGVO — MedAT Prep | 100% DSGVO-konform";
    window.scrollTo(0, 0);
    track("page_view", { page: "privacy_policy" });
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
            <span className="hidden rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 md:inline-flex items-center gap-1">
              <IconShield className="h-3.5 w-3.5 text-emerald-600" />
              <span>100% DSGVO-konform</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/contact"
              className="hidden text-xs sm:text-sm font-semibold text-ink-2 hover:text-primary sm:inline-block"
            >
              Kontakt & Support
            </Link>
            <a
              href="/onboarding?mode=register"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-sm">
              <IconShield className="h-4 w-4 text-emerald-600" />
              <span>Datenschutz nach europäischen Standards · Stand: Jänner 2027</span>
            </div>

            <h1 className="display mt-5 text-[32px] xs:text-[38px] sm:text-[48px] leading-[1.08] text-ink">
              Deine Daten gehören dir.
              <br />
              <span className="text-primary">100% DSGVO-konform & sicher gespeichert.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-ink-2">
              Wir verarbeiten deine Daten ausschließlich zur Bereitstellung deines personalisierten
              MedAT-Lernsystems. Keine Weitergabe an Werbenetzwerke, kein Verkauf von Profilen und
              vollständige Speicherung auf abgesicherten EU-Cloud-Servern.
            </p>

            {/* Privacy Pillars Grid */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5 text-left">
              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🛡️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">100% DSGVO</p>
                <p className="text-[11.5px] text-ink-3">Vollständige EU-Rechtskonformität</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">⚡</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Supabase Cloud</p>
                <p className="text-[11.5px] text-ink-3">PostgreSQL mit Row-Level Security</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🇪🇺</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">EU-Server</p>
                <p className="text-[11.5px] text-ink-3">Hosting im Europäischen Wirtschaftsraum</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🔒</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Kein Datenverkauf</p>
                <p className="text-[11.5px] text-ink-3">Kein Profilverkauf, keine Werbetracker</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- PRIVACY BODY CONTENT ---------------- */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap max-w-4xl space-y-12">
            {/* Section 1: Controller */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Verantwortliche Stelle & Datenschutz-Kontakt
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO), sonstiger in den Mitgliedstaaten
                der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem
                Charakter ist:
              </p>
              <div className="rounded-xl border border-line bg-paper-warm/50 p-4 text-xs sm:text-sm text-ink-2 space-y-1">
                <p className="font-bold text-ink">MedAT Prep</p>
                <p>E-Mail für alle Datenschutzanliegen:{" "}
                  <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary hover:underline">
                    medatprep@gmail.com
                  </a>
                </p>
                <p>Website:{" "}
                  <a href="https://medatprep.at" className="text-primary hover:underline">
                    https://medatprep.at
                  </a>
                </p>
              </div>
              <p className="text-xs text-ink-3">
                Zuständige Aufsichtsbehörde für Beschwerden: <strong>Österreichische Datenschutzbehörde (DSB)</strong>,
                Barichgasse 40-42, 1030 Wien, E-Mail: dsb@dsb.gv.at.
              </p>
            </div>

            {/* Section 2: Supabase Architecture */}
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-paper to-primary-subtle/20 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-xs font-bold text-paper">
                    § 2
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-ink">
                    Unser Datenspeicher: Supabase PostgreSQL (Architektur & Sicherheit)
                  </h2>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-md bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-bold">
                  <span>✓</span> RLS Aktiv
                </span>
              </div>

              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Zur sicheren Verwaltung von Benutzerkonten, Authentifizierung und Speicherung deiner Lernfortschritte
                nutzen wir die Cloud-Datenbankplattform <strong>Supabase</strong> (Supabase Inc.).
              </p>

              <div className="grid gap-3.5 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-line bg-paper p-4 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    1. Row-Level Security (RLS)
                  </p>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    Alle Tabellen (Profile, Testversuche, Lesezeichen, Fehler-Hub) sind mit strikten
                    Row-Level-Security-Policies geschützt. Dadurch ist kryptografisch und serverseitig garantiert,
                    dass ausschließlich du selbst deine eigenen Lerndaten abrufen und aktualisieren kannst.
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-paper p-4 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    2. Durchgehende Verschlüsselung
                  </p>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    Sämtliche Datenübertragungen zwischen deinem Endgerät und Supabase erfolgen verschlüsselt
                    nach aktuellem Stand der Technik via <strong>TLS 1.3 / HTTPS</strong> (In-Transit).
                    Die Speicherung in der PostgreSQL-Datenbank erfolgt verschlüsselt mit <strong>AES-256</strong> (At-Rest).
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-paper p-4 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    3. Serverstandorte in der EU
                  </p>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    Unsere Supabase-Instanzen sind in Rechenzentren innerhalb der Europäischen Union
                    (Frankfurt / Central Europe) gehostet. Es erfolgt kein unautorisierter Transfer
                    deiner Lerninhalte in unsichere Drittstaaten.
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-paper p-4 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    4. ISO-27001 & SOC 2 Zertifiziert
                  </p>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    Die zugrundeliegende Cloud-Infrastruktur erfüllt höchste internationale Sicherheitsstandards
                    (SOC 2 Type II, ISO/IEC 27001 und DSGVO-Auftragsverarbeitungsvereinbarung nach Art. 28 DSGVO).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Data Categories & Purpose */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Welche Daten wir verarbeiten & Rechtsgrundlagen
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Wir erheben personenbezogene Daten nach dem Grundsatz der Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO)
                nur im erforderlichen Ausmaß:
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-line bg-paper-warm/40">
                  <p className="font-bold text-ink">A. Registrierung & Account (Supabase Auth)</p>
                  <p className="text-ink-2 mt-1">
                    <strong>E-Mail-Adresse</strong> und gehashtes Passwort bzw. Session-Token.
                    Dient zur Erstellung deines persönlichen Zugangs und Synchronisation deiner Ergebnisse über verschiedene Geräte.
                  </p>
                  <p className="text-[11px] text-ink-3 mt-1 font-medium">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Nutzungsvertrages).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-line bg-paper-warm/40">
                  <p className="font-bold text-ink">B. Lernfortschritte & Prüfungsleistungen</p>
                  <p className="text-ink-2 mt-1">
                    Gelöste Aufgaben, Fehlerquoten, Antwortzeiten, Lesezeichen, Probetest-Rankings und
                    berechnete Wiederholungsintervalle (Spaced Repetition).
                    Dient ausschließlich zur Erstellung deines individuellen Lernplans und zur Stärken-/Schwächen-Analyse.
                  </p>
                  <p className="text-[11px] text-ink-3 mt-1 font-medium">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-line bg-paper-warm/40">
                  <p className="font-bold text-ink">C. Zahlungs- & Abrechnungsdaten (bei Premium)</p>
                  <p className="text-ink-2 mt-1">
                    Bei Buchung kostenpflichtiger Pakete erfolgt die Zahlungsabwicklung über zertifizierte,
                    PCI-DSS-Level-1-konforme Payment-Provider. Wir speichern selbst <strong>keine</strong> vollständigen
                    Kreditkartennummern auf unseren Servern.
                  </p>
                  <p className="text-[11px] text-ink-3 mt-1 font-medium">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Aufbewahrungsfristen).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Data Retention & Deletion */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Speicherdauer & Vollständige Löschung
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Deine Daten bleiben gespeichert, solange dein Account aktiv ist oder bis du uns zur Löschung aufforderst.
              </p>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-50/60 p-4 text-xs sm:text-sm text-ink-2 space-y-1.5">
                <p className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <IconCheck className="h-4 w-4 text-emerald-600" />
                  <span>Konto- und Datenlöschung jederzeit möglich</span>
                </p>
                <p>
                  Möchtest du dein Benutzerkonto und alle damit verknüpften Lernhistorien löschen, genügt
                  eine formlose Nachricht an{" "}
                  <a href="mailto:medatprep@gmail.com" className="font-bold text-primary underline">
                    medatprep@gmail.com
                  </a>
                  . Sämtliche personenbezogenen Datensätze werden daraufhin innerhalb von 72 Stunden
                  unwiderruflich aus der Supabase-Datenbank gelöscht.
                </p>
              </div>
            </div>

            {/* Section 5: Cookies & No Third-Party Tracking */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Cookies & Verzicht auf aggressive Werbenetzwerke
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Wir verzichten bewusst auf Tracking-Pixel von Werbenetzwerken (wie Facebook Pixel oder Google AdSense).
                Wir setzen lediglich technisch notwendige Cookies und lokale Speicherobjekte (LocalStorage) ein:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-ink-2">
                <li>
                  <strong>supabase.auth.token:</strong> Technisch notwendiges Authentifizierungs-Token zur Aufrechterhaltung deiner Sitzung (Anmeldung).
                </li>
                <li>
                  <strong>mprep_locale / mprep_theme:</strong> Lokale Einstellungen für bevorzugte Sprache und UI-Modus.
                </li>
              </ul>
              <p className="text-xs text-ink-3">
                Rechtsgrundlage ist § 165 Abs. 3 TKG 2021 (Österreich) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem funktionierenden System).
              </p>
            </div>

            {/* Section 6: Data Subject Rights */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 6
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Deine Rechte als betroffene Person (Art. 15–21 DSGVO)
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Als Nutzer:in hast du nach der europäischen DSGVO folgende unveräußerliche Rechte:
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-2 text-xs sm:text-sm">
                <div className="rounded-xl border border-line bg-paper-warm/40 p-3.5">
                  <p className="font-bold text-ink">Art. 15: Recht auf Auskunft</p>
                  <p className="text-ink-3 mt-1">Du hast das Recht zu erfahren, welche Daten über dich gespeichert sind.</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-3.5">
                  <p className="font-bold text-ink">Art. 16: Recht auf Berichtigung</p>
                  <p className="text-ink-3 mt-1">Unrichtige oder unvollständige Daten müssen unverzüglich korrigiert werden.</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-3.5">
                  <p className="font-bold text-ink">Art. 17: Recht auf Löschung</p>
                  <p className="text-ink-3 mt-1">Recht auf sofortiges Löschen deiner personenbezogenen Daten („Vergessenwerden“).</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-3.5">
                  <p className="font-bold text-ink">Art. 20: Recht auf Datenübertragbarkeit</p>
                  <p className="text-ink-3 mt-1">Recht, deine Daten in einem gängigen, maschinenlesbaren Format (JSON) zu erhalten.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Action Box */}
            <div className="rounded-2xl border-2 border-primary/20 bg-paper-warm p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-ink">
                Hast du Fragen zum Datenschutz oder möchtest deine Rechte ausüben?
              </h3>
              <p className="mx-auto max-w-lg text-sm text-ink-2">
                Schreibe unserem Datenschutz-Team direkt eine E-Mail. Wir beantworten Anfragen
                vollständig und unbürokratisch binnen kürzester Zeit.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:medatprep@gmail.com?subject=Datenschutzanfrage%20DSGVO"
                  className="btn btn-primary btn-sm px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                >
                  <IconSend className="h-4 w-4" />
                  <span>Datenschutz-Anfrage stellen</span>
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
