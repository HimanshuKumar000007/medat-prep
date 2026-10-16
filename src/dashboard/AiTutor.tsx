import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "../lib/core";
import { usePractice } from "./practiceContext";
import { MathText } from "../components/MathText";
import {
  DIconSparkles,
  DIconBot,
  DIconSend,
  DIconCopy,
  DIconRefresh,
  DIconTrash,
  DIconPlus,
  DIconGear,
  DIconCheckCircle,
  DIconAlert,
  DIconBookmark,
  DIconBook,
  DIconDna,
  DIconZap,
} from "./icons";
import { IconBrain, IconClose } from "../lib/icons";
import {
  streamChatCompletion,
  getNvidiaApiKey,
  setNvidiaApiKey,
  resetNvidiaApiKey,
  testNvidiaConnection,
  NVIDIA_MODELS,
  DEFAULT_MODEL,
  getSelectedModel,
  setSelectedModel,
  MEDAT_SYSTEM_PROMPT,
  type ChatMessage,
} from "../lib/nvidia";
import { useDashboardData } from "./useDashboardData";
import type { PracticeSeed, Screen } from "./Shell";

interface Thread {
  id: string;
  title: string;
  messages: ChatMessage[];
  updatedAt: number;
  model: string;
}

const STORAGE_THREADS_KEY = "medat_ai_threads_v1";
const STORAGE_ACTIVE_THREAD_KEY = "medat_ai_active_thread_v1";

const QUICK_PROMPTS = [
  {
    category: "Schwachstellen & Coaching",
    icon: <DIconSparkles className="h-4 w-4 text-primary" />,
    title: "Meine Schwachstellen analysieren",
    prompt: "Analysiere meine aktuellen Schwachstellen, meine MedAT-Readiness und meine heutigen Aufgaben. Wo verliere ich die meisten Punkte und wie sollte ich heute trainieren?",
  },
  {
    category: "Tagesmissionen & Roadmap",
    icon: <DIconCheckCircle className="h-4 w-4 text-emerald-500" />,
    title: "Missionen effektiv meistern",
    prompt: "Schau dir meine 3 heutigen Tagesmissionen an. In welcher Reihenfolge und mit welcher Strategie sollte ich sie heute am besten abarbeiten?",
  },
  {
    category: "BMS Biologie",
    icon: <DIconDna className="h-4 w-4 text-emerald-500" />,
    title: "Mitose vs. Meiose",
    prompt: "Erkläre mir den genauen Unterschied zwischen Mitose und Meiose für den MedAT mit den typischen Prüfungsfallen (Chromosomensatz, Chromatiden, Phasen).",
  },
  {
    category: "BMS Chemie",
    icon: <DIconZap className="h-4 w-4 text-amber-500" />,
    title: "Puffer & pH-Berechnung",
    prompt: "Wie berechne ich den pH-Wert einer Pufferlösung nach Henderson-Hasselbalch ohne Taschenrechner im MedAT? Bitte gib mir ein konkretes Rechenbeispiel.",
  },
  {
    category: "BMS Physik",
    icon: <DIconZap className="h-4 w-4 text-sky-500" />,
    title: "Auftriebskraft & Dichte",
    prompt: "Erkläre das Archimedische Prinzip und die Berechnung der Auftriebskraft (Fa = rho * V * g) mit typischen MedAT-Aufgabentypen.",
  },
  {
    category: "BMS Mathematik",
    icon: <DIconBook className="h-4 w-4 text-indigo-500" />,
    title: "Logarithmen & Zehnerpotenzen",
    prompt: "Welche Logarithmus-Regeln und Zehnerpotenz-Tricks muss ich für den MedAT im Kopf beherrschen? Gib mir 3 schnelle Kopfrechen-Beispiele.",
  },
  {
    category: "KFF Strategie",
    icon: <IconBrain className="h-4 w-4 text-rose-500" />,
    title: "Gedächtnispalast (GM)",
    prompt: "Gib mir die beste Merktechnik für den MedAT-Untertest Gedächtnis & Merkfähigkeit (Allergieausweise: Name, Blutgruppe, Krankheiten, Medikamente, Ausweisnummer).",
  },
  {
    category: "Prüfungsquiz",
    icon: <DIconSparkles className="h-4 w-4 text-primary" />,
    title: "MedAT-Originalfrage erstellen",
    prompt: "Erstelle mir eine anspruchsvolle MedAT-Prüfungsfrage zur Zellbiologie mit 5 Antwortoptionen (A-E), genau einer richtigen Lösung und einer ausführlichen didaktischen Erklärung.",
  },
];

interface ChatMessageItemProps {
  message: ChatMessage;
  index: number;
  userName?: string;
  modelName: string;
  isCopied: boolean;
  onCopy: (content: string, index: number) => void;
  onRegenerate: (index: number) => void;
  disableRegenerate: boolean;
}

