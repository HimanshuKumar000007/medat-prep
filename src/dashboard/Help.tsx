import { useEffect, useMemo, useState } from "react";
import { toast } from "../lib/core";
import { FAQS } from "../lib/data";
import { IconArrowRight, IconCheck, IconChevron, IconClose } from "../lib/icons";
import { DIconChat, DIconClipboard, DIconCopy, DIconHelp, DIconMail, DIconSearch, DIconSparkles } from "./icons";
import type { PracticeSeed, Screen } from "./Shell";
import { usePractice } from "./practiceContext";
import EinstufungstestModal, { type DiagnosticResult } from "./EinstufungstestModal";
import SupportContactModal from "./SupportContactModal";

export default function Help({ onNav }: { onNav: (s: Screen, seed?: PracticeSeed) => void }) {
  const { userProfile } = usePractice();
  const [openId, setOpenId] = useState<string>("q1");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [einstufungModalOpen, setEinstufungModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);

  // Read saved diagnostic test result
  useEffect(() => {
    try {
      const raw = localStorage.getItem("medat_einstufungstest_result");
      if (raw) {
        setDiagnosticResult(JSON.parse(raw));
      }
    } catch {
      // ignore JSON parse error
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("medatprep@gmail.com");
    setCopiedEmail(true);
    toast("E-Mail-Adresse kopiert: medatprep@gmail.com", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Filter FAQs based on search input
  const filteredFaqs = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  return (
    <div className="max-w-3xl pb-12">
      {/* Modals */}
      <EinstufungstestModal
        isOpen={einstufungModalOpen}
        onClose={() => setEinstufungModalOpen(false)}
        onNav={onNav}
        onResultSaved={(res) => setDiagnosticResult(res)}
      />

      <SupportContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        userName={userProfile.name}
        userEmail={userProfile.email}
      />

      {/* Header */}
      <h1 className="display text-[28px] text-ink">Hilfe & FAQ</h1>
      <p className="mt-1.5 text-[15px] text-ink-3">
        Schnelle Antworten — damit du schneller zurück zu den Fragen kommst.
      </p>

      {/* Welcome / Einstufungstest Banner */}
      <div className="mt-7 overflow-hidden rounded-2xl border border-line bg-paper shadow-xs">
        <div className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
          <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0" aria-hidden="true">
            <rect x="10" y="10" width="100" height="100" rx="24" fill="#FEF2F2" />
            <circle cx="60" cy="52" r="20" fill="none" stroke="#DC2626" strokeWidth="3.5" />
            <path
              d="M60 40v12l8 5"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 88c6-8 17-12 28-12s22 4 28 12"
              fill="none"
              stroke="#0F172A"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="88" cy="32" r="6" fill="#DC2626" />
            <path d="M28 34h8M32 30v8" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="flex-1">
            {diagnosticResult ? (
              <>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                  <IconCheck className="h-3.5 w-3.5" /> EINSTUFUNG: {diagnosticResult.percentage}%
                </div>
                <h2 className="mt-2.5 text-[20px] font-bold tracking-[-0.01em] text-ink">
                  Einstufungstest absolviert — Dein Lernplan ist aktiv!
                </h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
                  Du hast {diagnosticResult.score} von {diagnosticResult.total} Fragen richtig ({diagnosticResult.percentage}%).
                  Dein adaptiver MedAT-Lernplan ist auf dein aktuelles Stärken-Schwächen-Profil abgestimmt.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setEinstufungModalOpen(true)}
                    className="btn btn-secondary btn-sm"
                  >
                    Ergebnis prüfen / Wiederholen
                  </button>
                  <button
                    onClick={() => onNav("plan")}
                    className="btn btn-primary btn-sm flex items-center gap-1.5"
                  >
                    Zum Lernplan <IconArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="rounded-full bg-primary-subtle px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                  Neu hier?
                </span>
                <h2 className="mt-2.5 text-[20px] font-bold tracking-[-0.01em] text-ink">
                  Willkommen! Starte mit dem Einstufungstest.
                </h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
                  In 8 Minuten weißt du, wo du stehst — und dein persönlicher Lernplan steht. Kein Vorwissen nötig.
                </p>
                <button
                  onClick={() => setEinstufungModalOpen(true)}
                  className="btn btn-primary btn-sm mt-5 flex items-center gap-1.5"
                >
                  Einstufungstest starten <IconArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Action Subcards */}
        <div className="grid border-t border-line sm:grid-cols-2">
          <button
            onClick={() => onNav("community")}
            className="group flex items-center gap-3.5 border-b border-line p-5 text-left transition-colors hover:bg-paper-3 sm:border-b-0 sm:border-r"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-info-subtle text-info">
              <DIconChat className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[14px] font-bold text-ink transition-colors group-hover:text-primary">
                Community fragen
              </span>
              <span className="block text-[12px] text-ink-3">Ø Antwortzeit: unter 4 Stunden</span>
            </span>
          </button>
          <button
            onClick={() => onNav("plan")}
            className="group flex items-center gap-3.5 p-5 text-left transition-colors hover:bg-paper-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success-subtle text-success">
              <DIconClipboard className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[14px] font-bold text-ink transition-colors group-hover:text-primary">
                Lernplan verstehen
              </span>
              <span className="block text-[12px] text-ink-3">Wie die KI deine Phasen plant</span>
            </span>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-8" aria-label="Häufige Fragen zur Plattform">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="flex items-center gap-2.5 text-[18px] font-bold text-ink">
            <DIconHelp className="h-5 w-5 text-primary" /> Häufige Fragen
          </h2>

          {/* Quick FAQ Search Bar */}
          <div className="relative min-w-[220px]">
            <DIconSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="In den FAQ suchen …"
              className="w-full rounded-xl border border-line bg-paper py-1.5 pl-8 pr-7 text-xs text-ink placeholder:text-ink-4 focus:border-primary focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-3 hover:text-ink"
                aria-label="Suche zurücksetzen"
              >
                <IconClose className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-line">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((f) => {
              const open = openId === f.id;
              return (
                <div key={f.id} className="border-b border-line">
                  <button
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={open}
                    aria-controls={`help-${f.id}`}
                    onClick={() => setOpenId(open ? "" : f.id)}
                  >
                    <span
                      className={`text-[15px] font-semibold transition-colors ${
                        open ? "text-primary" : "text-ink"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 text-ink-3 transition-transform duration-300 ${
                        open ? "rotate-180 text-primary" : ""
                      }`}
                    >
                      <IconChevron className="h-4 w-4" />
                    </span>
                  </button>
                  <div id={`help-${f.id}`} className={`acc-body ${open ? "open" : ""}`}>
                    <div className="acc-inner">
                      <p className="pb-5 pr-8 text-[14px] leading-relaxed text-ink-2">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-8 text-center text-sm text-ink-3">
              Keine FAQ-Einträge für &bdquo;{searchTerm}&ldquo; gefunden.
              <button
                onClick={() => setSearchTerm("")}
                className="ml-2 font-semibold text-primary underline"
              >
                Alle Fragen anzeigen
              </button>
            </div>
          )}
        </div>

        {/* Contact Footer Box with exact requested (medatprep@gmail.com) string */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-4 text-[13.5px] text-ink-2 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary">
              <DIconMail className="h-4 w-4" />
            </span>
            <p className="leading-snug">
              Nicht dabei?{" "}
              <button
                onClick={() => setContactModalOpen(true)}
                className="font-bold text-primary underline underline-offset-2 transition-opacity hover:opacity-80"
              >
                Schreib uns
              </button>{" "}
              <a
                href="mailto:medatprep@gmail.com"
                className="font-bold text-ink transition-colors hover:text-primary"
              >
                (medatprep@gmail.com)
              </a>{" "}
              — Antwort meist in unter 4 Stunden.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="btn btn-secondary btn-xs flex items-center gap-1.5"
              title="E-Mail-Adresse kopieren"
            >
              {copiedEmail ? (
                <IconCheck className="h-3.5 w-3.5 text-success" />
              ) : (
                <DIconCopy className="h-3.5 w-3.5" />
              )}
              {copiedEmail ? "Kopiert!" : "E-Mail kopieren"}
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="btn btn-primary btn-xs flex items-center gap-1.5"
            >
              <DIconSparkles className="h-3.5 w-3.5" />
              Nachricht senden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
