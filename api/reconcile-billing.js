/**
 * api/reconcile-billing.js
 *
 * Administrative / Scheduled Billing Reconciliation Service for MedAT Prep.
 * Identifies and repairs any discrepancies between recorded subscriptions/payments
 * and user profile entitlement state in Supabase.
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

export async function reconcileBillingEntitlements(supabase) {
  console.info("[Billing Reconciliation] Starting reconciliation scan...");

  // 1. Fetch all active or trialing subscriptions
  const { data: activeSubs, error: subErr } = await supabase
    .from("medat_subscriptions")
    .select("user_id, paddle_subscription_id, status, current_period_end")
    .in("status", ["active", "trialing"]);

  if (subErr) {
    throw new Error(`Failed to query subscriptions: ${subErr.message}`);
  }

  // 2. Fetch all completed or paid transactions
  const { data: activePayments, error: payErr } = await supabase
    .from("medat_payments")
    .select("user_id, paddle_transaction_id, status, created_at")
    .in("status", ["completed", "paid"]);

  if (payErr) {
    throw new Error(`Failed to query payments: ${payErr.message}`);
  }

  const eligibleUserIds = new Set();
  const userExpiresMap = new Map();

  // Process subscriptions
  (activeSubs || []).forEach((s) => {
    if (s.user_id) {
      eligibleUserIds.add(s.user_id);
      if (s.current_period_end) {
        userExpiresMap.set(s.user_id, s.current_period_end);
      }
    }
  });

  // Process one-time or lifetime payments (valid 1 year from payment)
  (activePayments || []).forEach((p) => {
    if (p.user_id) {
      eligibleUserIds.add(p.user_id);
      if (!userExpiresMap.has(p.user_id) && p.created_at) {
        const exp = new Date(new Date(p.created_at).getTime() + 365 * 24 * 60 * 60 * 1000).toISOString();
        userExpiresMap.set(p.user_id, exp);
      }
    }
  });

  let reconciledCount = 0;
  const reconciledUsers = [];

  for (const userId of eligibleUserIds) {
    const { data: profile } = await supabase
      .from("medat_user_profiles")
      .select("is_pro, subscription_tier, subscription_status")
      .eq("user_id", userId)
      .maybeSingle();

    if (!profile || !profile.is_pro || profile.subscription_tier !== "premium") {
      const expiresAt = userExpiresMap.get(userId) || null;
      await supabase
        .from("medat_user_profiles")
        .update({
          is_pro: true,
          subscription_tier: "premium",
          subscription_status: "active",
          pro_expires_at: expiresAt,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", userId);

      reconciledCount++;
      reconciledUsers.push(userId);
      console.info(`[Billing Reconciliation] Reconciled user ${userId} -> is_pro=true, tier=premium`);
    }
  }

  console.info(`[Billing Reconciliation] Finished. Reconciled ${reconciledCount} user entitlements.`);
  return {
    success: true,
    totalEligibleUsers: eligibleUserIds.size,
    reconciledCount,
    reconciledUsers,
  };
}

export default async function handler(req, res) {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const report = await reconcileBillingEntitlements(supabase);

    if (res && res.status) {
      return res.status(200).json(report);
    }
    return new Response(JSON.stringify(report), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const errRes = { error: err.message };
    if (res && res.status) {
      return res.status(500).json(errRes);
    }
    return new Response(JSON.stringify(errRes), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
