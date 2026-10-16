/**
 * Vercel Edge Serverless Function for NVIDIA NIM API proxy
 * Solves CORS issues in browsers and securely injects the API key.
 */

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  // CORS Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const authHeader = req.headers.get("authorization") || "";
    const clientKey = authHeader.replace(/^Bearer\s+/i, "").trim();

    // Priority: Client Key (if provided in UI) -> Vercel Environment Variables -> Default Project Key
    const apiKey =
      (clientKey && clientKey.startsWith("nvapi-") ? clientKey : null) ||
      process.env.NVIDIA_API_KEY ||
      process.env.VITE_NVIDIA_API_KEY ||
      "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";

    const body = await req.json();

    const nvidiaRes = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!nvidiaRes.ok) {
      const errText = await nvidiaRes.text();
      return new Response(errText, {
        status: nvidiaRes.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(nvidiaRes.body, {
      status: 200,
      headers: {
        "Content-Type": nvidiaRes.headers.get("content-type") || "text/event-stream; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
