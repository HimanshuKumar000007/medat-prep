/**
 * api/check-entitlement.js
 *
 * Backend entitlement verification endpoint.
 * Queried by dashboard during bounded polling after checkout.
 */

import { createClient } from "@supabase/supabase-js";

function getEnv(name, fallback = "") {
  return (
    process.env[name] ||
    process.env[`VITE_${name}`] ||
    fallback
  );
}

const SUPABASE_URL = getEnv("SUPABASE_URL", "https://vwvacbxbynwiwnnfyjht.supabase.co");
const SUPABASE_SERVICE_ROLE_KEY = getEnv(
  "SUPABASE_SERVICE_ROLE_KEY",
  getEnv("SUPABASE_SERVICE_KEY", "")
);

export default async function handler(req, res) {
  // CORS Preflight
  if (req.method === "OPTIONS") {
    if (res && res.setHeader) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.statusCode = 204;
      res.end();
      return;
    }
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try {
    let userId = "";

    // Resolve userId from Query params or Bearer token
    if (req.query?.user_id) {
      userId = req.query.user_id;
    } else if (req.url) {
      const url = new URL(req.url, "http://localhost");
      userId = url.searchParams.get("user_id") || "";
    }

    const authHeader = req.headers?.authorization || req.headers?.get?.("authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    if (token) {
      const { data: { user } } = await supabase.auth.getUser(token);
      if (user?.id) {
        userId = user.id;
      }
    }

    if (!userId) {
      const errRes = { error: "Missing user identification" };
      if (res && res.status) return res.status(400).json(errRes);
      return new Response(JSON.stringify(errRes), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    // Query canonical profile
    const { data: profile } = await supabase
      .from("medat_user_profiles")
      .select("is_pro, subscription_tier, subscription_status, pro_expires_at")
      .eq("user_id", userId)
      .maybeSingle();

    // Also check active subscriptions
    const { data: subscription } = await supabase
      .from("medat_subscriptions")
      .select("status, current_period_end, product_id, price_id")
      .eq("user_id", userId)
      .in("status", ["active", "trialing"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    let isPro = Boolean(profile?.is_pro);
    let tier = profile?.subscription_tier || "free";
    let status = profile?.subscription_status || "none";
    let expiresAt = profile?.pro_expires_at || null;

    if (subscription) {
      const notExpired = !subscription.current_period_end || new Date(subscription.current_period_end) > new Date();
      if (notExpired) {
        isPro = true;
        tier = "premium";
        status = subscription.status;
        expiresAt = subscription.current_period_end;
      }
    }

    // Double check expiration
    if (expiresAt && new Date(expiresAt).getTime() < Date.now()) {
      isPro = false;
      tier = "free";
      status = "expired";
    }

    const resBody = {
      isPro,
      subscriptionTier: tier,
      subscriptionStatus: status,
      proExpiresAt: expiresAt,
      userId,
    };

    if (res && res.status) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      return res.status(200).json(resBody);
    }

    return new Response(JSON.stringify(resBody), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    const errBody = { error: err.message };
    if (res && res.status) return res.status(500).json(errBody);
    return new Response(JSON.stringify(errBody), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
}
