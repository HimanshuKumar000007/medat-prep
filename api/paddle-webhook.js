/**
 * api/paddle-webhook.js
 *
 * Production Paddle Billing Webhook Handler for MedAT Prep.
 * Supports Vercel Serverless (Node & Edge) and local development.
 *
 * Validates Paddle-Signature (HMAC-SHA256), ensures idempotency via
 * medat_webhook_events, records transactions & subscriptions,
 * updates canonical entitlement on medat_user_profiles.
 */

import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

// Helper to resolve environment variables across Vercel / Vite
function getEnv(name, fallback = "") {
  return (
    process.env[name] ||
    process.env[`VITE_${name}`] ||
    fallback
  );
}

const SUPABASE_URL = getEnv("SUPABASE_URL", "https://vwvacbxbynwiwnnfyjht.supabase.co");
// Service role key is strictly required for privileged database updates
const SUPABASE_SERVICE_ROLE_KEY = getEnv(
  "SUPABASE_SERVICE_ROLE_KEY",
  getEnv("SUPABASE_SERVICE_KEY", "")
);
const PADDLE_WEBHOOK_SECRET = getEnv(
  "PADDLE_WEBHOOK_SECRET",
  "pdl_ntfset_01m57wem7zwbj47sjkns321dev_T+hfvBnyahtwfM//i//8p8G0k+XL52OI"
);
const PADDLE_ENV = getEnv("PADDLE_ENV", "production");

// Verify Paddle Billing HMAC-SHA256 signature
export function verifyPaddleSignature(rawBody, signatureHeader, secret = PADDLE_WEBHOOK_SECRET) {
  if (!signatureHeader) {
    return { valid: false, reason: "missing_header" };
  }

  // Parse ts=...;h1=...
  const tsMatch = signatureHeader.match(/ts=(\d+)/);
  const h1Match = signatureHeader.match(/h1=([a-f0-9]+)/i);

  if (!tsMatch || !h1Match) {
    return { valid: false, reason: "invalid_header_format" };
  }

  const ts = tsMatch[1];
  const receivedH1 = h1Match[1].toLowerCase();
  const signedPayload = `${ts}:${rawBody}`;

  const secrets =
    secret && secret !== PADDLE_WEBHOOK_SECRET
      ? [secret]
      : Array.from(
          new Set([
            secret,
            process.env.PADDLE_WEBHOOK_SECRET,
            "pdl_ntfset_01m57wem7zwbj47sjkns321dev_T+hfvBnyahtwfM//i//8p8G0k+XL52OI",
            "pdl_ntfset_01m57gaksqn578c2a8010svsxk_/67r7Uwr8vNkLeTOYfVliPbXj+SGf1oB",
          ].filter(Boolean))
        );

  let verified = false;
  for (const s of secrets) {
    const calculatedH1 = crypto
      .createHmac("sha256", s)
      .update(signedPayload)
      .digest("hex")
      .toLowerCase();

    const receivedBuf = Buffer.from(receivedH1, "hex");
    const calculatedBuf = Buffer.from(calculatedH1, "hex");

    if (
      receivedBuf.length === calculatedBuf.length &&
      crypto.timingSafeEqual(receivedBuf, calculatedBuf)
    ) {
      verified = true;
      break;
    }
  }

  if (!verified) {
    return { valid: false, reason: "signature_mismatch" };
  }

  // Check timestamp drift (5 minutes = 300 seconds)
  const currentTs = Math.floor(Date.now() / 1000);
  const drift = Math.abs(currentTs - Number(ts));
  if (drift > 300) {
    // Flag timestamp drift, but don't strictly fail if simulated/test unless in live production
    if (PADDLE_ENV === "production") {
      return { valid: false, reason: "timestamp_expired", drift };
    }
  }

  return { valid: true, ts, drift };
}

/**
 * Core event processing logic
 */
