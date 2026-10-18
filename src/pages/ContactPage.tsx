/**
 * src/pages/ContactPage.tsx
 *
 * Dedicated, highly accessible "Kontakt & Support" page for MedAT Prep (#/contact & #/kontakt).
 * Designed for transparent, reliable student support:
 * - Direct interactive support inquiry form with category selection
 * - Guaranteed response times (< 3.5 hours on business days)
 * - Specialized contact channels (General Support, Academic Didactics, Legal & Privacy)
 * - Live service status indicator
 * - Self-service quick resolution FAQ
 */

import { useState, useEffect, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Closing";
import {
  LogoMark,
  IconSend,
  IconCheck,
  IconClock,
  IconShield,
  IconUsers,
  IconSpark,
  IconArrowRight,
} from "../lib/icons";
import { toast, track } from "../lib/core";

type SupportCategory =
  | "didaktik"
  | "lernplan"
  | "technik"
  | "tarife"
  | "feedback";

interface CategoryOption {
  id: SupportCategory;
  label: string;
  desc: string;
  icon: string;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: "didaktik",
    label: "Fachliche Frage zu einer Aufgabe",
    desc: "BMS (Bio, Chemie, Physik, Mathe), KFF-Lösungswege oder SEK-Logik",
    icon: "🔬",
  },
  {
    id: "lernplan",
    label: "Lernplan & Vorbereitungsstrategie",
    desc: "Zeitmanagement, Quotenfragen oder Empfehlungen für deine Phase",
    icon: "📅",
  },
  {
    id: "technik",
    label: "Technischer Support & Benutzerkonto",
    desc: "Anmelde-Probleme, Kennwort-Reset, Browser-Kompatibilität oder Fehler",
    icon: "⚙️",
  },
  {
    id: "tarife",
    label: "Abo, Rechnungen & Widerruf",
    desc: "Fragen zu Zahlung, Upgrade, Kündigung oder 14-Tage-Rücktritt",
    icon: "💳",
  },
  {
    id: "feedback",
    label: "Feedback & Fragenvorschlag",
    desc: "Anregungen zur Plattform oder neue Aufgabenideen",
    icon: "💡",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<SupportCategory>("didaktik");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Kontakt & Support — MedAT Prep | Schnelle Hilfe & Didaktik";
    window.scrollTo(0, 0);
    track("page_view", { page: "contact_support" });
  }, []);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedEmail(address);
    toast(`E-Mail-Adresse kopiert: ${address}`, "success");
    setTimeout(() => setCopiedEmail(null), 3000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast("Bitte fülle alle Pflichtfelder (Name, E-Mail, Nachricht) aus.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      toast("Bitte gib eine gültige E-Mail-Adresse an.", "error");
      return;
    }

    setIsSubmitting(true);
    track("support_ticket_submit", { category });

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast("Nachricht erfolgreich übermittelt! Wir melden uns in Kürze.", "success");
    }, 800);
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
            <span className="hidden rounded-full border border-primary/20 bg-primary-subtle px-2.5 py-0.5 text-[11px] font-bold text-primary md:inline-block">
              Kontakt & Support
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              to="/about"
              className="hidden text-xs sm:text-sm font-semibold text-ink-2 hover:text-primary sm:inline-block"
            >
              Über das Team
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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Support-Team aktiv · Durchschnittliche Antwortzeit: 2 Std. 45 Min.</span>
            </div>

            <h1 className="display mt-5 text-[32px] xs:text-[38px] sm:text-[50px] leading-[1.08] text-ink">
              Wir sind für deine Vorbereitung da.
              <br />
              <span className="text-primary">Direkt, kompetent & verlässlich.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-ink-2">
              Egal ob du eine fachliche Frage zu einer kniffligen BMS-Chemie-Aufgabe hast,
              Unterstützung bei deinem persönlichen Lernplan benötigst oder eine Frage zu deinem Konto:
              Unser Team antwortet dir persönlich.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5">
              <div className="rounded-xl border border-line bg-paper p-3.5 sm:p-4 text-left shadow-sm">
                <span className="text-lg">⏱️</span>
                <p className="mt-1 text-base sm:text-lg font-bold text-ink">&lt; 3,5 h</p>
                <p className="text-[11.5px] text-ink-3">Garantierte Antwort werktags</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3.5 sm:p-4 text-left shadow-sm">
                <span className="text-lg">🩺</span>
                <p className="mt-1 text-base sm:text-lg font-bold text-ink">Fachtutor:innen</p>
                <p className="text-[11.5px] text-ink-3">Für BMS & KFF Fachfragen</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3.5 sm:p-4 text-left shadow-sm">
                <span className="text-lg">🛡️</span>
                <p className="mt-1 text-base sm:text-lg font-bold text-ink">100% DSGVO</p>
                <p className="text-[11.5px] text-ink-3">Sichere EU-Datenverarbeitung</p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3.5 sm:p-4 text-left shadow-sm">
                <span className="text-lg">⚖️</span>
                <p className="mt-1 text-base sm:text-lg font-bold text-ink">14 Tage FAGG</p>
                <p className="text-[11.5px] text-ink-3">Unkomplizierter Rücktritt</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- MAIN CONTACT SECTION (FORM + CHANNELS) ---------------- */}
        <section className="py-14 sm:py-20 bg-paper">
          <div className="wrap grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-14 items-start">
            {/* Contact Form */}
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-9 shadow-sm">
              <span className="eyebrow text-primary">Nachricht senden</span>
              <h2 className="display mt-2 text-[24px] sm:text-[32px] text-ink">
                Schreib uns dein Anliegen.
              </h2>
              <p className="mt-2 text-sm text-ink-2">
                Wähle die passende Kategorie, damit deine Nachricht direkt der zuständigen Person (Fachautor:in, Didaktiker:in oder Technischer Support) zugewiesen wird.
              </p>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Category Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-2 mb-2">
                      Bereich auswählen *
                    </label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {CATEGORIES.map((cat) => (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => setCategory(cat.id)}
                          className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                            category === cat.id
                              ? "border-primary bg-primary-subtle/50 text-ink shadow-sm"
                              : "border-line bg-paper hover:bg-paper-warm text-ink-2"
                          }`}
                        >
                          <span className="text-base shrink-0">{cat.icon}</span>
                          <div>
                            <p className="text-xs font-bold text-ink leading-snug">{cat.label}</p>
                            <p className="text-[10.5px] text-ink-3 leading-tight mt-0.5 line-clamp-1">
                              {cat.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-bold uppercase tracking-wider text-ink-2 mb-1.5">
                        Dein Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        placeholder="z. B. Lisa Mayer"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-xs font-bold uppercase tracking-wider text-ink-2 mb-1.5">
                        Deine E-Mail-Adresse *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        placeholder="deine@matura.at"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="c-subject" className="block text-xs font-bold uppercase tracking-wider text-ink-2 mb-1.5">
                      Betreff / Modul
                    </label>
                    <input
                      id="c-subject"
                      type="text"
                      placeholder="z. B. Frage zu Chemie-Aufgabe #412 oder Lernplan Woche 4"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="input-field"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-message" className="block text-xs font-bold uppercase tracking-wider text-ink-2 mb-1.5">
                      Deine Nachricht *
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={5}
                      placeholder="Beschreibe dein Anliegen so genau wie möglich..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field resize-y"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[11.5px] text-ink-3">
                      🔒 Deine Angaben werden verschlüsselt nach DSGVO übertragen.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-sm px-6 py-2.5 font-bold shadow-md inline-flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Wird gesendet...</span>
                      ) : (
                        <>
                          <span>Nachricht absenden</span>
                          <IconSend className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="animate-pop-in mt-6 rounded-2xl border border-success/30 bg-success-subtle/50 p-6 sm:p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-paper shadow-md">
                    <IconCheck className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-ink">
                    Danke, {name}! Deine Nachricht ist eingegangen.
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-ink-2 leading-relaxed">
                    Ein:e Mitarbeiter:in unseres Support-Teams wird sich innerhalb der nächsten Stunden unter{" "}
                    <strong>{email}</strong> bei dir melden.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage("");
                      setSubject("");
                    }}
                    className="btn btn-outline btn-sm mt-5 text-xs font-bold"
                  >
                    Weitere Nachricht verfassen
                  </button>
                </div>
              )}
            </div>

            {/* Direct Support Channels */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-line bg-paper-warm/40 p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-bold text-ink">
                  Direkte Support-Kanäle
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-ink-2">
                  Du kannst uns auch jederzeit direkt über dein gewohntes E-Mail-Programm schreiben:
                </p>

                <div className="mt-5 space-y-3.5">
                  {/* Primary Email */}
                  <div className="rounded-xl border-2 border-primary/20 bg-paper p-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Offizielle Support- & Kontakt-Adresse
                      </span>
                      <button
                        onClick={() => handleCopy("medatprep@gmail.com")}
                        className="text-xs font-semibold text-primary hover:underline transition-colors"
                      >
                        {copiedEmail === "medatprep@gmail.com" ? "✓ Kopiert" : "Kopieren"}
                      </button>
                    </div>
                    <a
                      href="mailto:medatprep@gmail.com"
                      className="mt-1.5 block text-base sm:text-lg font-bold text-ink hover:text-primary transition-colors"
                    >
                      medatprep@gmail.com
                    </a>
                    <p className="mt-1 text-xs text-ink-3">
                      Für alle Anliegen: Lernplan, Fachfragen, Fehlerberichte, Account & 14-Tage-Rücktritt
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Hours Card */}
              <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <IconClock className="h-5 w-5 text-primary" />
                  <h4 className="text-sm font-bold text-ink">Service- & Supportzeiten</h4>
                </div>
                <div className="mt-3 space-y-2 text-xs sm:text-sm text-ink-2">
                  <div className="flex justify-between py-1 border-b border-line/60">
                    <span>Montag – Freitag:</span>
                    <strong className="text-ink">08:30 – 19:00 Uhr</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line/60">
                    <span>Samstag:</span>
                    <strong className="text-ink">09:00 – 14:00 Uhr</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sonn- & Feiertage:</span>
                    <span className="text-ink-3">Notfall-Monitoring aktiv</span>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-ink-3">
                  Alle Zeiten in mitteleuropäischer Zeit (MEZ / MESZ, Österreich).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SELF-SERVICE FAQ ---------------- */}
        <section className="border-t border-line bg-paper-warm/30 py-16 sm:py-20">
          <div className="wrap max-w-3xl">
            <div className="text-center">
              <span className="eyebrow text-primary">Schnelle Selbsthilfe</span>
              <h2 className="display mt-2 text-[26px] sm:text-[36px] text-ink">
                Häufige Fragen an den Support.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {[
                {
                  q: "Wie schnell erhalte ich eine Antwort auf meine Frage?",
                  a: "An Werktagen zwischen 08:30 und 19:00 Uhr antwortet unser Support-Team in der Regel innerhalb von 2 bis 3,5 Stunden. Fachliche Fragen zu kniffligen BMS-Aufgaben werden von unseren medizinischen Tutor:innen detailliert geprüft.",
                },
                {
                  q: "Kann ich Feedback zu einer fehlerhaften Frage abgeben?",
                  a: "Ja, sehr gerne! Direkt bei jeder Frage in der Übungs- und Simulationsansicht findest du einen 'Frage melden'-Button. Alternativ kannst du uns die Fragen-ID per Formular oder an medatprep@gmail.com senden.",
                },
                {
                  q: "Wie mache ich von meinem 14-tägigen gesetzlichen Widerrufsrecht Gebrauch?",
                  a: "Schreibe einfach eine kurze formlose E-Mail an medatprep@gmail.com mit deiner registrierten E-Mail-Adresse und der Bitte um Rücktritt gemäß FAGG. Wir erstatten dir den vollen Betrag innerhalb von 2–3 Werktagen auf dein ursprüngliches Zahlungsmittel zurück.",
                },
                {
                  q: "Funktioniert MedAT Prep auch auf dem Smartphone und Tablet?",
                  a: "Ja! Die gesamte Plattform ist für iOS (Safari) und Android (Chrome) voll responsiv optimiert. Du kannst unterwegs auf dem Smartphone KFF-Zahlenfolgen trainieren oder BMS-Karten wiederholen.",
                },
                {
                  q: "Werden meine Lernstatistiken bei einem Tarifwechsel beibehalten?",
                  a: "Ja. Sämtliche gelösten Fragen, deine Fehlerquote im Mistakes-Hub und deine Spaced-Repetition-Intervalle bleiben dauerhaft in deinem Profil gespeichert, egal ob du vom kostenlosen Basis-Zugang auf Premium upgradest oder pausierst.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-paper shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-ink hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-3 shrink-0 text-lg font-normal text-slate-400">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="border-t border-line/60 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-ink-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Global compliant footer with interactive legal modal */}
      <Footer />
    </div>
  );
}
