-- ============================================================
-- MedAT Supabase Permissions & RLS 1-Click Production Fix
-- Project: vwvacbxbynwiwnnfyjht (medatprep@gmail.com)
-- 
-- ANLEITUNG:
-- 1. Öffne das Supabase Dashboard: https://supabase.com/dashboard/project/vwvacbxbynwiwnnfyjht
-- 2. Klicke links auf "SQL Editor"
-- 3. Klicke auf "+ New Query"
-- 4. Kopiere den gesamten Inhalt dieser Datei hier hinein und klicke auf "Run" (grüner Button)
-- ============================================================

-- 1. Schema-Nutzungsrechte für API-Rollen freigeben
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

-- 2. Tabellenrechte für alle MedAT Tabellen vergeben
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;

-- 3. Sequenzen freigeben
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- 4. Funktionen & Prozeduren freigeben
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO anon, authenticated, service_role;

-- 5. Automatische Rechtevergabe für zukünftige Tabellen definieren
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON ROUTINES TO anon, authenticated, service_role;

-- 6. Row Level Security aktivieren
ALTER TABLE public.medat_user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_set_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_daily_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_mistakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_mock_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_user_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_questions ENABLE ROW LEVEL SECURITY;

-- 7. RLS-Policies für authentifizierte Benutzer aktualisieren
DO $$
BEGIN
  -- medat_user_profiles
  DROP POLICY IF EXISTS "profiles_select_own" ON public.medat_user_profiles;
  DROP POLICY IF EXISTS "profiles_insert_own" ON public.medat_user_profiles;
  DROP POLICY IF EXISTS "profiles_update_own" ON public.medat_user_profiles;
  DROP POLICY IF EXISTS "profiles_delete_own" ON public.medat_user_profiles;
  CREATE POLICY "profiles_select_own" ON public.medat_user_profiles FOR SELECT TO authenticated USING (auth.uid() = user_id);
  CREATE POLICY "profiles_insert_own" ON public.medat_user_profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
  CREATE POLICY "profiles_update_own" ON public.medat_user_profiles FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
  CREATE POLICY "profiles_delete_own" ON public.medat_user_profiles FOR DELETE TO authenticated USING (auth.uid() = user_id);

  -- medat_question_attempts
  DROP POLICY IF EXISTS "attempts_select_own" ON public.medat_question_attempts;
  DROP POLICY IF EXISTS "attempts_insert_own" ON public.medat_question_attempts;
  CREATE POLICY "attempts_select_own" ON public.medat_question_attempts FOR SELECT TO authenticated USING (auth.uid() = user_id);
  CREATE POLICY "attempts_insert_own" ON public.medat_question_attempts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

  -- medat_set_attempts
  DROP POLICY IF EXISTS "set_attempts_select_own" ON public.medat_set_attempts;
  DROP POLICY IF EXISTS "set_attempts_insert_own" ON public.medat_set_attempts;
  CREATE POLICY "set_attempts_select_own" ON public.medat_set_attempts FOR SELECT TO authenticated USING (auth.uid() = user_id);
  CREATE POLICY "set_attempts_insert_own" ON public.medat_set_attempts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

  -- medat_daily_missions
  DROP POLICY IF EXISTS "missions_select_own" ON public.medat_daily_missions;
  DROP POLICY IF EXISTS "missions_upsert_own" ON public.medat_daily_missions;
  CREATE POLICY "missions_select_own" ON public.medat_daily_missions FOR SELECT TO authenticated USING (auth.uid() = user_id);
  CREATE POLICY "missions_upsert_own" ON public.medat_daily_missions FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

  -- medat_mistakes
  DROP POLICY IF EXISTS "mistakes_select_own" ON public.medat_mistakes;
  DROP POLICY IF EXISTS "mistakes_all_own" ON public.medat_mistakes;
  CREATE POLICY "mistakes_select_own" ON public.medat_mistakes FOR SELECT TO authenticated USING (auth.uid() = user_id);
  CREATE POLICY "mistakes_all_own" ON public.medat_mistakes FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

  -- medat_mock_results
  DROP POLICY IF EXISTS "mock_results_select_own" ON public.medat_mock_results;
  DROP POLICY IF EXISTS "mock_results_all_own" ON public.medat_mock_results;
  CREATE POLICY "mock_results_select_own" ON public.medat_mock_results FOR SELECT TO authenticated USING (auth.uid() = user_id);
  CREATE POLICY "mock_results_all_own" ON public.medat_mock_results FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

  -- medat_bookmarks
  DROP POLICY IF EXISTS "bookmarks_all_own" ON public.medat_bookmarks;
  CREATE POLICY "bookmarks_all_own" ON public.medat_bookmarks FOR ALL TO authenticated USING (auth.uid() = user_id);

  -- medat_user_activity
  DROP POLICY IF EXISTS "activity_all_own" ON public.medat_user_activity;
  CREATE POLICY "activity_all_own" ON public.medat_user_activity FOR ALL TO authenticated USING (auth.uid() = user_id);

  -- medat_questions (Öffentlich lesbar für Übungsaufgaben)
  DROP POLICY IF EXISTS "questions_read_all" ON public.medat_questions;
  CREATE POLICY "questions_read_all" ON public.medat_questions FOR SELECT USING (true);
END $$;