export async function processPaddleWebhookEvent(eventPayload, supabaseClient) {
  const eventId = eventPayload.event_id || eventPayload.id;
  const eventType = eventPayload.event_type || eventPayload.alert_name;
  const data = eventPayload.data || eventPayload;

  if (!eventId || !eventType) {
    throw new Error("Invalid event payload: missing event_id or event_type");
  }

  console.info(`[Paddle Webhook] Processing event: ${eventType} (ID: ${eventId})`);

  // 1. Idempotency Check: check if event was already processed
  const { data: existingEvent, error: selectErr } = await supabaseClient
    .from("medat_webhook_events")
    .select("id, status")
    .eq("event_id", eventId)
    .maybeSingle();

  if (selectErr) {
    console.warn("[Paddle Webhook] Failed to check event idempotency:", selectErr.message);
  }

  if (existingEvent && existingEvent.status === "processed") {
    console.info(`[Paddle Webhook] Event ${eventId} already processed. Skipping duplicate fulfillment.`);
    return { duplicate: true, eventId, status: "already_processed" };
  }

  // Record pending event in medat_webhook_events
  await supabaseClient.from("medat_webhook_events").upsert(
    {
      event_id: eventId,
      event_type: eventType,
      environment: PADDLE_ENV,
      payload: eventPayload,
      status: "processing",
      processed_at: new Date().toISOString(),
    },
    { onConflict: "event_id" }
  );

  let resolvedUserId = null;
  const customData = data.custom_data || {};
  if (typeof customData.user_id === "string" && customData.user_id.length > 0) {
    resolvedUserId = customData.user_id;
  } else if (typeof customData.userId === "string" && customData.userId.length > 0) {
    resolvedUserId = customData.userId;
  }

  // Fallback: look up user by customer email if custom_data did not contain user_id
  const customerEmail =
    data.customer?.email ||
    data.user_email ||
    data.email ||
    customData.email ||
    "";

  if (!resolvedUserId && customerEmail) {
    console.info(`[Paddle Webhook] user_id not found in custom_data, attempting lookup by email: ${customerEmail}`);
    const { data: profile } = await supabaseClient
      .from("medat_user_profiles")
      .select("user_id")
      .ilike("email", customerEmail)
      .maybeSingle();

    if (profile?.user_id) {
      resolvedUserId = profile.user_id;
      console.info(`[Paddle Webhook] Resolved user_id ${resolvedUserId} from email lookup.`);
    } else {
      // Fallback: check auth.users table directly
      const { data: authUser } = await supabaseClient
        .from("auth.users")
        .select("id")
        .ilike("email", customerEmail)
        .maybeSingle()
        .catch(() => ({ data: null }));

      if (authUser?.id) {
        resolvedUserId = authUser.id;
      }
    }
  }

  if (!resolvedUserId) {
    console.warn(`[Paddle Webhook] Warning: Could not associate event ${eventId} with a Supabase user.`);
  }

  // 2. Handle Events
  let entitlementGranted = false;

  // A. TRANSACTIONS: transaction.completed / transaction.paid
  if (eventType === "transaction.completed" || eventType === "transaction.paid") {
    const txId = data.id;
    const customerId = data.customer_id || null;
    const subscriptionId = data.subscription_id || null;
    const status = data.status || "completed";
    const amount =
      Number(data.details?.totals?.total || data.payments?.[0]?.amount || 0) /
      (data.currency_code ? 100 : 1); // Paddle totals are in base units/cents or string
    const normalizedAmount = isNaN(amount) ? 0 : amount;
    const currency = data.currency_code || "EUR";
    const productId = data.items?.[0]?.price?.product_id || customData.product_id || null;
    const priceId = data.items?.[0]?.price?.id || customData.price_id || null;

    if (resolvedUserId && txId) {
      // Upsert payment record
      const { error: txErr } = await supabaseClient.from("medat_payments").upsert(
        {
          user_id: resolvedUserId,
          paddle_transaction_id: txId,
          paddle_customer_id: customerId,
          paddle_subscription_id: subscriptionId,
          product_id: productId,
          price_id: priceId,
          amount: normalizedAmount,
          currency,
          status,
          environment: PADDLE_ENV,
          custom_data: customData,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "paddle_transaction_id" }
      );

      if (txErr) {
        console.error(`[Paddle Webhook] Failed to persist transaction ${txId}:`, txErr);
      } else {
        console.info(`[Paddle Webhook] Persisted transaction ${txId} for user ${resolvedUserId}`);
      }

      // If status is completed or paid, grant entitlement
      if (status === "completed" || status === "paid") {
        entitlementGranted = true;
        // Access period: 1 year from now (or until end of current billing period)
        const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();

        const { error: profErr } = await supabaseClient
          .from("medat_user_profiles")
          .update({
            is_pro: true,
            subscription_tier: "premium",
            subscription_status: "active",
            pro_expires_at: expiresAt,
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", resolvedUserId);

        if (profErr) {
          console.error(`[Paddle Webhook] Failed to update user profile for ${resolvedUserId}:`, profErr);
        } else {
          console.info(`[Paddle Webhook] Successfully granted Premium entitlement to user ${resolvedUserId}`);
        }
      }
    }
  }

  // B. SUBSCRIPTIONS: subscription.created / subscription.updated / subscription.canceled / paused / resumed
  if (eventType.startsWith("subscription.")) {
    const subId = data.id;
    const customerId = data.customer_id || null;
    const subStatus = data.status || "active";
    const productId = data.items?.[0]?.price?.product_id || null;
    const priceId = data.items?.[0]?.price?.id || null;
    const periodStart = data.current_billing_period?.starts_at || null;
    const periodEnd = data.current_billing_period?.ends_at || null;
    const cancelAtEnd = data.scheduled_change?.action === "cancel";

    if (resolvedUserId && subId) {
      // Upsert subscription record
      const { error: subErr } = await supabaseClient.from("medat_subscriptions").upsert(
        {
          user_id: resolvedUserId,
          paddle_subscription_id: subId,
          paddle_customer_id: customerId,
          product_id: productId,
          price_id: priceId,
          status: subStatus,
          current_period_start: periodStart,
          current_period_end: periodEnd,
          cancel_at_period_end: cancelAtEnd,
          environment: PADDLE_ENV,
          custom_data: customData,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "paddle_subscription_id" }
      );

      if (subErr) {
        console.error(`[Paddle Webhook] Failed to persist subscription ${subId}:`, subErr);
      } else {
        console.info(`[Paddle Webhook] Persisted subscription ${subId} (status: ${subStatus})`);
      }

      // Compute entitlement according to subscription lifecycle rules:
      let isPro = false;
      let subscriptionTier = "free";
      let subscriptionStatus = subStatus;
      let proExpiresAt = periodEnd;

      if (subStatus === "active" || subStatus === "trialing") {
        isPro = true;
        subscriptionTier = "premium";
        subscriptionStatus = "active";
        entitlementGranted = true;
      } else if (subStatus === "canceled") {
        // If canceled but periodEnd is in the future, retain access until periodEnd
        if (periodEnd && new Date(periodEnd).getTime() > Date.now()) {
          isPro = true;
          subscriptionTier = "premium";
          subscriptionStatus = "canceled_active";
          entitlementGranted = true;
        } else {
          isPro = false;
          subscriptionTier = "free";
          subscriptionStatus = "canceled";
        }
      } else if (subStatus === "past_due" || subStatus === "paused") {
        isPro = false;
        subscriptionTier = "free";
        subscriptionStatus = subStatus;
      }

      await supabaseClient
        .from("medat_user_profiles")
        .update({
          is_pro: isPro,
          subscription_tier: subscriptionTier,
          subscription_status: subscriptionStatus,
          pro_expires_at: proExpiresAt,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", resolvedUserId);

      console.info(
        `[Paddle Webhook] Updated user profile ${resolvedUserId}: is_pro=${isPro}, tier=${subscriptionTier}, status=${subStatus}`
      );
    }
  }

  // 3. Mark event as processed
  await supabaseClient
    .from("medat_webhook_events")
    .update({
      status: "processed",
      processed_at: new Date().toISOString(),
    })
    .eq("event_id", eventId);

  return {
    success: true,
    eventId,
    eventType,
    userId: resolvedUserId,
    entitlementGranted,
  };
}

/**
 * Universal Serverless Handler (Node.js & Edge compatible)
 */
export default async function handler(req, res) {
  // CORS Preflight
  if (req.method === "OPTIONS") {
    if (res && res.setHeader) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Paddle-Signature");
      res.statusCode = 204;
      res.end();
      return;
    }
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Paddle-Signature",
      },
    });
  }

  if (req.method !== "POST") {
    const errorBody = { error: "Method Not Allowed" };
    if (res && res.status) {
      return res.status(405).json(errorBody);
    }
    return new Response(JSON.stringify(errorBody), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // 1. Extract raw body & signature
    let rawBody = "";
    let signatureHeader = "";

    if (req.headers?.get) {
      // Fetch / Web API standard (Edge runtime)
      rawBody = await req.text();
      signatureHeader = req.headers.get("paddle-signature") || "";
    } else {
      // Node.js HTTP Server standard
      signatureHeader = req.headers["paddle-signature"] || "";
      if (typeof req.body === "string") {
        rawBody = req.body;
      } else if (Buffer.isBuffer(req.body)) {
        rawBody = req.body.toString("utf8");
      } else if (typeof req.body === "object" && req.body !== null) {
        rawBody = JSON.stringify(req.body);
      } else {
        rawBody = await new Promise((resolve) => {
          let chunks = "";
          req.on("data", (c) => (chunks += c));
          req.on("end", () => resolve(chunks));
        });
      }
    }

    // 2. Verify Paddle Signature
    const verification = verifyPaddleSignature(rawBody, signatureHeader);
    if (!verification.valid) {
      console.warn(`[Paddle Webhook] Signature verification failed: ${verification.reason}`);
      const errRes = { error: "Invalid signature", reason: verification.reason };
      if (res && res.status) {
        return res.status(401).json(errRes);
      }
      return new Response(JSON.stringify(errRes), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 3. Parse JSON Event Payload
    const eventPayload = JSON.parse(rawBody);

    // 4. Initialize Supabase Admin Client
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // 5. Process Event
    const result = await processPaddleWebhookEvent(eventPayload, supabaseClient);

    const okBody = { success: true, ...result };
    if (res && res.status) {
      return res.status(200).json(okBody);
    }
    return new Response(JSON.stringify(okBody), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[Paddle Webhook] Unexpected error:", error);
    const errBody = { error: error.message || "Internal Server Error" };
    if (res && res.status) {
      return res.status(500).json(errBody);
    }
    return new Response(JSON.stringify(errBody), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
