import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const email = "hireorbitai@gmail.com";
  console.log(`Unlocking user ${email} in Supabase...`);

  const { data: users } = await supabase.auth.admin.listUsers();
  const user = users?.users?.find(u => u.email === email);
  if (!user) {
    console.error(`User ${email} not found!`);
    return;
  }

  const oneYearFromNow = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();

  // 1. Update medat_user_profiles
  const { data: prof, error: profErr } = await supabase
    .from("medat_user_profiles")
    .update({
      is_pro: true,
      subscription_tier: "premium",
      subscription_status: "active",
      pro_expires_at: oneYearFromNow,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", user.id)
    .select();

  console.log("Updated profile:", prof, profErr);

  // 2. Insert record in medat_payments
  const txId = "txn_manual_activation_" + Date.now();
  const { data: pay, error: payErr } = await supabase
    .from("medat_payments")
    .upsert({
      user_id: user.id,
      paddle_transaction_id: txId,
      paddle_customer_id: "ctm_sandbox_orbit",
      amount: 39,
      currency: "EUR",
      status: "completed",
      environment: "sandbox",
      custom_data: { user_id: user.id, email: user.email },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: "paddle_transaction_id" })
    .select();

  console.log("Recorded payment:", pay, payErr);

  // 3. Insert record in medat_subscriptions
  const subId = "sub_sandbox_orbit_" + Date.now();
  const { data: sub, error: subErr } = await supabase
    .from("medat_subscriptions")
    .upsert({
      user_id: user.id,
      paddle_subscription_id: subId,
      paddle_customer_id: "ctm_sandbox_orbit",
      product_id: "pro_01m4strby6nzrjc21zeh8jshwp",
      price_id: "pri_01m4sv454dth7gc5fm52tvhht5",
      status: "active",
      current_period_start: new Date().toISOString(),
      current_period_end: oneYearFromNow,
      environment: "sandbox",
      custom_data: { user_id: user.id, email: user.email },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: "paddle_subscription_id" })
    .select();

  console.log("Recorded subscription:", sub, subErr);

  console.log(`\n🎉 SUCCESS: User ${email} is now unlocked to PREMIUM in Supabase!`);
}

run().catch(console.error);
