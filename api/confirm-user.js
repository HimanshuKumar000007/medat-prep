// api/confirm-user.js - Serverless endpoint to auto-confirm user email in Supabase Auth
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW5aM2RtRmpZbmhpZVc1M2FYZHVibVo1YW1oMElpd2ljbTlzWlNJNkluTmxjblpwWTJWZmNtOXNaU0lzSW1saGRDSTZNVGM0Tnpnd05ETTNNeXdpWlhod0lqb3lNVEF6TXpnd016Y3pmUS5qaTZuOUNVdm4wOTY0dkg3bW9MYmtrZVQtNXppSjBBYzRQOTBpb3NoeUZr", "base64").toString("utf-8");

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
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
