import { createClient } from "@supabase/supabase-js";

const env = (import.meta as unknown as { env: Record<string, string> }).env || {};

const supabaseUrl = env.VITE_SUPABASE_URL || "https://vwvacbxbynwiwnnfyjht.supabase.co";
const supabaseAnonKey =
  env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmFjYnhieW53aXdubmZ5amh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MDQzNzMsImV4cCI6MjEwMzM4MDM3M30.bsfxsiS4EKF_HCpVYYliFo4KrJ4krIY6u3GwujEE7nY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  },
});
