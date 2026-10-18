import { createClient } from "@supabase/supabase-js";

async function main() {
  const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmFjYnhieW53aXdubmZ5amh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzgwNDM3MywiZXhwIjoyMTAzMzgwMzczfQ.ji6n9CUvn0964vH7moLbkkeT-5ziJ0Ac4P90ioshyFk";
  const supabase = createClient("https://vwvacbxbynwiwnnfyjht.supabase.co", serviceKey);

  const { data } = await supabase.auth.admin.listUsers();
  for (const u of data.users) {
    if (!u.confirmed_at && !u.email_confirmed_at) {
      console.log(`Confirming user: ${u.email} (${u.id})`);
      await supabase.auth.admin.updateUserById(u.id, { email_confirm: true });
    }
  }

  const { data: updated } = await supabase.auth.admin.listUsers();
  const stillUnconfirmed = updated.users.filter(u => !u.confirmed_at && !u.email_confirmed_at);
  console.log("Remaining unconfirmed users:", stillUnconfirmed.length);
}

main().catch(console.error);
