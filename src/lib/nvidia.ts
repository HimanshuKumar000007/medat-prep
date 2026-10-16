/**
 * NVIDIA NIM API Service
 * Handles communication with the NVIDIA API Catalog for MedAT preparation.
 */

export interface ChatMessage {
  id?: string;
  role: "system" | "user" | "assistant";
  content: string;
  timestamp?: number;
}

export interface NvidiaModel {
  id: string;
  name: string;
  description: string;
  badge: string;
  maxTokens: number;
}

export const NVIDIA_MODELS: NvidiaModel[] = [
  {
    id: "meta/llama-3.2-11b-vision-instruct",
    name: "Meta Llama 3.2 (11B)",
    description: "Sofortige Antworten, hervorragend strukturiertes Deutsch für den MedAT",
    badge: "Empfohlen · Schnell",
    maxTokens: 2500,
  },
  {
    id: "deepseek-ai/deepseek-v4.1-flash",
    name: "DeepSeek v4.1 Flash",
    description: "Reasoning-Modell mit Schritt-für-Schritt Denkprozess",
    badge: "Reasoning",
    maxTokens: 3500,
  },
];

export const DEFAULT_MODEL = "meta/llama-3.2-11b-vision-instruct";
const API_URL = "/api/chat";
const DIRECT_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const HARDCODED_FALLBACK_KEY = "";

export function getNvidiaApiKey(): string {
  const localKey = localStorage.getItem("medat_nvidia_api_key");
  if (localKey && localKey.trim().length > 0) {
    return localKey.trim();
  }
  const env = (import.meta as unknown as { env: Record<string, string> }).env || {};
  const envKey = env.VITE_NVIDIA_API_KEY;
  if (envKey && typeof envKey === "string" && envKey.trim().length > 0) {
    return envKey.trim();
  }
  return HARDCODED_FALLBACK_KEY;
}

export function setNvidiaApiKey(key: string): void {
  if (!key || key.trim().length === 0) {
    localStorage.removeItem("medat_nvidia_api_key");
  } else {
    localStorage.setItem("medat_nvidia_api_key", key.trim());
  }
}

export function resetNvidiaApiKey(): void {
  localStorage.removeItem("medat_nvidia_api_key");
}

export function getSelectedModel(): string {
  return localStorage.getItem("medat_nvidia_model") || DEFAULT_MODEL;
}

export function setSelectedModel(modelId: string): void {
  localStorage.setItem("medat_nvidia_model", modelId);
}

