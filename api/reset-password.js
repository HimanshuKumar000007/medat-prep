// api/reset-password.js - Verifies token & updates password in Supabase via Admin API (IISER architecture)
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
    const { token, password } = req.body || {};

    if (!token || typeof token !== "string" || token.length < 16) {
      return res.status(400).json({ error: "Ungültiger oder fehlender Wiederherstellungs-Token." });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return res.status(400).json({ error: "Das Passwort muss mindestens 6 Zeichen lang sein." });
    }

    // 1. Find user with this reset token in Supabase Auth
    let matchedUser = null;
    let page = 1;
    let hasMore = true;

    while (hasMore && !matchedUser && page <= 5) {
      const { data, error } = await supabaseAdmin.auth.admin.listUsers({
        page,
        perPage: 50,
      });

      if (error || !data?.users) break;

      matchedUser = data.users.find(
        (u) => u.user_metadata?.medat_reset_token && u.user_metadata.medat_reset_token === token
      );

      if (data.users.length < 50) hasMore = false;
      page++;
    }

    if (!matchedUser) {
      return res.status(400).json({
        error: "Dieser Wiederherstellungs-Link ist ungültig oder wurde bereits verwendet. Bitte fordere einen neuen Link an.",
      });
    }

    // 2. Check token expiry
    const expiry = matchedUser.user_metadata?.medat_reset_expiry;
    if (!expiry || Number(expiry) < Date.now()) {
      return res.status(400).json({
        error: "Dieser Wiederherstellungs-Link ist leider abgelaufen. Bitte fordere einen neuen Link an.",
      });
    }

    // 3. Update password in Supabase Auth and invalidate token
    const cleanMeta = { ...matchedUser.user_metadata };
    delete cleanMeta.medat_reset_token;
    delete cleanMeta.medat_reset_expiry;

    const { error: updateErr } = await supabaseAdmin.auth.admin.updateUserById(matchedUser.id, {
      password: password.trim(),
      user_metadata: cleanMeta,
    });

    if (updateErr) {
      console.error("Password update error:", updateErr);
      return res.status(500).json({ error: updateErr.message || "Fehler beim Speichern des neuen Passworts." });
    }

    console.log(`Password reset successfully completed for ${matchedUser.email}`);
    return res.status(200).json({
      success: true,
      email: matchedUser.email,
      userId: matchedUser.id,
    });
  } catch (err) {
    console.error("Reset password handler error:", err);
    return res.status(500).json({ error: "Ein interner Serverfehler ist aufgetreten." });
  }
}
