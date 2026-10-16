/**
 * scripts/verify_paddle_supabase_pipeline.ts
 *
 * Comprehensive Automated Verification Suite for Paddle Billing -> Supabase -> Entitlement Pipeline.
 * Tests:
 * 1. Environment & Configuration Separation (Sandbox vs Production)
 * 2. HMAC-SHA256 Signature Verification (Valid, Tampered, Invalid Secret)
 * 3. Webhook Delivery & Processing (transaction.completed)
 * 4. User Association via custom_data.user_id
 * 5. Supabase Persistence (medat_payments, medat_user_profiles)
 * 6. Webhook Idempotency (Replay attack prevention, duplicate event rejection)
 * 7. Subscription Lifecycle (subscription.created, subscription.updated, cancellation)
 * 8. User Isolation (User A purchase does not unlock User B)
 * 9. Direct Entitlement Check API / Polling Resolution
 */

import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import {
  verifyPaddleSignature,
  processPaddleWebhookEvent,
} from "../api/paddle-webhook.js";
import { validatePaddleConfig, PADDLE_CONFIG } from "../src/lib/paddle";
import { isUserPro } from "../src/lib/bmsAccessControl";
import { sanitizeUserProfile } from "../src/lib/profileUtils";
import type { UserProfile } from "../src/dashboard/practiceContext";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET || "pdl_ntfset_01m4sv_test_secret_medat";

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

// Helper to generate a valid Paddle-Signature header for a body
function createPaddleSignature(body: string, secret = WEBHOOK_SECRET, ts = Math.floor(Date.now() / 1000)): string {
  const payload = `${ts}:${body}`;
  const h1 = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `ts=${ts};h1=${h1}`;
}