const ChatMessageItem = React.memo(function ChatMessageItem({
  message,
  index,
  userName,
  modelName,
  isCopied,
  onCopy,
  onRegenerate,
  disableRegenerate,
}: ChatMessageItemProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-pop-in`}>
      <div className="flex items-center gap-2 mb-1 px-1">
        {isUser ? (
          <>
            <span className="text-[11px] font-bold text-ink-4">Du</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-night text-[9.5px] font-black text-paper">
              {userName ? userName.slice(0, 2).toUpperCase() : "DU"}
            </span>
          </>
        ) : (
          <>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[9.5px] font-black text-paper">
              <DIconSparkles className="h-3 w-3" />
            </span>
            <span className="text-[11px] font-bold text-ink-4">
              MedAT Tutor · {modelName.split("/")[1] || "MedATPrep AI"}
            </span>
          </>
        )}
      </div>

      <div
        className={`group relative max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-[14.5px] leading-relaxed ${
          isUser
            ? "bg-night text-paper font-medium rounded-tr-xs shadow-sm"
            : "bg-paper-2 border border-line text-ink rounded-tl-xs shadow-2xs"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="space-y-2">
            <MathText text={message.content} as="div" isExplanation={true} />
          </div>
        )}

        {/* Assistant Message Actions Toolbar */}
        {!isUser && message.content && !message.content.startsWith("⚠️") && (
          <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between text-[11.5px] text-ink-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => onCopy(message.content, index)}
                className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-paper hover:text-ink transition-colors cursor-pointer"
                title="Antwort kopieren"
              >
                {isCopied ? (
                  <>
                    <DIconCheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Kopiert</span>
                  </>
                ) : (
                  <>
                    <DIconCopy className="h-3.5 w-3.5" />
                    <span>Kopieren</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onRegenerate(index)}
                disabled={disableRegenerate}
                className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-paper hover:text-ink transition-colors cursor-pointer disabled:opacity-40"
                title="Erneut generieren"
              >
                <DIconRefresh className="h-3.5 w-3.5" />
                <span>Neu generieren</span>
              </button>
            </div>

            <span className="text-[10px] text-ink-4">MedATPrep AI</span>
          </div>
        )}
      </div>
    </div>
  );
});

function StreamingLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|`.*?`|\$.*?\$)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
          return (
            <strong key={i} className="font-bold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
          return (
            <code
              key={i}
              className="px-1.5 py-0.5 rounded bg-paper-3 font-mono text-[12.5px] text-ink border border-line"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("$") && part.endsWith("$") && part.length >= 2) {
          return (
            <span
              key={i}
              className="inline-block px-1.5 py-0.5 mx-0.5 rounded font-mono text-[13px] text-emerald-800 bg-emerald-50/70 border border-emerald-200/60"
            >
              {part.slice(1, -1)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const StreamingContent = React.memo(function StreamingContent({ text }: { text: string }) {
  if (!text) return null;
  const lines = text.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        // Reasoning/thinking block
        if (line.startsWith("> ") || trimmed.startsWith("💭")) {
          return (
            <div
              key={idx}
              className="py-1 px-2.5 rounded-lg bg-emerald-50/70 border-l-2 border-emerald-500 text-ink-3 text-[13px] italic my-1"
            >
              {line.replace(/^>\s*/, "")}
            </div>
          );
        }

        // Headings
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={idx} className="font-bold text-ink text-[15px] mt-2 mb-0.5">
              {trimmed.slice(4)}
            </h4>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h3 key={idx} className="font-extrabold text-ink text-[16px] mt-2.5 mb-1">
              {trimmed.slice(3)}
            </h3>
          );
        }

        // Bullet lists
        const isBullet = trimmed.startsWith("•") || trimmed.startsWith("- ") || trimmed.startsWith("* ");
        if (isBullet) {
          const content = trimmed.replace(/^[•\-*]\s*/, "");
          return (
            <div key={idx} className="flex items-start gap-2 my-1 pl-1">
              <span className="text-primary font-bold text-[13px] select-none mt-0.5">•</span>
              <div className="flex-1 min-w-0">
                <StreamingLine text={content} />
              </div>
            </div>
          );
        }

        return (
          <div key={idx}>
            <StreamingLine text={line} />
          </div>
        );
      })}
    </div>
  );
});

const StreamingLiveBubble = React.memo(function StreamingLiveBubble({
  text,
  modelName,
}: {
  text: string;
  modelName: string;
}) {
  return (
    <div className="flex flex-col items-start animate-fade-in">
      <div className="flex items-center gap-2 mb-1 px-1">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[9.5px] font-black text-paper">
          <DIconSparkles className="h-3 w-3" />
        </span>
        <span className="text-[11px] font-bold text-ink-4">
          MedAT Tutor · {modelName.split("/")[1] || "MedATPrep AI"}
        </span>
      </div>

      <div className="group relative max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-[14.5px] leading-relaxed bg-paper-2 border border-line text-ink rounded-tl-xs shadow-2xs">
        {text ? (
          <div className="space-y-1.5 text-[14.5px] leading-relaxed">
            <StreamingContent text={text} />
            <span className="inline-block w-1.5 h-4 ml-1 bg-primary align-middle animate-pulse" />
          </div>
        ) : (
          <div className="flex items-center gap-2 py-2 text-ink-4 text-[13.5px]">
            <span className="animate-pulse">Denke nach...</span>
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
          </div>
        )}
      </div>
    </div>
  );
});

