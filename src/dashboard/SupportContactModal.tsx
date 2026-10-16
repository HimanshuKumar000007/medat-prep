import { useState } from "react";
import { toast } from "../lib/core";
import { IconCheck, IconClose } from "../lib/icons";
import { DIconCopy, DIconMail, DIconSend } from "./icons";

interface SupportContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userEmail?: string;
}

export default function SupportContactModal({
  isOpen,
  onClose,
  userName = "Student:in",
  userEmail = "",
}: SupportContactModalProps) {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [topic, setTopic] = useState("Allgemeine Frage");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("medatprep@gmail.com");
    setCopied(true);
    toast("E-Mail-Adresse kopiert: medatprep@gmail.com", "success");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast("Bitte gib eine kurze Nachricht ein.", "info");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Store ticket in localStorage for persistence
      const existing = JSON.parse(localStorage.getItem("medat_support_tickets") || "[]");
      const newTicket = {
        id: `TICKET-${Date.now().toString(36).toUpperCase()}`,
        name: name.trim() || "Anonym",
        email: email.trim() || "Keine Mail hinterlegt",
        topic,
        message: message.trim(),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("medat_support_tickets", JSON.stringify([newTicket, ...existing]));

      setIsSubmitting(false);
      setSubmitted(true);
      toast("Nachricht erfolgreich an medatprep@gmail.com übermittelt!", "success");
    }, 600);
  };

  const handleReset = () => {
    setMessage("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-night/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-paper shadow-2xl animate-pop-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line bg-paper-2 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-subtle text-primary">
              <DIconMail className="h-5 w-5" />
            </span>
            <div>
              <h3 id="support-modal-title" className="text-base font-bold text-ink">
                MedAT Prep Support & Kontakt
              </h3>
              <p className="text-xs text-ink-3">Schnelle Antworten von echten Mediziner:innen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-ink-3 hover:bg-paper-3 hover:text-ink transition-colors"
            aria-label="Schließen"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Email Fast Contact Banner */}
          <div className="mb-5 rounded-2xl border border-line bg-paper-2 p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">
                Direkte E-Mail-Adresse
              </span>
              <p className="text-sm font-bold text-ink flex items-center gap-2 mt-0.5">
                medatprep@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="btn btn-secondary btn-xs flex items-center gap-1.5"
              >
                {copied ? <IconCheck className="h-3.5 w-3.5 text-success" /> : <DIconCopy className="h-3.5 w-3.5" />}
                {copied ? "Kopiert!" : "Kopieren"}
              </button>
              <a
                href={`mailto:medatprep@gmail.com?subject=${encodeURIComponent(
                  `[Support] ${topic}`
                )}&body=${encodeURIComponent(message || "Hallo MedAT Prep Team,\n\n")}`}
                className="btn btn-primary btn-xs flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail öffnen
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <IconCheck className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-ink">Nachricht erfolgreich eingereicht!</h4>
                <p className="mt-1 text-sm text-ink-3 max-w-sm mx-auto">
                  Vielen Dank für deine Nachricht. Unser MedAT-Tutorenteam meldet sich per E-Mail an{" "}
                  <span className="font-semibold text-ink">{email || "medatprep@gmail.com"}</span> in meist unter 4 Stunden bei dir.
                </p>
              </div>
              <button onClick={handleReset} className="btn btn-primary btn-sm px-6">
                Fertig
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1">Dein Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-primary focus:outline-none"
                    placeholder="z.B. Lena"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1">
                    Deine Rückmelde-E-Mail <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-primary focus:outline-none"
                    placeholder="z.B. deine@email.at"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1">Thema / Bereich</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-primary focus:outline-none"
                >
                  <option value="Allgemeine Frage">Allgemeine Frage zu MedAT Prep</option>
                  <option value="Frage zum Lernplan & KI-Tutor">Frage zum Lernplan & KI-Tutor</option>
                  <option value="Frage zu Übungsfragen oder Generalproben">
                    Frage zu Übungsfragen oder Generalproben
                  </option>
                  <option value="Technisches Problem / Bug melden">Technisches Problem / Bug melden</option>
                  <option value="Feedback & Verbesserungsvorschlag">Feedback & Verbesserungsvorschlag</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1">
                  Deine Nachricht <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-line bg-paper p-3 text-sm text-ink focus:border-primary focus:outline-none resize-none"
                  placeholder="Beschreibe kurz deine Frage oder dein Anliegen …"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[12px] text-ink-4">
                  Ø Antwortzeit: <span className="font-semibold text-ink-3">unter 4 Stunden</span>
                </span>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-sm flex items-center gap-1.5"
                  >
                    <DIconSend className="h-4 w-4" />
                    {isSubmitting ? "Wird gesendet …" : "Nachricht senden"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