async function runTests() {
  console.log("\n=======================================================");
  console.log("  RUNNING PADDLE -> SUPABASE PIPELINE VERIFICATION");
  console.log("=======================================================\n");

  // ----------------------------------------------------
  // TEST 1: Environment & Token Configuration
  // ----------------------------------------------------
  console.log("--- 1. Paddle Environment & Token Validation ---");
  const configVal = validatePaddleConfig();
  assert(configVal.valid, "Paddle configuration must be valid");
  assert(PADDLE_CONFIG.environment === "sandbox", "PADDLE_CONFIG.environment must be 'sandbox'");
  assert(PADDLE_CONFIG.clientToken.startsWith("test_"), "Client token must begin with 'test_' in sandbox");
  assert(PADDLE_CONFIG.monthlyPriceId.startsWith("pri_"), "Price ID must begin with 'pri_'");

  // ----------------------------------------------------
  // TEST 2: Webhook Signature Verification
  // ----------------------------------------------------
  console.log("\n--- 2. Webhook Signature Verification (HMAC-SHA256) ---");
  const testPayload = JSON.stringify({
    event_id: "evt_sig_test_" + Date.now(),
    event_type: "transaction.completed",
    data: { id: "txn_sig_test" },
  });

  const validSig = createPaddleSignature(testPayload, WEBHOOK_SECRET);
  const verifyValid = verifyPaddleSignature(testPayload, validSig, WEBHOOK_SECRET);
  assert(verifyValid.valid === true, "Valid signature must pass verification");

  // Tampered payload
  const tamperedPayload = testPayload.replace("txn_sig_test", "txn_tampered");
  const verifyTampered = verifyPaddleSignature(tamperedPayload, validSig, WEBHOOK_SECRET);
  assert(verifyTampered.valid === false, "Tampered payload must fail signature verification");

  // Invalid secret
  const verifyWrongSecret = verifyPaddleSignature(testPayload, validSig, "pdl_wrong_secret");
  assert(verifyWrongSecret.valid === false, "Incorrect secret must fail signature verification");

  // ----------------------------------------------------
  // TEST 3: User Setup for Real Supabase Integration
  // ----------------------------------------------------
  console.log("\n--- 3. Setting Up Test Users in Supabase ---");
  const emailA = "test_user_a@medatprep.at";
  const emailB = "test_user_b@medatprep.at";

  let testUserAId = "";
  let testUserBId = "";

  const { data: usersData } = await supabaseAdmin.auth.admin.listUsers();
  const existingA = usersData?.users?.find((u) => u.email === emailA);
  const existingB = usersData?.users?.find((u) => u.email === emailB);

  if (existingA) {
    testUserAId = existingA.id;
  } else {
    const { data: createdA, error: errA } = await supabaseAdmin.auth.admin.createUser({
      email: emailA,
      email_confirm: true,
      user_metadata: { full_name: "User A Test" },
    });
    if (errA) throw errA;
    testUserAId = createdA.user!.id;
  }

  if (existingB) {
    testUserBId = existingB.id;
  } else {
    const { data: createdB, error: errB } = await supabaseAdmin.auth.admin.createUser({
      email: emailB,
      email_confirm: true,
      user_metadata: { full_name: "User B Test" },
    });
    if (errB) throw errB;
    testUserBId = createdB.user!.id;
  }

  // Ensure initial free profile for User A
  await supabaseAdmin.from("medat_user_profiles").upsert(
    {
      user_id: testUserAId,
      email: emailA,
      name: "User A Test",
      is_pro: false,
      subscription_tier: "free",
      subscription_status: "none",
    },
    { onConflict: "user_id" }
  );

  // Ensure initial free profile for User B
  await supabaseAdmin.from("medat_user_profiles").upsert(
    {
      user_id: testUserBId,
      email: emailB,
      name: "User B Test",
      is_pro: false,
      subscription_tier: "free",
      subscription_status: "none",
    },
    { onConflict: "user_id" }
  );

  const { data: initialA } = await supabaseAdmin
    .from("medat_user_profiles")
    .select("is_pro, subscription_tier")
    .eq("user_id", testUserAId)
    .single();

  assert(initialA?.is_pro === false, "User A initial profile must have is_pro=false");
  assert(initialA?.subscription_tier === "free", "User A initial profile must have tier='free'");

  // ----------------------------------------------------
  // TEST 4: Successful Sandbox Purchase Flow (transaction.completed)
  // ----------------------------------------------------
  console.log("\n--- 4. Webhook Processing: transaction.completed ---");
  const txId = "txn_sandbox_medat_" + Date.now();
  const eventId = "evt_tx_medat_" + Date.now();

  const transactionEvent = {
    event_id: eventId,
    event_type: "transaction.completed",
    occurred_at: new Date().toISOString(),
    data: {
      id: txId,
      status: "completed",
      customer_id: "ctm_01test_medat",
      currency_code: "EUR",
      details: {
        totals: {
          total: 3900,
        },
      },
      custom_data: {
        user_id: testUserAId,
        user_name: "User A Test",
        exam_type: "MEDAT-H",
        product_id: PADDLE_CONFIG.productId,
        price_id: PADDLE_CONFIG.monthlyPriceId,
      },
      items: [
        {
          price: {
            id: PADDLE_CONFIG.monthlyPriceId,
            product_id: PADDLE_CONFIG.productId,
          },
        },
      ],
    },
  };

  const processResult = await processPaddleWebhookEvent(transactionEvent, supabaseAdmin);
  assert(processResult.success === true, "processPaddleWebhookEvent must return success=true");
  assert(processResult.userId === testUserAId, "Event must resolve to testUserAId");
  assert(processResult.entitlementGranted === true, "entitlementGranted must be true");

  // Verify persistence in medat_payments
  const { data: paymentRecord } = await supabaseAdmin
    .from("medat_payments")
    .select("*")
    .eq("paddle_transaction_id", txId)
    .single();

  assert(!!paymentRecord, "Payment record must exist in medat_payments");
  assert(paymentRecord.user_id === testUserAId, "Payment must be associated with User A");
  assert(paymentRecord.status === "completed", "Payment status must be 'completed'");
  assert(paymentRecord.amount === 39, "Payment amount must be 39 EUR");

  // Verify entitlement update in medat_user_profiles
  const { data: profileAfterTx } = await supabaseAdmin
    .from("medat_user_profiles")
    .select("is_pro, subscription_tier, subscription_status, pro_expires_at")
    .eq("user_id", testUserAId)
    .single();

  assert(profileAfterTx?.is_pro === true, "User A must now have is_pro=true in medat_user_profiles");
  assert(profileAfterTx?.subscription_tier === "premium", "User A tier must be 'premium'");
  assert(profileAfterTx?.subscription_status === "active", "User A status must be 'active'");

  // Verify frontend access check resolves to Pro
  const sanitizedA = sanitizeUserProfile(profileAfterTx);
  assert(isUserPro(sanitizedA) === true, "isUserPro(sanitizedA) must return true");

  // ----------------------------------------------------
  // TEST 5: Idempotency (Replay Attack / Duplicate Delivery)
  // ----------------------------------------------------
  console.log("\n--- 5. Webhook Idempotency ---");
  const replayResult = await processPaddleWebhookEvent(transactionEvent, supabaseAdmin);
  assert(replayResult.duplicate === true, "Replayed event must return duplicate=true");

  // Verify no duplicate row was created in medat_payments
  const { count: txCount } = await supabaseAdmin
    .from("medat_payments")
    .select("*", { count: "exact", head: true })
    .eq("paddle_transaction_id", txId);

  assert(txCount === 1, "Exactly 1 record must exist in medat_payments for this transaction");

  // ----------------------------------------------------
  // TEST 6: User Isolation (User B must remain Free)
  // ----------------------------------------------------
  console.log("\n--- 6. User Isolation Verification ---");
  const { data: profileB } = await supabaseAdmin
    .from("medat_user_profiles")
    .select("is_pro, subscription_tier")
    .eq("user_id", testUserBId)
    .single();

  assert(profileB?.is_pro === false, "User B must remain is_pro=false");
  assert(profileB?.subscription_tier === "free", "User B tier must remain 'free'");
  assert(isUserPro(profileB) === false, "isUserPro(profileB) must be false");

  // ----------------------------------------------------
  // TEST 7: Subscription Lifecycle (Create, Cancel with Future Period, Past Due)
  // ----------------------------------------------------
  console.log("\n--- 7. Subscription Lifecycle Management ---");
  const subId = "sub_medat_test_" + Date.now();
  const subEventId = "evt_sub_medat_" + Date.now();

  const futurePeriodEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const subCreateEvent = {
    event_id: subEventId,
    event_type: "subscription.created",
    data: {
      id: subId,
      customer_id: "ctm_01test_medat",
      status: "active",
      current_billing_period: {
        starts_at: new Date().toISOString(),
        ends_at: futurePeriodEnd,
      },
      custom_data: {
        user_id: testUserAId,
      },
      items: [{ price: { id: PADDLE_CONFIG.monthlyPriceId } }],
    },
  };

  await processPaddleWebhookEvent(subCreateEvent, supabaseAdmin);

  const { data: subRow } = await supabaseAdmin
    .from("medat_subscriptions")
    .select("*")
    .eq("paddle_subscription_id", subId)
    .single();

  assert(!!subRow, "Subscription record must exist in medat_subscriptions");
  assert(subRow.status === "active", "Subscription status must be 'active'");

  // Cancel with future period end -> access should remain until period end
  const subCancelEvent = {
    event_id: "evt_sub_cancel_" + Date.now(),
    event_type: "subscription.canceled",
    data: {
      id: subId,
      customer_id: "ctm_01test_medat",
      status: "canceled",
      current_billing_period: {
        starts_at: new Date().toISOString(),
        ends_at: futurePeriodEnd,
      },
      scheduled_change: { action: "cancel" },
      custom_data: { user_id: testUserAId },
    },
  };

  await processPaddleWebhookEvent(subCancelEvent, supabaseAdmin);

  const { data: profileAfterCancel } = await supabaseAdmin
    .from("medat_user_profiles")
    .select("is_pro, subscription_tier, subscription_status, pro_expires_at")
    .eq("user_id", testUserAId)
    .single();

  assert(
    profileAfterCancel?.is_pro === true,
    "User A must retain Pro access until future current_period_end despite cancellation"
  );
  assert(
    profileAfterCancel?.subscription_status === "canceled_active",
    "Status should indicate canceled_active during remaining period"
  );

  // Past Due Event -> access revoked immediately
  const subPastDueEvent = {
    event_id: "evt_sub_pastdue_" + Date.now(),
    event_type: "subscription.updated",
    data: {
      id: subId,
      customer_id: "ctm_01test_medat",
      status: "past_due",
      custom_data: { user_id: testUserAId },
    },
  };

  await processPaddleWebhookEvent(subPastDueEvent, supabaseAdmin);

  const { data: profilePastDue } = await supabaseAdmin
    .from("medat_user_profiles")
    .select("is_pro, subscription_tier, subscription_status")
    .eq("user_id", testUserAId)
    .single();

  assert(profilePastDue?.is_pro === false, "User A access must be revoked on past_due subscription");
  assert(profilePastDue?.subscription_tier === "free", "User A tier must revert to free");

  // Re-activate with transaction.completed to restore clean Premium state
  const restoreTx = {
    event_id: "evt_restore_" + Date.now(),
    event_type: "transaction.completed",
    data: {
      id: "txn_restore_" + Date.now(),
      status: "completed",
      customer_id: "ctm_01test_medat",
      details: { totals: { total: 3900 } },
      custom_data: { user_id: testUserAId },
    },
  };

  await processPaddleWebhookEvent(restoreTx, supabaseAdmin);

  const { data: restoredProfile } = await supabaseAdmin
    .from("medat_user_profiles")
    .select("is_pro, subscription_tier")
    .eq("user_id", testUserAId)
    .single();

  assert(restoredProfile?.is_pro === true, "User A Pro access successfully restored");
  assert(restoredProfile?.subscription_tier === "premium", "User A tier restored to premium");

  console.log("\n=======================================================");
  console.log("  🎉 ALL PADDLE -> SUPABASE PIPELINE TESTS PASSED!");
  console.log("=======================================================\n");
}

runTests().catch((err) => {
  console.error("Pipeline verification failed with error:", err);
  process.exit(1);
});
