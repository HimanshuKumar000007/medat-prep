/**
 * src/pages/TermsPage.tsx
 *
 * Dedicated, comprehensive Terms and Conditions & Cancellation Policy page (#/terms, #/agb, #/widerruf).
 * Compliant with Austrian Consumer Protection Laws:
 * - KSchG (Konsumentenschutzgesetz)
 * - FAGG (Fern- und Auswärtsgeschäfte-Gesetz)
 * - ECG (E-Commerce-Gesetz)
 * - ABGB (Allgemeines bürgerliches Gesetzbuch)
 *
 * Includes interactive Model Withdrawal Form (Muster-Widerrufsformular nach Anhang I B FAGG)
 * with 1-click email generation and clipboard copy.
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconShield,
  IconCheck,
  IconClock,
  IconSend,
  IconArrowRight,
} from "../lib/icons";
import { toast, track } from "../lib/core";

export default function TermsPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedForm, setCopiedForm] = useState(false);

  useEffect(() => {
    document.title = "AGB & Widerrufsbelehrung — MedAT Prep | KSchG & FAGG konform";
    window.scrollTo(0, 0);
    track("page_view", { page: "terms_and_cancellation" });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("medatprep@gmail.com");
    setCopiedEmail(true);
    toast("E-Mail kopiert: medatprep@gmail.com", "success");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const withdrawalFormText = `An:
MedAT Prep
E-Mail: medatprep@gmail.com
Betreff: Widerruf meines Vertrages gemäß § 11 FAGG

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):

- Produkt/Tarif: MedAT Prep Zugang
- Bestellt am (*): ______________
- Erhalten am / Freigeschaltet am (*): ______________
- Name des/der Verbraucher(s): __________________________
- Anschrift des/der Verbraucher(s): ______________________
- E-Mail-Adresse des Benutzerkontos: _____________________

Datum: ______________

(*) Unzutreffendes streichen.`;

  const handleCopyForm = () => {
    navigator.clipboard.writeText(withdrawalFormText);
    setCopiedForm(true);
    toast("Muster-Widerrufsformular in die Zwischenablage kopiert", "success");
    setTimeout(() => setCopiedForm(false), 3500);
  };

  const mailtoWithdrawal = `mailto:medatprep@gmail.com?subject=Widerruf%20gem%C3%A4%C3%9F%20%C2%A7%2011%20FAGG&body=${encodeURIComponent(
    withdrawalFormText
  )}`;

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
              <IconShield className="h-3.5 w-3.5 text-primary" />
              <span>14 Tage Widerrufsrecht (FAGG)</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/privacy"
              className="hidden text-xs sm:text-sm font-semibold text-ink-2 hover:text-primary sm:inline-block"
            >
              Datenschutz
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
              <span>🇦🇹 KSchG & FAGG konform · Stand: Jänner 2027</span>
            </div>

            <h1 className="display mt-5 text-[32px] xs:text-[38px] sm:text-[48px] leading-[1.08] text-ink">
              Allgemeine Geschäftsbedingungen &
              <br />
              <span className="text-primary">Gesetzliche Widerrufsbelehrung</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
              Vertragsbedingungen & Gesetzliches Rücktrittsrecht (FAGG)
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-ink-2">
              Transparenz, Fairness und Rechtssicherheit nach österreichischem Konsumentenschutzrecht.
              Bei uns gibt es keine versteckten Kosten, keine Knebelverträge und ein volles 14-tägiges
              gesetzliches Rücktrittsrecht für Verbraucher:innen.
            </p>

            {/* Trust Pillars */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5 text-left">
              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🛡️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">14 Tage Rücktritt</p>
                <p className="text-[11.5px] text-ink-3">Gesetzliches Recht nach § 11 FAGG</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">🚫</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Keine Abofalle</p>
                <p className="text-[11.5px] text-ink-3">Keine automatischen Endlos-Verlängerungen</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">💶</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Inkl. 20% USt.</p>
                <p className="text-[11.5px] text-ink-3">Reine Endpreise in Euro</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-4 shadow-sm">
                <span className="text-xl">⚖️</span>
                <p className="mt-2 text-sm sm:text-base font-bold text-ink">Österr. Recht</p>
                <p className="text-[11.5px] text-ink-3">Gerichtsstand Wien & KSchG</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- STATUTORY WITHDRAWAL HERO CARD ---------------- */}
        <section className="py-8 bg-paper-warm/30 border-b border-line">
          <div className="wrap max-w-4xl">
            <div className="rounded-2xl border-2 border-primary/25 bg-gradient-to-br from-paper via-primary-subtle/30 to-paper p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-block rounded-md bg-primary-muted px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                    § 11 FAGG Gesetzlicher Schutz
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink">
                    14-tägiges gesetzliches Rücktrittsrecht (Widerrufsbelehrung)
                  </h2>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-xs font-semibold text-ink-2">Unbürokratisch & schnell</span>
                </div>
              </div>

              <p className="mt-3 text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                Als Verbraucher:in im Sinne des Konsumentenschutzgesetzes (KSchG) hast du das Recht, binnen{" "}
                <strong>14 Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die
                Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
              </p>

              <div className="mt-5 rounded-xl border border-line bg-paper p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Muster-Widerrufsformular (Vorlage nach Anhang I B FAGG)
                  </p>
                  <button
                    onClick={handleCopyForm}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>{copiedForm ? "✓ Kopiert" : "Vorlage kopieren"}</span>
                  </button>
                </div>

                <pre className="overflow-x-auto rounded-lg bg-paper-warm/60 p-3.5 text-xs text-ink-2 font-mono leading-relaxed whitespace-pre-wrap">
                  {withdrawalFormText}
                </pre>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoWithdrawal}
                    className="btn btn-primary btn-sm text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <IconSend className="h-3.5 w-3.5" />
                    <span>Widerruf per E-Mail absenden</span>
                  </a>
                  <button
                    onClick={handleCopyForm}
                    className="btn btn-outline btn-sm text-xs font-semibold"
                  >
                    {copiedForm ? "✓ Formular kopiert!" : "Musterformular kopieren"}
                  </button>
                  <span className="text-[11.5px] text-ink-3">
                    oder formlos an: <strong className="text-ink">medatprep@gmail.com</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- MAIN TERMS SECTIONS ---------------- */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap max-w-4xl space-y-12">
            {/* Section 1: Scope */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Geltungsbereich, Vertragspartner & Begriffsbestimmungen
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Nutzungen und
                Bestellungen über die Lernplattform <strong>MedAT Prep</strong> (erreichbar unter medatprep.at
                sowie zugehörigen Subdomains) zwischen der:
              </p>
              <div className="rounded-xl border border-line bg-paper-warm/50 p-4 text-xs sm:text-sm text-ink-2 space-y-1">
                <p className="font-bold text-ink">MedAT Prep</p>
                <p>E-Mail für Kundensupport & rechtliche Anliegen:{" "}
                  <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary hover:underline">
                    medatprep@gmail.com
                  </a>
                </p>
                <p>Webseite:{" "}
                  <a href="https://medatprep.at" className="text-primary hover:underline">
                    https://medatprep.at
                  </a>
                </p>
                <p className="text-ink-3 pt-1">
                  (im Folgenden kurz „Anbieter“ oder „wir“) und den Nutzer:innen bzw. Kund:innen (im Folgenden „Nutzer:in“ oder „du“).
                </p>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) <strong>Verbraucher:in</strong> im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu
                Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit
                zugerechnet werden können (§ 1 KSchG).
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen der Nutzer:innen werden nicht
                Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
            </div>

            {/* Section 2: Withdrawal details */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Widerrufsbelehrung nach dem Fern- und Auswärtsgeschäfte-Gesetz (FAGG)
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) <strong>Widerrufsrecht:</strong> Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag
                zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) <strong>Ausübung des Widerrufs:</strong> Um dein Widerrufsrecht auszuüben, musst du uns (MedAT Prep, E-Mail:{" "}
                <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary underline">
                  medatprep@gmail.com
                </a>
                ) mittels einer eindeutigen Erklärung (z. B. einer mit der Post versandten E-Mail) über deinen Entschluss, diesen
                Vertrag zu widerrufen, informieren. Du kannst dafür das oben bereitgestellte Muster-Widerrufsformular verwenden,
                das jedoch nicht vorgeschrieben ist.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (3) <strong>Wahrung der Widerrufsfrist:</strong> Zur Wahrung der Frist reicht es aus, dass du die Mitteilung über
                die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (4) <strong>Folgen des Widerrufs:</strong> Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die
                wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
                die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir
                dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde
                ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
              </p>
            </div>

            {/* Section 3: Pricing & Payments */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Tarife, Preise & Zahlungsmodalitäten (§ 5 ECG)
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Sämtliche auf der Website genannten Preise verstehen sich in <strong>Euro (€)</strong> inklusive der
                gesetzlichen österreichischen Umsatzsteuer (derzeit 20 % USt.).
              </p>

              <div className="grid gap-3 sm:grid-cols-3 pt-2 text-xs sm:text-sm">
                <div className="rounded-xl border border-line bg-paper-warm/40 p-4 space-y-1">
                  <p className="font-bold text-ink text-base">Basis-Zugang</p>
                  <p className="text-xl font-extrabold text-emerald-600 display-num">0 €</p>
                  <p className="text-ink-3">Dauerhaft kostenloser Einstufungstest, BMS-Grundlagen & 200 Übungsfragen. Keine Zahlungsdaten erforderlich.</p>
                </div>

                <div className="rounded-xl border-2 border-primary/30 bg-primary-subtle/30 p-4 space-y-1">
                  <p className="font-bold text-ink text-base">MedAT Premium</p>
                  <p className="text-xl font-extrabold text-primary display-num">39 €</p>
                  <p className="text-ink-3">Voller Zugriff auf 5.000+ Fragen, BMS, KFF, Textverständnis, Probetests & didaktische Lernhilfe für die gesamte MedAT-Saison.</p>
                </div>

                <div className="rounded-xl border border-line bg-paper-warm/40 p-4 space-y-1">
                  <p className="font-bold text-ink text-base">Intensiv-Paket</p>
                  <p className="text-xl font-extrabold text-ink display-num">349 €</p>
                  <p className="text-ink-3">Inklusive 6 persönlicher Coaching-Sessions mit MedAT-Top-Platzierer:innen und Notfall-Support vor dem Test.</p>
                </div>
              </div>

              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2 pt-2">
                (2) Die Bezahlung erfolgt über sichere, nach <strong>PCI-DSS Level 1</strong> zertifizierte Payment-Dienstleister
                (z. B. Paddle, Stripe, PayPal, Kreditkarte oder EPS). Die Belastung deines Zahlungsmittels
                erfolgt unmittelbar mit Abschluss des Kaufvorgangs.
              </p>
            </div>

            {/* Section 4: Term & Termination */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Laufzeiten, Kündigung & Fair-Play-Garantie
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) <strong>Keine versteckten Endlos-Verträge:</strong> Unsere Saison- und Jahreszugänge enden automatisch mit
                Ablauf der gebuchten Periode oder können jederzeit mit einem einzigen Klick im Benutzerkonto bzw. per formloser
                E-Mail an <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary underline">medatprep@gmail.com</a> beendet werden.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) Bei vorzeitiger Kündigung eines Abonnements bleibt der gebuchte Zugang bis zum Ende des bereits bezahlten
                Abrechnungszeitraums uneingeschränkt nutzbar. Es fallen keinerlei Kündigungs- oder Bearbeitungsgebühren an.
              </p>
            </div>

            {/* Section 5: Warranty & Success Disclaimer */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 5
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Gewährleistung, Unabhängigkeit & E-Learning-Klarstellung
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) <strong>Gesetzliche Gewährleistung:</strong> Es gelten die gesetzlichen Bestimmungen des österreichischen
                Verbrauchergewährleistungsgesetzes (VGG) sowie des ABGB.
              </p>
              <div className="rounded-xl border border-line bg-amber-500/10 p-4 space-y-2 text-xs sm:text-sm text-ink-2">
                <p className="font-bold text-ink flex items-center gap-1.5">
                  <span>⚠️</span>
                  <span>(2) Transparenz-Hinweis & Unabhängigkeit:</span>
                </p>
                <p>
                  MedAT Prep ist ein vollkommen <strong>unabhängiges Vorbereitungssystem</strong> und steht in keiner
                  organisatorischen, wirtschaftlichen oder offiziellen Verbindung zu den Medizinischen Universitäten Wien,
                  Innsbruck, Graz oder der JKU Linz.
                </p>
                <p>
                  Obwohl unsere didaktischen Fragen und Lernsysteme auf den offiziellen Stichwortkatalogen von
                  medizinstudieren.at basieren und tausende Studierende erfolgreich vorbereitet haben, hängt das tatsächliche
                  Bestehen des MedAT stets von der individuellen Vorbereitung, dem Fleiß und der Prüfungsform der Kandidat:innen ab.
                  Ein einklagbarer Rechtsanspruch auf das Bestehen des Tests oder einen Medizinstudienplatz besteht daher naturgemäß nicht.
                </p>
                <p className="pt-1.5 font-semibold text-ink">
                  (3) Reine E-Learning-Plattform / Keine Entscheidungsfindung über natürliche Personen:
                </p>
                <p>
                  MedAT Prep ist eine reine E-Learning- und Übungssoftware für das selbstständige Studium. Die Plattform und ihre Software treffen keinerlei Zulassungs-, Auswahl-, Eignungs-, Bewertungs- oder sonstige Entscheidungen über natürliche Personen. Sämtliche Punkteschätzungen oder Testsimulationen dienen ausschließlich der individuellen Lernkontrolle der Nutzer:innen. Zulassungsentscheidungen zum Medizinstudium obliegen ausnahmslos und ausschließlich den zuständigen Medizinischen Universitäten.
                </p>
              </div>
            </div>

            {/* Section 6: Copyright & IP */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 6
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Urheberrecht & Nutzungslizenzen
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Sämtliche Inhalte der Plattform (insbesondere Fragenpools, Rechenwege, didaktische Erklärungen,
                Grafiken, Quellcodes und Softwarearchitektur) sind urheberrechtlich geschützt.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) Die Nutzer:in erhält für die Dauer des Vertrages ein einfaches, nicht übertragbares Recht, die bereitgestellten
                Trainingsmaterialien für ihre <strong>persönliche MedAT-Vorbereitung</strong> zu nutzen. Die Weitergabe von
                Zugangsdaten an Dritte, gewerbliches Scraping oder die unerlaubte Vervielfältigung der Fragen ist unzulässig.
              </p>
            </div>

            {/* Section 7: Dispute Resolution & Jurisdiction */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                  § 7
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-ink">
                  Streitbeilegung & Gerichtsstand
                </h2>
              </div>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (1) Die Europäische Kommission stellt eine Plattform zur <strong>Online-Streitbeilegung (OS)</strong> bereit,
                abrufbar unter:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere Kontakt-E-Mail lautet:{" "}
                <a href="mailto:medatprep@gmail.com" className="font-semibold text-primary">
                  medatprep@gmail.com
                </a>
                .
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (2) In Österreich erkennen wir die <strong>Internet Ombudsstelle</strong> (
                <a
                  href="https://www.ombudsstelle.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline"
                >
                  www.ombudsstelle.at
                </a>
                ) als außergerichtliche Schlichtungsstelle an.
              </p>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-ink-2">
                (3) Es gilt ausschließlich österreichisches Recht unter Ausschluss des UN-Kaufrechts (CISG).
                Für Klagen gegen Verbraucher:innen, die ihren Wohnsitz oder gewöhnlichen Aufenthalt in Österreich haben,
                ist das Gericht zuständig, in dessen Sprengel der Wohnsitz oder gewöhnliche Aufenthalt liegt (§ 14 KSchG).
                In allen anderen Fällen gilt das sachlich zuständige Gericht in <strong>Wien, Österreich</strong> als vereinbart.
              </p>
            </div>

            {/* Direct Contact Action Box */}
            <div className="rounded-2xl border-2 border-primary/20 bg-paper-warm p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-ink">
                Hast du Fragen zu den AGB, Zahlungen oder deinem Widerruf?
              </h3>
              <p className="mx-auto max-w-lg text-sm text-ink-2">
                Unser Support-Team in Wien steht dir jederzeit zur Seite. Wir antworten werktags sowie am
                Wochenende innerhalb kürzester Zeit.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:medatprep@gmail.com?subject=Frage%20zu%20AGB%20%2F%20Widerruf"
                  className="btn btn-primary btn-sm px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                >
                  <IconSend className="h-4 w-4" />
                  <span>Nachricht an Support senden</span>
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