export const MEDAT_SYSTEM_PROMPT = `Du bist der offizielle, hochintelligente MedAT KI-Tutor für österreichische Medizinstudien-Bewerber (MedUni Wien, Innsbruck, Graz, JKU Linz).
Du bist spezialisiert auf den MedAT-H (Humanmedizin) und MedAT-Z (Zahnmedizin).

Deine Kernkompetenzen und Fachbereiche:
1. BMS (Basiskenntnistest für Medizinische Studien):
   - Biologie: Zellbiologie, Genetik, Proteinbiosynthese, Meiose & Mitose, Anatomie & Physiologie, Kreislaufsystem, Nervensystem, Hormone, Ökologie & Evolution.
   - Chemie: Atombau, Periodensystem, Stöchiometrie, Chemische Bindungen, Chemisches Gleichgewicht, Säure-Base-Theorie & pH-Wert, Redoxreaktionen, Thermodynamik, Organische Chemie & Biomoleküle.
   - Physik: Mechanik, Kinematik, Dynamik, Gravitation, Arbeit & Energie, Hydrostatik/Auftrieb, Wärmelehre, Elektrizitätslehre, Magnetismus, Optik, Atom- & Kernphysik.
   - Mathematik: Zehnerpotenzen, Wissenschaftliche Notation, Logarithmen, Potenzen & Wurzeln, Dreisatz, Prozentrechnung, Geometrie, Trigonometrie, Funktionen & Vektoren.

2. KFF (Kognitive Fähigkeiten und Fertigkeiten):
   - Figuren zusammensetzen (FZ): Strategien für Schnitte, Symmetrien, Kanten- und Längenabgleich.
   - Gedächtnis und Merkfähigkeit (GM): Gedächtnispalast / Loci-Methode, Assoziationstechniken für Allergieausweise (Name, Beruf, Blutgruppe, Krankheiten, Medikamente, Ausweisnummer).
   - Zahlenfolgen (ZF): Systematische Analyse von Differenzen, Quotienten, Fibonacci- und verschachtelten Schrittfolgen.
   - Implikationen erkennen (IE): Formale Logik, Allquantoren, Existenzaussagen, Syllogismen, Venn-Diagramme, Umkehrschluss-Fallen.
   - Wortflüssigkeit (WF): Anagramm-Lösungsstrategien, Vorsilben- und Konsonanten-Kombinationen.

3. TV (Textverständnis):
   - Analyse komplexer medizinischer & naturwissenschaftlicher Fachtexte, schnelles Erfassen von Kernaussagen, Antizipation von Fangfragen.

4. SEK (Sozial-emotionale Kompetenzen):
   - Emotionen erkennen (EE): Interpretation nonverbaler und verbaler Verhaltenssignale.
   - Soziales Entscheiden (SE): Abwägung moralischer und empathischer Handlungsoptionen im klinischen & sozialen Kontext.
   - Emotionen regulieren (ER): Strategien zur emotionalen Selbst- und Fremdregulation.

Didaktischer Stil:
- Antworte präzise, fundiert und direkt auf MedAT-Niveau (kein unnötiges Geschwafel, aber glasklar erklärt).
- Nutze strukturierte Markdown-Formatierung (Überschriften, Stichpunkte, Fettungen für Schlüsselbegriffe).
- Bei Berechnungen immer: Gegebene Werte -> Formel -> Zwischenschritte -> Einheiten -> Endergebnis.
- Formeln und Gleichungen klar und sauber in mathematischer Notation formatieren.
- Biete bei Bedarf Eselsbrücken, Merksätze oder typische MedAT-Fallen an.`;

export interface StreamChatOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  apiKey?: string;
  systemPrompt?: string;
}

/**
 * Stream a chat completion from NVIDIA NIM API
 */
