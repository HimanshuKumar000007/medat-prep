// check_supabase_set_attempts.cjs
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://vwvacbxbynwiwnnfyjht.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmFjYnhieW53aXdubmZ5amh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MDQzNzMsImV4cCI6MjEwMzM4MDM3M30.bsfxsiS4EKF_HCpVYYliFo4KrJ4krIY6u3GwujEE7nY";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  console.log("Checking Supabase tables...");
  
  // Check medat_set_attempts
  const { data: setAttempts, error: setErr } = await supabase
    .from("medat_set_attempts")
    .select("*")
    .limit(20);

  console.log("medat_set_attempts query result:");
  console.log("Error:", setErr);
  console.log("Count:", setAttempts ? setAttempts.length : 0);
  console.log("Rows:", JSON.stringify(setAttempts, null, 2));

  // Check medat_user_profiles
  const { data: profiles, error: profErr } = await supabase
    .from("medat_user_profiles")
    .select("id, user_id, name, email")
    .limit(20);
  console.log("medat_user_profiles Count:", profiles ? profiles.length : 0);
  console.log("Profiles:", profiles);
}

check().catch(console.error);
