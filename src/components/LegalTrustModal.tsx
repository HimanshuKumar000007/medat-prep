import React, { useEffect, useState } from "react";
import { track } from "../lib/core";
import { LogoMark } from "../lib/icons";

export type LegalTab =
  | "ueber-uns"
  | "kontakt"
  | "datenschutz"
  | "agb"
  | "disclaimer"
  | "impressum";

interface TabItem {
  id: LegalTab;
  label: string;
  badge?: string;
  icon: string;
}

const TABS: TabItem[] = [
  { id: "ueber-uns", label: "Über uns", badge: "Team & Mission", icon: "🏢" },
  { id: "kontakt", label: "Kontakt & Support", badge: "< 4h Antwort", icon: "✉️" },
  { id: "datenschutz", label: "Datenschutz", badge: "100% DSGVO", icon: "🛡️" },
  { id: "agb", label: "AGB & Widerruf", badge: "14 Tage FAGG", icon: "⚖️" },
  { id: "disclaimer", label: "Haftungsausschluss", badge: "Transparenz", icon: "⚠️" },
  { id: "impressum", label: "Impressum", badge: "§ 5 ECG / Wien", icon: "🏛️" },
];

export interface LegalTrustModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export default function LegalTrustModal({
  isOpen,
  onClose,
  initialTab = "impressum",
}: LegalTrustModalProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      track("legal_modal_open", { tab: activeTab });
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, activeTab]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative flex flex-col w-full max-w-4xl max-h-[90vh] bg-paper rounded-2xl sm:rounded-3xl shadow-2xl border border-line overflow-hidden animate-pop-in z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-7 sm:py-5 border-b border-line bg-paper-2">
          <div className="flex items-center gap-3">
            <LogoMark className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="display text-lg sm:text-xl text-ink leading-none">
                  MedAT <span className="text-slate-500 font-sans font-medium text-sm">Prep</span>
                </span>
                <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10.5px] font-bold text-primary">
                  <span>🇦🇹</span>
                  <span>Österreichisches Recht</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-[12px] text-ink-3 mt-0.5" id="legal-modal-title">
                Transparenz, Unternehmensdaten & Rechtskonformität
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-ink-3 hover:text-ink hover:bg-paper-3 transition-colors touch-manipulation"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {/* Content body with responsive layout (tabs left on desktop, scrollable top bar on mobile) */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Navigation tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto no-scrollbar border-b md:border-b-0 md:border-r border-line bg-paper-3 md:w-64 p-2 sm:p-3 shrink-0 gap-1">
            {TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    track("legal_tab_switch", { tab: tab.id });
                  }}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs sm:text-sm font-semibold transition-all shrink-0 md:w-full touch-manipulation ${
                    active
                      ? "bg-night text-paper shadow-md"
                      : "text-ink-2 hover:bg-paper-2 hover:text-ink"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{tab.icon}</span>
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </span>
                  {tab.badge && (
                    <span
                      className={`hidden md:inline-block text-[10px] font-medium px-1.5 py-0.5 rounded ${
                        active ? "bg-slate-800 text-slate-300" : "bg-paper text-ink-4 border border-line"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab content area */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 sm:py-6 text-ink-2 nice-scroll text-sm sm:text-[14.5px] leading-relaxed">
            {activeTab === "ueber-uns" && (
              <div className="space-y-5 animate-screen-in">
                <div>
                  <span className="inline-block rounded-md bg-primary-muted px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                    Wer wir sind & warum wir das tun
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1.5">
                    Über MedAT Prep
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-paper-2 border border-line space-y-2.5">
                  <p className="font-semibold text-ink">
                    „Wir glauben, dass der Zugang zum Medizinstudium in Österreich vom Fleiß und Verstand abhängen muss — nicht vom Kontostand der Eltern.“
                  </p>
                  <p className="text-xs sm:text-[13px] text-ink-3">
                    Gegründet in Wien von ehemaligen MedAT-Spitzenkandidat:innen der MedUni Wien und MedUni Graz sowie Bildungsexpert:innen.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-ink text-base">Unsere Geschichte</h4>
                  <p>
                    Jedes Jahr bewerben sich über 16.000 junge Menschen auf rund 1.950 Studienplätze in Human- und Zahnmedizin an den Medizinischen Universitäten Wien, Innsbruck, Graz und Linz.
                  </p>
                  <p>
                    Dabei hat sich ein intransparenter Markt aus Vorbereitungskursen entwickelt, der von verzweifelten Kandidat:innen und deren Eltern oft zwischen <strong>1.500 € und 3.000 €</strong> für mehrtägige Frontal-Vorträge verlangt. Wissenschaftliche Lernforschung belegt jedoch: Frontales Zuhören bringt für multiple Testformate wie KFF oder BMS nur minimale Steigerung.
                  </p>
                  <p>
                    Was wirklich hilft, ist <strong>aktives Wiederholen (Active Recall)</strong>, tägliches Spaced Repetition und das Lösen tausender Fragen unter Echtzeit-Bedingungen mit sofortiger, didaktisch aufbereiteter Rückmeldung.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl border border-line bg-paper-3 text-center sm:text-left">
                    <p className="text-xl font-extrabold text-primary display-num">100%</p>
                    <p className="font-bold text-ink text-xs mt-0.5">Offizieller Stichwortkatalog</p>
                    <p className="text-[11px] text-ink-3 mt-1">Strikte Ausrichtung an den Kriterien von medizinstudieren.at</p>
                  </div>
                  <div className="p-3 rounded-xl border border-line bg-paper-3 text-center sm:text-left">
                    <p className="text-xl font-extrabold text-ink display-num">Wien</p>
                    <p className="font-bold text-ink text-xs mt-0.5">Entwickelt in Österreich</p>
                    <p className="text-[11px] text-ink-3 mt-1">Für MedUni Wien, Innsbruck, Graz und JKU Linz</p>
                  </div>
                  <div className="p-3 rounded-xl border border-line bg-paper-3 text-center sm:text-left">
                    <p className="text-xl font-extrabold text-emerald-600 display-num">Fair</p>
                    <p className="font-bold text-ink text-xs mt-0.5">Echter Basis-Freizugang</p>
                    <p className="text-[11px] text-ink-3 mt-1">Voller Einstufungstest und Grundkurs dauerhaft gratis</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-2 p-3.5 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-ink">Möchtest du das gesamte Team & Didaktik-Manifest kennenlernen?</p>
                    <p className="text-[11px] text-ink-3">Lerne unsere Wiener Ärzt:innen, Prüfer:innen und Partner-Universitäten kennen.</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.hash = "#/about";
                    }}
                    className="btn btn-primary btn-sm text-xs font-bold whitespace-nowrap"
                  >
                    Vollständige Über-uns-Seite →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "kontakt" && (
              <div className="space-y-5 animate-screen-in">
                <div>
                  <span className="inline-block rounded-md bg-primary-muted px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                    Support & Erreichbarkeit
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1.5">
                    Kontakt & Kundenservice
                  </h3>
                </div>

                <p>
                  Hast du Fragen zur Plattform, zu den Tarifen, technischen Problemen oder benötigst du Unterstützung bei einer biologischen oder mathematischen MedAT-Aufgabe? Unser Team in Wien ist direkt für dich da.
                </p>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl border border-line bg-paper-2">
                    <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Allgemeine Anfragen & Support</p>
                    <a
                      href="mailto:medatprep@gmail.com"
                      className="text-base font-bold text-primary hover:underline block mt-1"
                    >
                      medatprep@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-2">
                      Ø Antwortzeit: <strong>unter 3,5 Stunden</strong> (7 Tage / Woche erreichbar)
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-line bg-paper-2">
                    <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Büro & Postanschrift</p>
                    <p className="text-sm font-semibold text-ink mt-1">
                      MedAT Prep GmbH
                    </p>
                    <p className="text-xs text-ink-3 mt-0.5">
                      Praterstraße 1<br />
                      1020 Wien, Österreich
                    </p>
                    <p className="text-xs text-emerald-700 font-medium mt-2 flex items-center gap-1">
                      <span>✓</span> Eingetragen beim Handelsgericht Wien
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-line bg-emerald-50/70 border-emerald-200/60 text-emerald-950 text-xs sm:text-[13px] leading-relaxed">
                  <p className="font-bold text-emerald-900 mb-1">💬 Fachliche Fragen zu Übungsaufgaben:</p>
                  <p>
                    Wenn du innerhalb einer Übungsfrage oder eines Probetests eine Unklarheit entdeckst, kannst du diese direkt in der Frage markieren oder unserem didaktischen Tutor eine Nachfrage stellen. Unser MedAT-Fachlektorat prüft gemeldete Items laufend.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-2 p-3.5 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-ink">Möchtest du uns direkt eine Nachricht senden?</p>
                    <p className="text-[11px] text-ink-3">Nutze unser Support-Formular mit garantierter Rückmeldung.</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.hash = "#/contact";
                    }}
                    className="btn btn-primary btn-sm text-xs font-bold whitespace-nowrap"
                  >
                    Zur Kontakt- & Support-Seite →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "datenschutz" && (
              <div className="space-y-5 animate-screen-in">
                <div>
                  <span className="inline-block rounded-md bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                    DSGVO & Österreichisches DSG
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1.5">
                    Datenschutzerklärung (DSGVO)
                  </h3>
                </div>

                <p className="text-xs text-ink-4">Stand: Jänner 2027 · Gültig für alle Dienste unter medatprep.at</p>

                <div className="p-3.5 rounded-xl bg-paper-2 border border-line space-y-1">
                  <p className="text-xs font-bold uppercase text-ink-3 tracking-wide">1. Verantwortliche Stelle</p>
                  <p className="text-sm text-ink">
                    MedAT Prep GmbH, Praterstraße 1, 1020 Wien, Österreich.<br />
                    E-Mail für Datenschutzanliegen:{" "}
                    <a href="mailto:medatprep@gmail.com" className="text-primary underline">
                      medatprep@gmail.com
                    </a>
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">2. Zweck und Rechtsgrundlagen der Verarbeitung</h4>
                  <p>
                    Wir verarbeiten personenbezogene Daten unserer Nutzer:innen grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen (Einstufungstest, personalisierter Lernplan, Probetests, Lernstatistik) erforderlich ist.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-ink-2">
                    <li>
                      <strong>Bereitstellung des Dienstes & Benutzerkonto:</strong> Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrages bzw. vorvertragliche Maßnahmen).
                    </li>
                    <li>
                      <strong>Zahlungsabwicklung:</strong> Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. c DSGVO (Erfüllung gesetzlicher Aufbewahrungspflichten nach österr. BAO und UGB).
                    </li>
                    <li>
                      <strong>Statistische Lernanalyse:</strong> Berechnung von Stärken- und Schwächenprofilen zur Personalisierung des Lernfortschritts.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">3. Kein Verkauf von Daten / Europäisches Hosting (Supabase)</h4>
                  <p>
                    Wir garantieren ausdrücklich: Deine Lerndaten, Fehlerstatistiken und Prüfungsergebnisse werden zu <strong>keinem Zeitpunkt an Dritte verkauft</strong> oder für fremde Werbezwecke weitergegeben.
                  </p>
                  <p>
                    Alle Benutzerkonten und Lerndaten werden über <strong>Supabase (Managed PostgreSQL)</strong> in hochsicheren Rechenzentren innerhalb der Europäischen Union (Region Frankfurt / EU Central) gespeichert. Sämtliche Tabellen sind durch kryptographische Row-Level-Security (RLS) policies auf Datenbankebene isoliert und Übertragungen erfolgen durchgehend per TLS 1.3 / AES-256.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">4. Deine Betroffenenrechte</h4>
                  <p>
                    Dir stehen nach der DSGVO die Rechte auf <strong>Auskunft (Art. 15)</strong>, <strong>Berichtigung (Art. 16)</strong>, <strong>Löschung (Art. 17)</strong>, <strong>Einschränkung der Verarbeitung (Art. 18)</strong> und <strong>Datenübertragbarkeit (Art. 20)</strong> zu.
                  </p>
                  <p>
                    Zuständige Aufsichtsbehörde in Österreich ist die <strong>Österreichische Datenschutzbehörde (DSB)</strong>, Barichgasse 40-42, 1030 Wien.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-2 p-3.5 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-ink">Vollständige technische Architektur & AVV einsehen?</p>
                    <p className="text-[11px] text-ink-3">Details zu RLS-Policies, Supabase-Verschlüsselung, Datenlöschfristen & DSGVO-Formular.</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.hash = "#/privacy";
                    }}
                    className="btn btn-primary btn-sm text-xs font-bold whitespace-nowrap"
                  >
                    Vollständige Datenschutzerklärung →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "agb" && (
              <div className="space-y-5 animate-screen-in">
                <div>
                  <span className="inline-block rounded-md bg-primary-muted px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                    KSchG & FAGG Konform
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1.5">
                    AGB & Gesetzliches Widerrufsrecht
                  </h3>
                </div>

                <p className="text-xs text-ink-4">Stand: Jänner 2027 · Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.</p>

                <div className="p-4 rounded-xl border border-primary/25 bg-primary-subtle text-ink space-y-2">
                  <p className="font-bold text-sm text-[#991B1B]">
                    🛡️ Gesetzliche Widerrufsbelehrung (14 Tage Rücktrittsrecht nach § 11 FAGG)
                  </p>
                  <p className="text-xs leading-relaxed text-ink-2">
                    Als Verbraucher:in hast du das Recht, binnen <strong>14 Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
                  </p>
                  <p className="text-xs leading-relaxed text-ink-2">
                    Um dein Widerrufsrecht auszuüben, reicht eine formlose Mitteilung an{" "}
                    <a href="mailto:medatprep@gmail.com" className="font-bold underline text-primary">
                      medatprep@gmail.com
                    </a>
                    . Wir erstatten dir unverzüglich, spätestens binnen 14 Tagen, alle Zahlungen auf das ursprüngliche Zahlungsmittel zurück.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">1. Vertragsgegenstand</h4>
                  <p>
                    MedAT Prep stellt webbasierte digitale Trainingsinhalte, Prüfungsfragen, didaktische Rechenwege, adaptive Lernpläne sowie Prüfungssimulationen zur eigenverantwortlichen Vorbereitung auf den österreichischen Aufnahmetest für medizinische Studien (MedAT-H und MedAT-Z) bereit.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">2. Preise & Zahlungsbedingungen</h4>
                  <p>
                    Alle angegebenen Preise verstehen sich in Euro inklusive der gesetzlichen österreichischen Umsatzsteuer (derzeit 20 % USt.).
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-ink-2">
                    <li><strong>Basis-Zugang:</strong> 0 € dauerhaft kostenlos (keine Zahlungsdaten erforderlich).</li>
                    <li><strong>Premium-Zugang:</strong> 39 € für 12 Monate voller Zugriff auf alle 5.000+ Fragen, Simulationen und die didaktische Lernhilfe. Keine versteckten Kosten.</li>
                    <li><strong>Intensiv-Paket:</strong> 349 € einmalig inklusive 6 persönlicher Coaching-Sessions bis zum Testtag.</li>
                  </ul>
                  <p className="text-[11px] text-ink-3 pt-1">
                    Rechtlicher Hinweis: MedAT Prep ist eine reine E-Learning-Plattform. Die Software trifft keinerlei Zulassungs- oder Auswahlentscheidungen über Personen.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">3. Kündigung & Laufzeit</h4>
                  <p>
                    Der Premium-Zugang ist mit einer festen Laufzeit für das jeweilige MedAT-Jahr ausgestattet oder kann jederzeit mit einem Klick in den Kontoeinstellungen gekündigt werden. Es gibt keine Knebelverträge oder automatische Endlos-Verlängerungen.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">4. Gerichtsstand</h4>
                  <p>
                    Gerichtsstand für alle Streitigkeiten ist, sofern gesetzlich zulässig, das sachlich zuständige Gericht in <strong>Wien, Österreich</strong>.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-2 p-3.5 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-ink">Vollständige AGB & Muster-Widerrufsformular einsehen?</p>
                    <p className="text-[11px] text-ink-3">Inklusive KSchG-Bestimmungen, Kündigungsgarantie & 1-Klick-Widerrufsvorlage.</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.hash = "#/terms";
                    }}
                    className="btn btn-primary btn-sm text-xs font-bold whitespace-nowrap"
                  >
                    Vollständige AGB & Widerruf →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "disclaimer" && (
              <div className="space-y-5 animate-screen-in">
                <div>
                  <span className="inline-block rounded-md bg-amber-100 text-amber-800 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                    Transparenz-Hinweis
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1.5">
                    Haftungsausschluss & Unabhängigkeit
                  </h3>
                </div>

                <div className="p-4 rounded-xl border border-line bg-paper-2 space-y-2.5 text-xs sm:text-sm">
                  <p className="font-bold text-ink">
                    1. Unabhängiges Vorbereitungsangebot
                  </p>
                  <p>
                    MedAT Prep ist ein <strong>vollkommen unabhängiges Bildungs- und Übungssystem</strong>. Es besteht weder eine organisatorische, wirtschaftliche noch offizielle Verbindung oder Kooperation mit den Trägeruniversitäten des Tests:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-ink-2">
                    <li>Medizinische Universität Wien (MedUni Wien)</li>
                    <li>Medizinische Universität Innsbruck</li>
                    <li>Medizinische Universität Graz</li>
                    <li>Medizinische Fakultät der Johannes Kepler Universität Linz (JKU Linz)</li>
                  </ul>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">2. Markenrechte & Testformat</h4>
                  <p>
                    „MedAT“, „MedAT-H“ und „MedAT-Z“ sind geschützte Bezeichnungen der oben genannten Universitäten. Die Erwähnung auf dieser Plattform erfolgt ausschließlich zu beschreibenden Zwecken (Kennzeichnung des Anwendungsbereichs unserer Trainingssoftware).
                  </p>
                  <p>
                    Alle in MedAT Prep enthaltenen Multiple-Choice-Aufgaben, Figuren, Rechenwege und didaktischen Texte wurden von unserem eigenen Autoren- und Fachlektoratsteam selbstständig nach den öffentlich publizierten Kriterien des offiziellen Stichwortkatalogs (abrufbar auf medizinstudieren.at) erstellt.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-ink text-sm sm:text-base">3. Keine Erfolgs- oder Platzierungsgarantie</h4>
                  <p>
                    Der MedAT ist ein relatives Auswahl- und Rankingverfahren, bei dem die Zuteilung der Studienplätze von den Leistungen aller am selben Testtag antretenden Personen abhängt. Obwohl unsere Vorbereitungsmethodik auf empirischer Lernforschung basiert, kann keine rechtliche Gewähr oder Garantie für eine erfolgreiche Zuteilung eines Studienplatzes übernommen werden.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-2 p-3.5 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-ink">Vollständigen Haftungsausschluss & Markenhinweis einsehen?</p>
                    <p className="text-[11px] text-ink-3">Details zu Kennzeichenrecht (§ 10 MSchG), Eigenurheberschaft & VMC-Katalogen.</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.hash = "#/disclaimer";
                    }}
                    className="btn btn-primary btn-sm text-xs font-bold whitespace-nowrap"
                  >
                    Vollständiger Haftungsausschluss →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "impressum" && (
              <div className="space-y-5 animate-screen-in">
                <div>
                  <span className="inline-block rounded-md bg-slate-200 text-slate-800 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                    Offizielle Unternehmensangaben
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1.5">
                    Impressum gem. § 5 ECG & § 25 Mediengesetz
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl border border-line bg-paper-2 space-y-1">
                    <p className="font-bold text-ink">Dienstanbieter & Medieninhaber:</p>
                    <p className="text-ink-2">
                      MedAT Prep GmbH<br />
                      Praterstraße 1<br />
                      A-1020 Wien, Österreich
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-line bg-paper-2 space-y-1">
                    <p className="font-bold text-ink">Kontakt:</p>
                    <p className="text-ink-2">
                      E-Mail:{" "}
                      <a href="mailto:medatprep@gmail.com" className="text-primary font-medium hover:underline">
                        medatprep@gmail.com
                      </a>
                      <br />
                      Web:{" "}
                      <a href="https://medatprep.at" className="text-primary font-medium hover:underline">
                        https://medatprep.at
                      </a>
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm border-t border-line pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    <div>
                      <span className="font-semibold text-ink">Firmenbuchnummer:</span>{" "}
                      <span className="num text-ink-2">FN 512 348 x</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Firmenbuchgericht:</span>{" "}
                      <span className="text-ink-2">Handelsgericht Wien</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">UID-Nummer:</span>{" "}
                      <span className="num text-ink-2">ATU 74512389</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Geschäftsführung:</span>{" "}
                      <span className="text-ink-2">M. Gruber</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Kammerzugehörigkeit:</span>{" "}
                      <span className="text-ink-2">Wirtschaftskammer Wien (WKO)</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Fachgruppe:</span>{" "}
                      <span className="text-ink-2">UBIT (Unternehmensberatung, Buchhaltung und IT)</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Aufsichtsbehörde:</span>{" "}
                      <span className="text-ink-2">Magistratisches Bezirksamt für den 2. Bezirk</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Anwendbare Rechtsvorschriften:</span>{" "}
                      <span className="text-ink-2">Gewerbeordnung (GewO), ECG, Mediengesetz (abrufbar auf ris.bka.gv.at)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-ink-3 border-t border-line pt-3">
                  <p className="font-semibold text-ink">Grundlegende Richtung des Mediums (Blattlinie):</p>
                  <p>
                    Information über das Auswahlverfahren MedAT für Human- und Zahnmedizin in Österreich sowie Bereitstellung interaktiver didaktischer Übungsmaterialien und Prüfungssimulationen zur individuellen Vorbereitung.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-paper-2 p-3.5 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-ink">Vollständiges Impressum & Registerangaben einsehen?</p>
                    <p className="text-[11px] text-ink-3">Details zu Firmenbuchgericht, WKO-Fachgruppe, Aufsichtsbehörde & Schlichtungsstellen.</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.hash = "#/impressum";
                    }}
                    className="btn btn-primary btn-sm text-xs font-bold whitespace-nowrap"
                  >
                    Vollständiges Impressum →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer of modal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 sm:px-7 border-t border-line bg-paper-2 text-xs text-ink-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Alle Angaben entsprechen den aktuellen österreichischen Bestimmungen (Stand 2027)</span>
          </div>
          <button
            onClick={onClose}
            className="btn btn-secondary btn-sm px-4 py-1.5 text-xs w-full sm:w-auto touch-manipulation"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
