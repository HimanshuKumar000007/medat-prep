// api/confirm-user.js - Serverless endpoint to auto-confirm user email in Supabase Auth
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vwvacbxbynwiwnnfyjht.supabase.co";
const CANONICAL_SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmFjYnhieW53aXdubmZ5amh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzgwNDM3MywiZXhwIjoyMTAzMzgwMzczfQ.ji6n9CUvn0964vH7moLbkkeT-5ziJ0Ac4P90ioshyFk";

function getServiceRoleKey() {
  const envKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;
  if (envKey && envKey.includes(".") && envKey.length > 50) {
    try {
      const payload = JSON.parse(Buffer.from(envKey.split(".")[1], "base64").toString("utf-8"));
      if (payload.ref === "vwvacbxbynwiwnnfyjht") {
        return envKey;
      }
    } catch {}
  }
  return CANONICAL_SERVICE_ROLE_KEY;
}

const supabaseAdmin = createClient(SUPABASE_URL, getServiceRoleKey(), {
  auth: { autoRefreshToken: false, persistSession: false },
});

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {}
    }

    const { email } = body || {};
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ error: "Gültige E-Mail-Adresse erforderlich." });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Find user in Supabase Auth
    let targetUser = null;
    let page = 1;
    let hasMore = true;

    while (hasMore && !targetUser && page <= 5) {
      const { data, error } = await supabaseAdmin.auth.admin.listUsers({
        page,
        perPage: 50,
      });

      if (error || !data?.users) break;

      targetUser = data.users.find((u) => u.email && u.email.toLowerCase() === cleanEmail);
      if (data.users.length < 50) hasMore = false;
      page++;
    }

    if (!targetUser) {
      return res.status(404).json({ error: "Benutzer nicht gefunden." });
    }

    // Auto-confirm if not confirmed
    if (!targetUser.email_confirmed_at && !targetUser.confirmed_at) {
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(targetUser.id, {
        email_confirm: true,
      });

      if (updateError) {
        console.error("Failed to auto-confirm user:", updateError);
        return res.status(500).json({ error: "Bestätigung fehlgeschlagen.", details: updateError.message });
      }
    }

    return res.status(200).json({ success: true, userId: targetUser.id, confirmed: true });
  } catch (err) {
    console.error("api/confirm-user error:", err);
    return res.status(500).json({ error: "Interner Serverfehler.", details: err?.message });
  }
}
