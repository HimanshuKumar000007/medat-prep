import { createClient } from "@supabase/supabase-js";

async function main() {
  const supabase = createClient(
    "https://vwvacbxbynwiwnnfyjht.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmFjYnhieW53aXdubmZ5amh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MDQzNzMsImV4cCI6MjEwMzM4MDM3M30.bsfxsiS4EKF_HCpVYYliFo4KrJ4krIY6u3GwujEE7nY"
  );

  console.log("Testing signUp with existing user rdxankit1234@gmail.com...");
  const { data, error } = await supabase.auth.signUp({
    email: "rdxankit1234@gmail.com",
    password: "TestPassword123!",
  });

  console.log("Data:", JSON.stringify(data, null, 2));
  console.log("Error:", error);
}

main().catch(console.error);
