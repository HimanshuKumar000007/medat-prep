import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  console.log("Checking Supabase for payments and profiles...");

  const { data: users } = await supabase.auth.admin.listUsers();
  console.log("--- AUTH USERS ---");
  for (const u of users?.users || []) {
    console.log(`ID: ${u.id} | Email: ${u.email}`);
  }

  const { data: profiles } = await supabase.from("medat_user_profiles").select("user_id, email, name, is_pro, subscription_tier, subscription_status, pro_expires_at");
  console.log("\n--- USER PROFILES ---");
  console.table(profiles);

  const { data: payments } = await supabase.from("medat_payments").select("*").order("created_at", { ascending: false }).limit(5);
  console.log("\n--- RECENT PAYMENTS ---");
  console.table(payments);

  const { data: subs } = await supabase.from("medat_subscriptions").select("*").order("created_at", { ascending: false }).limit(5);
  console.log("\n--- RECENT SUBSCRIPTIONS ---");
  console.table(subs);

  const { data: events } = await supabase.from("medat_webhook_events").select("id, event_id, event_type, status, error_message, processed_at").order("processed_at", { ascending: false }).limit(10);
  console.log("\n--- RECENT WEBHOOK EVENTS ---");
  console.table(events);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
