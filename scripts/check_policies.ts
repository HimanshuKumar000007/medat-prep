import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const { data, error } = await supabase.rpc("get_policies", {});
  if (error) {
    // query directly via postgres
    const { data: pols, error: err2 } = await supabase
      .from("pg_policies")
      .select("*")
      .eq("tablename", "medat_user_profiles");
    console.log("Policies:", pols, err2);
  } else {
    console.log("Policies via rpc:", data);
  }
}

run();