export default function AiTutor({ onNav }: { onNav: (s: Screen, seed?: PracticeSeed) => void }) {
  const { userProfile } = usePractice();
  const dashboardData = useDashboardData();

  const personalizedSystemPrompt = React.useMemo(() => {
    const { user, readiness, weakAreas, today, nextAction, sections } = dashboardData;

    const weakSummary =
      weakAreas && weakAreas.length > 0
        ? weakAreas
            .slice(0, 5)
            .map(
              (w) =>
                `- ${w.title} (${w.section}): ${w.accuracy}% Genauigkeit, ${w.mistakesCount} offene Fehler`
            )
            .join("\n")
        : "Noch keine akuten Schwachstellen identifiziert (stabile Basis).";

    const missionsSummary =
      today.items && today.items.length > 0
        ? today.items
            .map(
              (m, idx) =>
                `- Mission ${idx + 1}: ${m.label} (${
                  m.completed ? "Erledigt ✓" : `${m.currentCount}/${m.targetCount} gelöst`
                })`
            )
            .join("\n")
        : "Keine aktiven Tagesmissionen.";

    const sectionsSummary = Object.values(sections || {})
      .map(
        (s) =>
          `- ${s.title} (${s.code}, Gewichtung ${s.weight}%): ${
            s.accuracy !== null ? `${s.accuracy}% Genauigkeit` : "Noch keine Aufgaben gelöst"
          } (${s.completedChapters}/${s.totalChapters} Kapitel bearbeitet)`
      )
      .join("\n");

    const uniName = user.targetUniversityName || userProfile.targetUniversity || "MedUni Wien";
    const studyDays = userProfile.studyDaysPerWeek || 5;
    const dailyMins = userProfile.dailyMinutes || 60;
    const streak = user.currentStreak || 0;
    const readinessScore = readiness.score !== null ? `${readiness.score}%` : "Noch in Berechnung";

    return `${MEDAT_SYSTEM_PROMPT}

==================================================
AKTUELLES NUTZERPROFIL & LEISTUNGSDATEN (ECHTZEIT-KONTEXT)
==================================================
• Name des Schülers: ${user.name || userProfile.name || "MedAT-Bewerber/in"}
• Ziel-Universität: ${uniName}
• Prüfungstyp: ${user.examType || userProfile.examType || "MEDAT-H"} (${user.examType === "MEDAT-Z" ? "Zahnmedizin" : "Humanmedizin"})
• Angestrebtes Testjahr: ${user.targetYear === 0 ? "2027" : user.targetYear || 2026}
• Lerntage pro Woche: ${studyDays} Tage (${streak} Tage Streak aktuell aktiv)
• Geplante tägliche Lernzeit: ca. ${dailyMins} Minuten (${user.dailyStudyTimeLabel || "Regulär"})
• Schwerpunktbereiche: ${user.focusAreasText || userProfile.focusAreas?.join(", ") || "BMS"}

LEISTUNGSSTATUS & MEDAT-READINESS:
• Gesamt-Readiness: ${readinessScore} (${readiness.label})
• BMS: ${readiness.breakdown.bms !== null ? `${readiness.breakdown.bms}%` : "—"}
• KFF/MF: ${readiness.breakdown.kff !== null ? `${readiness.breakdown.kff}%` : "—"}
• Textverständnis (TV): ${readiness.breakdown.tv !== null ? `${readiness.breakdown.tv}%` : "—"}
• Sozial-emotionale Kompetenzen (SEK): ${readiness.breakdown.sek !== null ? `${readiness.breakdown.sek}%` : "—"}
• Testteile-Übersicht:
${sectionsSummary}

AKTUELLE SCHWACHSTELLEN (FOKUSBEDARF):
${weakSummary}

HEUTIGE TAGESMISSIONEN (${today.completedTasks}/${today.totalTasks} erledigt · ${today.completionPercent}%):
${missionsSummary}

NÄCHSTE EMPFOHLENE STATION IM LERNPFAD:
${nextAction?.topic ? `${nextAction.topic} (${nextAction.section}) — ${nextAction.recommendationText || nextAction.reason}` : "Grundlagen festigen"}

PÄDAGOGISCHE LEITLINIE FÜR DICH ALS KI-TUTOR:
1. Du kennst die Stärken, Schwachstellen, Ziel-Uni (${uniName}) und den genauen Lernfortschritt dieses Schülers.
2. Wenn der Schüler nach Ratschlägen, Schwachstellen, Lernstrategien oder Feedback fragt, beziehe dich direkt auf seine realen Daten oben (z.B. seine aktuellen Schwachstellen, seine heutigen Missionen oder seine Ziel-Uni).
3. Passe den Schwierigkeitsgrad deiner Erklärungen an: Erkläre komplexe Konzepte schrittweise und didaktisch klar.
4. Bei Fragen auf Deutsch antworte auf Deutsch; bei Fragen auf Englisch antworte fließend auf Englisch.`;
  }, [dashboardData, userProfile]);

  // State
  const [threads, setThreads] = useState<Thread[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THREADS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    const initialThread: Thread = {
      id: "thread_" + Date.now(),
      title: "Neuer MedAT-Chat",
      messages: [],
      updatedAt: Date.now(),
      model: getSelectedModel(),
    };
    return [initialThread];
  });

  const [activeThreadId, setActiveThreadId] = useState<string>(() => {
    return localStorage.getItem(STORAGE_ACTIVE_THREAD_KEY) || threads[0]?.id || "";
  });

  const [currentModel, setCurrentModel] = useState<string>(() => {
    const saved = getSelectedModel();
    if (!saved || saved.includes("deepseek")) {
      setSelectedModel(DEFAULT_MODEL);
      return DEFAULT_MODEL;
    }
    return saved;
  });
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [streamingThreadId, setStreamingThreadId] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showThreadDrawer, setShowThreadDrawer] = useState(false);

  // Settings Modal State
  const [apiKeyInput, setApiKeyInput] = useState(getNvidiaApiKey());
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "testing" | "ok" | "error">("idle");
  const [connectionMsg, setConnectionMsg] = useState("");

  const activeThread = threads.find((t) => t.id === activeThreadId) || threads[0];
  const chatScrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const streamingTextRef = useRef("");
  const lastStreamUpdateRef = useRef<number>(0);
  const streamTimerRef = useRef<number | null>(null);

  // Persist threads to localStorage only when threads state changes (never on token stream)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_THREADS_KEY, JSON.stringify(threads));
    } catch {
      // ignore
    }
  }, [threads]);

  // Persist active thread
  useEffect(() => {
    if (activeThreadId) {
      localStorage.setItem(STORAGE_ACTIVE_THREAD_KEY, activeThreadId);
    }
    // Instant scroll to bottom when switching chats
    if (chatScrollContainerRef.current) {
      chatScrollContainerRef.current.scrollTop = chatScrollContainerRef.current.scrollHeight;
    }
  }, [activeThreadId]);

  // Non-blocking auto-scroll: smoothly follows stream if user is near bottom, without locking user scrolling
  useEffect(() => {
    if (!isStreaming) return;
    const el = chatScrollContainerRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (distanceToBottom < 220) {
      el.scrollTop = el.scrollHeight;
    }
  }, [streamingText, isStreaming]);

  // Auto focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeThreadId]);

  const handleSelectModel = (modelId: string) => {
    setCurrentModel(modelId);
    setSelectedModel(modelId);
    if (activeThread) {
      setThreads((prev) =>
        prev.map((t) => (t.id === activeThread.id ? { ...t, model: modelId } : t))
      );
    }
    toast(`KI-Modell gewechselt: ${NVIDIA_MODELS.find((m) => m.id === modelId)?.name || modelId}`, "info");
  };

  const handleNewChat = () => {
    const newThread: Thread = {
      id: "thread_" + Date.now(),
      title: "Neuer MedAT-Chat",
      messages: [],
      updatedAt: Date.now(),
      model: currentModel,
    };
    setThreads((prev) => [newThread, ...prev]);
    setActiveThreadId(newThread.id);
    setShowThreadDrawer(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleDeleteThread = (threadId: string) => {
    if (threads.length <= 1) {
      // Reset only
      const resetThread: Thread = {
        id: "thread_" + Date.now(),
        title: "Neuer MedAT-Chat",
        messages: [],
        updatedAt: Date.now(),
        model: currentModel,
      };
      setThreads([resetThread]);
      setActiveThreadId(resetThread.id);
      return;
    }

    const nextThreads = threads.filter((t) => t.id !== threadId);
    setThreads(nextThreads);
    if (activeThreadId === threadId) {
      setActiveThreadId(nextThreads[0]?.id || "");
    }
    toast("Chat-Verlauf gelöscht", "info");
  };

  const handleCopy = useCallback((text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast("In Zwischenablage kopiert", "success");
  }, []);

  const handleStopStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (streamTimerRef.current !== null) {
      clearTimeout(streamTimerRef.current);
      streamTimerRef.current = null;
    }

    const partial = streamingTextRef.current;
    if (partial && streamingThreadId) {
      const assistantMsg: ChatMessage = {
        id: "msg_asst_" + Date.now(),
        role: "assistant",
        content: partial,
        timestamp: Date.now(),
      };
      setThreads((prev) =>
        prev.map((t) =>
          t.id === streamingThreadId
            ? {
                ...t,
                updatedAt: Date.now(),
                messages: [...t.messages, assistantMsg],
              }
            : t
        )
      );
    }

    setStreamingText("");
    setStreamingThreadId(null);
    setIsStreaming(false);
  }, [streamingThreadId]);

  const handleSendMessage = useCallback(
    async (textToSend?: string) => {
      const content = (textToSend || input).trim();
      if (!content || isStreaming) return;

      setInput("");

      const userMessage: ChatMessage = {
        id: "msg_" + Date.now(),
        role: "user",
        content,
        timestamp: Date.now(),
      };

      // Filter out any stale/empty or error messages so they don't break history
      const priorValidMessages = activeThread.messages.filter(
        (m) => m.content && m.content.trim().length > 0 && !m.content.startsWith("⚠️")
      );

      // Determine thread title if this is the first message
      let newTitle = activeThread.title;
      if (priorValidMessages.length === 0) {
        newTitle = content.slice(0, 32) + (content.length > 32 ? "..." : "");
      }

      const updatedMessages = [...priorValidMessages, userMessage];
      const targetThreadId = activeThread.id;
      const modelToUse =
        activeThread.model && !activeThread.model.includes("deepseek")
          ? activeThread.model
          : currentModel || DEFAULT_MODEL;

      // Add user message to threads immediately
      setThreads((prev) =>
        prev.map((t) =>
          t.id === targetThreadId
            ? {
                ...t,
                title: newTitle,
                model: modelToUse,
                updatedAt: Date.now(),
                messages: updatedMessages,
              }
            : t
        )
      );

      // Start streaming states
      setIsStreaming(true);
      setStreamingText("");
      setStreamingThreadId(targetThreadId);
      streamingTextRef.current = "";
      lastStreamUpdateRef.current = performance.now();

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      // Scroll smoothly down once when sending
      setTimeout(() => {
        if (chatScrollContainerRef.current) {
          chatScrollContainerRef.current.scrollTop = chatScrollContainerRef.current.scrollHeight;
        }
      }, 30);

      await streamChatCompletion(
        updatedMessages,
        (accumulated) => {
          streamingTextRef.current = accumulated;

          // Throttle state update to ~35ms to eliminate UI stutter & lockups
          const now = performance.now();
          if (now - lastStreamUpdateRef.current >= 35) {
            lastStreamUpdateRef.current = now;
            setStreamingText(accumulated);
          } else if (streamTimerRef.current === null) {
            streamTimerRef.current = window.setTimeout(() => {
              streamTimerRef.current = null;
              lastStreamUpdateRef.current = performance.now();
              setStreamingText(streamingTextRef.current);
            }, 35);
          }
        },
        (fullText) => {
          if (streamTimerRef.current !== null) {
            clearTimeout(streamTimerRef.current);
            streamTimerRef.current = null;
          }

          const assistantMsg: ChatMessage = {
            id: "msg_asst_" + Date.now(),
            role: "assistant",
            content: fullText,
            timestamp: Date.now(),
          };

          setIsStreaming(false);
          setStreamingText("");
          setStreamingThreadId(null);
          abortControllerRef.current = null;

          // Commit to threads once (writing to localStorage once, not on every token)
          setThreads((prev) =>
            prev.map((t) =>
              t.id === targetThreadId
                ? {
                    ...t,
                    updatedAt: Date.now(),
                    messages: [...t.messages, assistantMsg],
                  }
                : t
            )
          );

          setTimeout(() => {
            if (chatScrollContainerRef.current) {
              chatScrollContainerRef.current.scrollTop = chatScrollContainerRef.current.scrollHeight;
            }
          }, 30);
        },
        (error) => {
          if (streamTimerRef.current !== null) {
            clearTimeout(streamTimerRef.current);
            streamTimerRef.current = null;
          }

          setIsStreaming(false);
          setStreamingText("");
          setStreamingThreadId(null);
          abortControllerRef.current = null;
          toast(error.message, "error");

          const errorMsg: ChatMessage = {
            id: "msg_asst_err_" + Date.now(),
            role: "assistant",
            content: `⚠️ **Fehler bei der Anfrage:**\n${error.message}\n\nBitte prüfe deinen MedATPrep AI API-Key oder versuche es erneut.`,
            timestamp: Date.now(),
          };

          setThreads((prev) =>
            prev.map((t) =>
              t.id === targetThreadId
                ? {
                    ...t,
                    messages: [...t.messages, errorMsg],
                  }
                : t
            )
          );
        },
        {
          model: modelToUse,
          systemPrompt: personalizedSystemPrompt,
        },
        abortController.signal
      );
    },
    [activeThread, currentModel, input, isStreaming, personalizedSystemPrompt]
  );

  const handleTestApiKey = async () => {
    setConnectionStatus("testing");
    setConnectionMsg("Prüfe Verbindung zu MedATPrep AI...");
    const res = await testNvidiaConnection(apiKeyInput.trim());
    if (res.ok) {
      setConnectionStatus("ok");
      setConnectionMsg(`Erfolgreich verbunden! Modell '${res.model}' antwortet.`);
      toast("MedATPrep AI API-Key erfolgreich validiert!", "success");
    } else {
      setConnectionStatus("error");
      setConnectionMsg(`Verbindung fehlgeschlagen: ${res.message}`);
      toast("API-Key Fehler: " + res.message, "error");
    }
  };

  const handleSaveApiKey = () => {
    setNvidiaApiKey(apiKeyInput.trim());
    setShowSettingsModal(false);
    toast("MedATPrep AI API-Key gespeichert!", "success");
  };

  const handleResetApiKey = () => {
    resetNvidiaApiKey();
    setApiKeyInput(getNvidiaApiKey());
    setConnectionStatus("idle");
    setConnectionMsg("");
    toast("API-Key auf Standard zurückgesetzt.", "info");
  };

  const handleRegenerate = useCallback(
    (index: number) => {
      if (isStreaming) return;
      const msgList = activeThread.messages.slice(0, index);
      const lastUserMsg = msgList[msgList.length - 1];
      if (!lastUserMsg) return;

      setThreads((prev) =>
        prev.map((t) =>
          t.id === activeThread.id
            ? {
                ...t,
                messages: msgList.slice(0, -1),
              }
            : t
        )
      );
      handleSendMessage(lastUserMsg.content);
    },
    [activeThread.id, activeThread.messages, handleSendMessage, isStreaming]
  );

  return (
    <div className="flex flex-col h-[calc(100dvh-5.5rem)] max-w-5xl mx-auto rounded-3xl border border-line bg-paper shadow-sm overflow-hidden">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-line bg-paper-2/70 backdrop-blur-xs">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-primary text-white shadow-md">
            <DIconSparkles className="h-5 w-5" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white" />
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-[15.5px] font-extrabold text-ink leading-tight truncate">
                MedAT KI-Tutor
              </h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 shadow-2xs select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary-subtle border border-primary/20 px-2 py-0.5 text-[10.5px] font-bold text-primary select-none" title="Echtzeit-Synchronisation mit deinem Lernprofil & Schwachstellen">
                ✓ Profil synchronisiert
              </span>
            </div>
            <p className="text-[11.5px] text-ink-3 truncate">
              {dashboardData.user.name ? `${dashboardData.user.name} · ` : ""}
              {dashboardData.user.examType} ({dashboardData.user.targetUniversityName || "MedUni Wien"}) · Readiness: {dashboardData.readiness.score !== null ? `${dashboardData.readiness.score}%` : "—"}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Model Selector */}
          <div className="relative hidden sm:block">
            <select
              value={currentModel}
              onChange={(e) => handleSelectModel(e.target.value)}
              className="appearance-none rounded-xl border border-line bg-paper pl-3 pr-8 py-1.5 text-[12.5px] font-bold text-ink cursor-pointer hover:border-ink-3 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-2xs"
            >
              {NVIDIA_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.badge})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-4 text-[10px]">
              ▼
            </div>
          </div>

          {/* Chat History Toggle */}
          <button
            onClick={() => setShowThreadDrawer((v) => !v)}
            className="flex items-center gap-1.5 rounded-xl border border-line bg-paper px-2.5 py-1.5 text-[12px] font-bold text-ink-2 hover:bg-paper-3 hover:text-ink cursor-pointer shadow-2xs transition-colors"
            title="Chat-Verlauf"
          >
            <IconBrain className="h-4 w-4 text-primary" />
            <span className="hidden md:inline">Verlauf ({threads.length})</span>
          </button>

          {/* New Chat Button */}
          <button
            onClick={handleNewChat}
            className="flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-[12px] font-bold text-white hover:bg-primary-hover active:scale-98 cursor-pointer shadow-xs transition-all"
            title="Neuen Chat starten"
          >
            <DIconPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Neuer Chat</span>
          </button>

          {/* Settings / API Key */}
          <button
            onClick={() => {
              setApiKeyInput(getNvidiaApiKey());
              setConnectionStatus("idle");
              setConnectionMsg("");
              setShowSettingsModal(true);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-line bg-paper text-ink-3 hover:bg-paper-3 hover:text-ink cursor-pointer shadow-2xs transition-colors"
            title="MedATPrep AI Konfiguration"
          >
            <DIconGear className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main Chat Workspace */}
      <div className="relative flex-1 min-h-0 flex overflow-hidden">
        {/* Threads Drawer / Sidebar (when toggled) */}
        {showThreadDrawer && (
          <aside className="w-64 border-r border-line bg-paper-2 flex flex-col shrink-0 animate-fade-in z-20">
            <div className="flex items-center justify-between p-3 border-b border-line">
              <span className="text-[12px] font-bold uppercase tracking-wider text-ink-4">
                Gespeicherte Chats
              </span>
              <button
                onClick={() => setShowThreadDrawer(false)}
                className="text-ink-4 hover:text-ink p-1 rounded-lg"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {threads.map((t) => (
                <div
                  key={t.id}
                  onClick={() => {
                    setActiveThreadId(t.id);
                    setShowThreadDrawer(false);
                  }}
                  className={`group flex items-center justify-between rounded-xl px-2.5 py-2 text-[13px] cursor-pointer transition-all ${
                    t.id === activeThreadId
                      ? "bg-red-50 text-primary font-bold shadow-2xs ring-1 ring-red-100"
                      : "text-ink-2 hover:bg-paper hover:text-ink"
                  }`}
                >
                  <span className="truncate flex-1 pr-2">{t.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteThread(t.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 text-ink-4 hover:text-red-500 rounded transition-opacity"
                    title="Chat löschen"
                  >
                    <DIconTrash className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Chat Stream & Welcome Canvas */}
        <div className="flex-1 flex flex-col min-h-0 bg-paper">
          <div ref={chatScrollContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {activeThread.messages.length === 0 && !isStreaming ? (
              /* Empty State / Welcome Guide */
              <div className="max-w-2xl mx-auto py-6 sm:py-10 text-center animate-fade-in">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-primary/20 text-primary mb-4 ring-1 ring-primary/20 shadow-inner">
                  <DIconSparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-[22px] font-black text-ink tracking-tight">
                  Dein persönlicher MedAT KI-Tutor
                </h2>
                <p className="mt-2 text-[14.5px] text-ink-2 leading-relaxed max-w-xl mx-auto">
                  Frag mich alles zu <strong className="text-ink">Biologie, Chemie, Physik, Mathe</strong>, 
                  den kniffligen <strong className="text-ink">KFF-Untertests</strong> oder lass dir prüfungsreife 
                  Multiple-Choice-Fragen erstellen.
                </p>

                {/* Quick Prompts Grid */}
                <div className="mt-8 text-left">
                  <p className="text-[11px] font-black uppercase tracking-wider text-ink-4 mb-3">
                    Häufige Fragen & MedAT-Themen:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {QUICK_PROMPTS.map((qp, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(qp.prompt)}
                        className="group flex flex-col items-start p-3.5 rounded-2xl border border-line bg-paper-2 hover:bg-paper hover:border-primary/40 hover:shadow-md transition-all duration-200 text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="p-1 rounded-lg bg-paper border border-line/60">
                            {qp.icon}
                          </span>
                          <span className="text-[11px] font-bold text-ink-3">
                            {qp.category}
                          </span>
                        </div>
                        <span className="text-[13.5px] font-bold text-ink group-hover:text-primary transition-colors">
                          {qp.title}
                        </span>
                        <span className="text-[11.5px] text-ink-4 mt-1 line-clamp-2 leading-normal">
                          {qp.prompt}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Message List */
              <>
                {activeThread.messages.map((msg, index) => (
                  <ChatMessageItem
                    key={msg.id || index}
                    message={msg}
                    index={index}
                    userName={userProfile.name}
                    modelName={activeThread.model || currentModel}
                    isCopied={copiedIndex === index}
                    onCopy={handleCopy}
                    onRegenerate={handleRegenerate}
                    disableRegenerate={isStreaming}
                  />
                ))}

                {/* Live Streaming Bubble (Fast lightweight renderer, 0 frame drops) */}
                {isStreaming && streamingThreadId === activeThread.id && (
                  <StreamingLiveBubble
                    text={streamingText}
                    modelName={activeThread.model || currentModel}
                  />
                )}
              </>
            )}
          </div>

          {/* Quick Prompts Bar & Input Box */}
          <div className="p-3 sm:p-4 border-t border-line bg-paper-2/60">
            {/* Context chips */}
            {activeThread.messages.length > 0 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-ink-4 shrink-0">
                  Schnellaktion:
                </span>
                <button
                  onClick={() => handleSendMessage("Kannst du das noch etwas einfacher mit einer Alltags-Analogie erklären?")}
                  disabled={isStreaming}
                  className="shrink-0 rounded-full border border-line bg-paper px-2.5 py-1 text-[11.5px] font-medium text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer disabled:opacity-50"
                >
                  💡 Einfacher erklären
                </button>
                <button
                  onClick={() => handleSendMessage("Welche typischen Fangfragen oder MedAT-Fallen gibt es zu diesem Thema?")}
                  disabled={isStreaming}
                  className="shrink-0 rounded-full border border-line bg-paper px-2.5 py-1 text-[11.5px] font-medium text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer disabled:opacity-50"
                >
                  ⚠️ Typische MedAT-Fallen
                </button>
                <button
                  onClick={() => handleSendMessage("Erstelle mir dazu eine knifflige Multiple-Choice-Frage mit 5 Optionen (A-E).")}
                  disabled={isStreaming}
                  className="shrink-0 rounded-full border border-line bg-paper px-2.5 py-1 text-[11.5px] font-medium text-ink-2 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer disabled:opacity-50"
                >
                  📝 MC-Frage generieren
                </button>
              </div>
            )}

            {/* Input area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="relative flex items-end gap-2 rounded-2xl border border-line bg-paper p-2 shadow-xs focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                rows={1}
                placeholder="Stelle eine Frage zu Biologie, Chemie, Physik, Mathe oder KFF... (Enter zum Senden)"
                className="flex-1 max-h-36 min-h-[38px] resize-none border-0 bg-transparent px-2.5 py-1.5 text-[14px] text-ink placeholder:text-ink-4 focus:outline-none"
              />

              <div className="flex items-center gap-1.5 shrink-0">
                {isStreaming ? (
                  <button
                    type="button"
                    onClick={handleStopStream}
                    className="flex h-9 items-center gap-1.5 rounded-xl bg-red-100 px-3 text-[12px] font-bold text-red-700 hover:bg-red-200 cursor-pointer transition-colors"
                  >
                    <span className="h-2.5 w-2.5 rounded-xs bg-red-600 animate-pulse" />
                    Stoppen
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-hover active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-xs transition-all"
                    aria-label="Nachricht senden"
                  >
                    <DIconSend className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>

            <div className="mt-2 flex items-center justify-between text-[11px] text-ink-4 px-1">
              <span>
                Shift + Enter für Zeilenumbruch · MedAT-Fokus
              </span>
              <span className="flex items-center gap-1 text-[10.5px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                MedATPrep AI Cloud Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings & API Key Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl border border-line bg-paper p-6 shadow-2xl animate-pop-in">
            <div className="flex items-center justify-between border-b border-line pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <DIconGear className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold text-ink leading-tight">
                    MedATPrep AI Konfiguration
                  </h3>
                  <p className="text-[12px] text-ink-3">
                    API-Key & Modellverwaltung
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-ink-4 hover:text-ink p-1 rounded-xl"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <div>
                <label className="block text-[12.5px] font-bold text-ink mb-1.5">
                  MedATPrep AI API-Key
                </label>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => {
                    setApiKeyInput(e.target.value);
                    setConnectionStatus("idle");
                  }}
                  placeholder="nvapi-..."
                  className="w-full rounded-xl border border-line bg-paper-2 px-3.5 py-2 text-[13.5px] text-ink focus:border-primary focus:bg-paper focus:outline-none"
                />
                <p className="mt-1.5 text-[11.5px] text-ink-4">
                  Dein Key wird sicher in deinem lokalen Browser-Speicher abgelegt und direkt für MedATPrep AI genutzt.
                </p>
              </div>

              {/* Status Message */}
              {connectionStatus !== "idle" && (
                <div
                  className={`rounded-xl p-3 text-[12.5px] flex items-center gap-2 ${
                    connectionStatus === "ok"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : connectionStatus === "error"
                      ? "bg-red-50 text-red-800 border border-red-200"
                      : "bg-blue-50 text-blue-800 border border-blue-200"
                  }`}
                >
                  {connectionStatus === "ok" && <DIconCheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />}
                  {connectionStatus === "error" && <DIconAlert className="h-4 w-4 shrink-0 text-red-600" />}
                  {connectionStatus === "testing" && (
                    <span className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                  )}
                  <span>{connectionMsg}</span>
                </div>
              )}

              {/* Available Models */}
              <div>
                <label className="block text-[12.5px] font-bold text-ink mb-1.5">
                  Aktives KI-Modell
                </label>
                <div className="space-y-2">
                  {NVIDIA_MODELS.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => handleSelectModel(m.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        currentModel === m.id
                          ? "border-primary bg-red-50/50 shadow-2xs ring-1 ring-primary/30"
                          : "border-line bg-paper-2 hover:bg-paper"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-bold text-ink">{m.name}</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-paper border border-line text-ink-3">
                            {m.badge}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-ink-4 mt-0.5">{m.description}</p>
                      </div>
                      <input
                        type="radio"
                        checked={currentModel === m.id}
                        onChange={() => handleSelectModel(m.id)}
                        className="text-primary focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleTestApiKey}
                  disabled={connectionStatus === "testing"}
                  className="rounded-xl border border-line bg-paper px-3 py-2 text-[12.5px] font-bold text-ink hover:bg-paper-3 transition-colors cursor-pointer"
                >
                  {connectionStatus === "testing" ? "Prüfe..." : "Verbindung testen"}
                </button>
                <button
                  type="button"
                  onClick={handleResetApiKey}
                  className="text-[11.5px] text-ink-4 hover:text-red-500 underline cursor-pointer"
                >
                  Auf Standard zurücksetzen
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowSettingsModal(false)}
                  className="rounded-xl px-3 py-2 text-[12.5px] font-medium text-ink-3 hover:text-ink cursor-pointer"
                >
                  Schließen
                </button>
                <button
                  type="button"
                  onClick={handleSaveApiKey}
                  className="rounded-xl bg-primary px-4 py-2 text-[12.5px] font-bold text-white hover:bg-primary-hover shadow-xs cursor-pointer"
                >
                  Speichern
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