export async function streamChatCompletion(
  messages: ChatMessage[],
  onChunk: (accumulatedText: string, latestDelta: string) => void,
  onDone: (fullText: string) => void,
  onError: (error: Error) => void,
  options?: StreamChatOptions,
  signal?: AbortSignal
): Promise<void> {
  const apiKey = options?.apiKey || getNvidiaApiKey();
  const model = options?.model || getSelectedModel();

  if (!apiKey) {
    onError(new Error("Kein NVIDIA API-Key konfiguriert."));
    return;
  }

  // Format messages, ensuring system prompt is included
  const formattedMessages: { role: string; content: string }[] = [];
  
  const systemPromptContent = options?.systemPrompt || MEDAT_SYSTEM_PROMPT;
  formattedMessages.push({
    role: "system",
    content: systemPromptContent,
  });

  for (const msg of messages) {
    if (msg.role === "system") continue;
    if (msg.content && typeof msg.content === "string") {
      const trimmed = msg.content.trim();
      // Skip empty messages or error placeholder messages from history
      if (trimmed.length > 0 && !trimmed.startsWith("⚠️")) {
        formattedMessages.push({
          role: msg.role === "assistant" ? "assistant" : "user",
          content: trimmed,
        });
      }
    }
  }

  // Ensure there is at least one user message
  const hasUserMsg = formattedMessages.some((m) => m.role === "user");
  if (!hasUserMsg) {
    onError(new Error("Keine gültige Nachricht vorhanden."));
    return;
  }

  try {
    let response: Response;
    try {
      response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: formattedMessages,
          temperature: options?.temperature ?? 0.6,
          max_tokens: options?.maxTokens ?? 2500,
          stream: true,
        }),
        signal,
      });
    } catch {
      // Fallback to direct NVIDIA endpoint if proxy is unavailable
      response = await fetch(DIRECT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: formattedMessages,
          temperature: options?.temperature ?? 0.6,
          max_tokens: options?.maxTokens ?? 2500,
          stream: true,
        }),
        signal,
      });
    }

    // If proxy returned 404/405/502, attempt direct endpoint fallback
    if (!response.ok && (response.status === 404 || response.status === 405 || response.status === 502)) {
      try {
        const directRes = await fetch(DIRECT_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: formattedMessages,
            temperature: options?.temperature ?? 0.6,
            max_tokens: options?.maxTokens ?? 2500,
            stream: true,
          }),
          signal,
        });
        if (directRes.ok) {
          response = directRes;
        }
      } catch {
        // preserve original response for error reporting
      }
    }

    if (!response.ok) {
      let errorDetail = `HTTP ${response.status} ${response.statusText}`;
      try {
        const errJson = await response.json();
        if (errJson.detail) errorDetail = errJson.detail;
        else if (errJson.message) errorDetail = errJson.message;
        else if (errJson.error?.message) errorDetail = errJson.error.message;
      } catch {
        // use default errorDetail
      }
      throw new Error(`NVIDIA API Fehler: ${errorDetail}`);
    }

    if (!response.body) {
      throw new Error("Kein Stream-Body in der NVIDIA API-Antwort erhalten.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let accumulatedText = "";
    let accumulatedReasoning = "";
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(":")) continue;

        if (trimmed === "data: [DONE]") {
          continue;
        }

        if (trimmed.startsWith("data: ")) {
          const jsonStr = trimmed.slice(6);
          try {
            const parsed = JSON.parse(jsonStr);
            const deltaObj = parsed.choices?.[0]?.delta;
            const deltaContent = deltaObj?.content || "";
            const deltaReasoning = deltaObj?.reasoning_content || "";

            if (deltaContent) {
              accumulatedText += deltaContent;
              onChunk(accumulatedText, deltaContent);
            } else if (deltaReasoning && !accumulatedText) {
              accumulatedReasoning += deltaReasoning;
              onChunk(`💭 *Denke nach...*\n> ${accumulatedReasoning.trim()}`, deltaReasoning);
            }
          } catch {
            // Ignore malformed partial chunks in SSE stream
          }
        }
      }
    }

    // Flush any leftover in buffer
    if (buffer.trim().startsWith("data: ") && buffer.trim() !== "data: [DONE]") {
      try {
        const parsed = JSON.parse(buffer.trim().slice(6));
        const deltaObj = parsed.choices?.[0]?.delta;
        const deltaContent = deltaObj?.content || "";
        const deltaReasoning = deltaObj?.reasoning_content || "";
        if (deltaContent) {
          accumulatedText += deltaContent;
          onChunk(accumulatedText, deltaContent);
        } else if (deltaReasoning && !accumulatedText) {
          accumulatedReasoning += deltaReasoning;
          onChunk(`💭 *Denke nach...*\n> ${accumulatedReasoning.trim()}`, deltaReasoning);
        }
      } catch {
        // ignore
      }
    }

    onDone(accumulatedText || accumulatedReasoning);
  } catch (err: any) {
    if (err.name === "AbortError") {
      return; // Cleanly aborted by user
    }
    onError(err instanceof Error ? err : new Error(String(err)));
  }
}

/**
 * Quick ping / validation to check if the NVIDIA API Key is operational
 */
export async function testNvidiaConnection(apiKeyOverride?: string): Promise<{
  ok: boolean;
  message: string;
  model: string;
}> {
  const apiKey = apiKeyOverride || getNvidiaApiKey();
  const model = getSelectedModel();

  if (!apiKey) {
    return { ok: false, message: "Kein API-Key hinterlegt.", model };
  }

  try {
    let res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: "ping" }],
        max_tokens: 5,
        stream: false,
      }),
    }).catch(() => null);

    if (!res || !res.ok) {
      res = await fetch(DIRECT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: "ping" }],
          max_tokens: 5,
          stream: false,
        }),
      });
    }

    if (res.ok) {
      return { ok: true, message: "Erfolgreich verbunden!", model };
    }

    const err = await res.json().catch(() => ({}));
    const detail = err.detail || err.message || err.error?.message || `HTTP ${res.status}`;
    return { ok: false, message: detail, model };
  } catch (e: any) {
    return { ok: false, message: e.message || "Netzwerkfehler", model };
  }
}
