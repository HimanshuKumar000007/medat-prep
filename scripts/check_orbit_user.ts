import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const { data: users } = await supabase.auth.admin.listUsers();
  const orbitUser = users?.users?.find(u => u.email?.toLowerCase().includes("orbit"));
  console.log("Orbit user in auth.users:", orbitUser ? { id: orbitUser.id, email: orbitUser.email } : "NOT FOUND");

  if (orbitUser) {
    const { data: profile } = await supabase
      .from("medat_user_profiles")
      .select("*")
      .eq("user_id", orbitUser.id)
      .maybeSingle();
    console.log("Profile for orbit user:", profile);

    const { data: payments } = await supabase
      .from("medat_payments")
      .select("*")
      .eq("user_id", orbitUser.id);
    console.log("Payments for orbit user:", payments);
  }

  // Also search all profiles
  const { data: allProfiles } = await supabase
    .from("medat_user_profiles")
    .select("user_id, email, name, is_pro, subscription_tier, subscription_status");
  console.log("All profiles count:", allProfiles?.length);
  console.log("Profiles:", allProfiles);

  // Search webhook events for orbit
  const { data: events } = await supabase
    .from("medat_webhook_events")
    .select("event_id, event_type, status, error_message, processed_at, payload")
    .order("processed_at", { ascending: false })
    .limit(10);
  
  console.log("Last 10 events:");
  for (const e of events || []) {
    const customData = e.payload?.data?.custom_data;
    const customerEmail = e.payload?.data?.customer?.email || e.payload?.data?.details?.customer?.email;
    console.log(`Event: ${e.event_id} | Type: ${e.event_type} | Email: ${customerEmail} | customData:`, customData);
  }
}

run();
