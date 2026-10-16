const https = require('https');
const fs = require('fs');

const TOKEN = process.env.SUPABASE_ACCESS_TOKEN || '';
const PROJECT_REF = 'vwvacbxbynwiwnnfyjht';

function runSql(sql) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({ query: sql });
    const req = https.request({
      hostname: 'api.supabase.com',
      path: `/v1/projects/${PROJECT_REF}/database/query`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

const migrationSql = `
-- ============================================================
-- Supabase Schema: MedAT-H / MedAT-Z Production Architecture
-- Project: vwvacbxbynwiwnnfyjht (medatprep@gmail.com's Project)
-- Single Source of Truth for Real Student Data
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. User Profiles & Preferences
CREATE TABLE IF NOT EXISTS public.medat_user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT DEFAULT 'Student:in',
  email TEXT,
  exam_type TEXT DEFAULT 'MEDAT-H',
  target_year INT DEFAULT 2027,
  target_university TEXT DEFAULT 'undecided',
  preparation_stage TEXT DEFAULT 'just_starting',
  daily_study_time TEXT DEFAULT '1_2h',
  daily_minutes INT DEFAULT 60,
  study_days_per_week INT DEFAULT 5,
  plan_configured BOOLEAN DEFAULT FALSE,
  focus_areas JSONB DEFAULT '["BMS"]'::jsonb,
  onboarded BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Question Attempts (Granular attempt records)
CREATE TABLE IF NOT EXISTS public.medat_question_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  selected_option INT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_seconds INT DEFAULT 0,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Set Attempts (5-Set Sequence completions)
CREATE TABLE IF NOT EXISTS public.medat_set_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  set_id TEXT NOT NULL,
  chapter_id TEXT NOT NULL,
  score NUMERIC DEFAULT 0,
  correct_count INT DEFAULT 0,
  total_questions INT DEFAULT 0,
  time_spent_seconds INT DEFAULT 0,
  passed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Daily Missions (Daily Blueprint & Task Status)
CREATE TABLE IF NOT EXISTS public.medat_daily_missions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mission_date TEXT NOT NULL,
  target_minutes INT DEFAULT 60,
  study_days_per_week INT DEFAULT 5,
  is_created BOOLEAN DEFAULT FALSE,
  is_completed BOOLEAN DEFAULT FALSE,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_user_mission_date UNIQUE (user_id, mission_date)
);

-- 5. Mistakes / Error Box (Dynamic Error Tracking)
CREATE TABLE IF NOT EXISTS public.medat_mistakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  chapter_id TEXT,
  section TEXT,
  resolved BOOLEAN DEFAULT FALSE,
  wrong_count INT DEFAULT 1,
  last_wrong_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ,
  CONSTRAINT uq_user_mistake UNIQUE (user_id, question_id)
);

-- 6. Mock Results (Generalprobe & Full Mock Exam Simulations)
CREATE TABLE IF NOT EXISTS public.medat_mock_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mock_id TEXT NOT NULL,
  mock_title TEXT,
  score NUMERIC DEFAULT 0,
  total_questions INT DEFAULT 0,
  correct INT DEFAULT 0,
  wrong INT DEFAULT 0,
  skipped INT DEFAULT 0,
  time_taken_seconds INT DEFAULT 0,
  bms_percent NUMERIC DEFAULT 0,
  tv_percent NUMERIC DEFAULT 0,
  kff_percent NUMERIC DEFAULT 0,
  sek_percent NUMERIC DEFAULT 0,
  subtest_scores JSONB DEFAULT '{}'::jsonb,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Question Bookmarks (Starred questions)
CREATE TABLE IF NOT EXISTS public.medat_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_user_bookmark UNIQUE (user_id, question_id)
);

-- 8. User Activity Log (Daily streak & activity dates)
CREATE TABLE IF NOT EXISTS public.medat_user_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_date TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_user_activity UNIQUE (user_id, activity_date)
);

-- 9. Questions Repository (Canonical Questions Catalogue)
CREATE TABLE IF NOT EXISTS public.medat_questions (
  id TEXT PRIMARY KEY,
  chapter TEXT,
  chapter_id TEXT,
  topic TEXT,
  set_number INT,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INT NOT NULL,
  explanation TEXT,
  difficulty TEXT,
  concept TEXT,
  tags JSONB,
  exam_type TEXT DEFAULT 'BOTH',
  section TEXT DEFAULT 'BMS',
  subject_id TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_q_attempts_user_q ON public.medat_question_attempts(user_id, question_id);
CREATE INDEX IF NOT EXISTS idx_q_attempts_user_date ON public.medat_question_attempts(user_id, attempted_at);
CREATE INDEX IF NOT EXISTS idx_set_attempts_user ON public.medat_set_attempts(user_id, set_id);
CREATE INDEX IF NOT EXISTS idx_set_attempts_user_ch ON public.medat_set_attempts(user_id, chapter_id);
CREATE INDEX IF NOT EXISTS idx_missions_user_date ON public.medat_daily_missions(user_id, mission_date);
CREATE INDEX IF NOT EXISTS idx_mistakes_user_res ON public.medat_mistakes(user_id, resolved);
CREATE INDEX IF NOT EXISTS idx_mock_results_user ON public.medat_mock_results(user_id, completed_at);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON public.medat_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_user ON public.medat_user_activity(user_id, activity_date);

-- Enable Row Level Security (RLS)
ALTER TABLE public.medat_user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_set_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_daily_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_mistakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_mock_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_user_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_questions ENABLE ROW LEVEL SECURITY;

-- Helper macro to safely recreate RLS policies
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
  CREATE POLICY "bookmarks_all_own" ON public.medat_bookmarks FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

  -- medat_user_activity
  DROP POLICY IF EXISTS "activity_all_own" ON public.medat_user_activity;
  CREATE POLICY "activity_all_own" ON public.medat_user_activity FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

  -- medat_questions (read-only for all, including anon)
  DROP POLICY IF EXISTS "questions_read_all" ON public.medat_questions;
  CREATE POLICY "questions_read_all" ON public.medat_questions FOR SELECT USING (true);
END $$;

-- 10. Auto-Profile Trigger for New Auth Signups
CREATE OR REPLACE FUNCTION public.handle_new_medat_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.medat_user_profiles (
    user_id,
    email,
    name,
    exam_type,
    target_year,
    target_university,
    preparation_stage,
    daily_study_time,
    daily_minutes,
    study_days_per_week,
    plan_configured,
    focus_areas,
    onboarded
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Student:in'),
    COALESCE(NEW.raw_user_meta_data->>'exam_type', 'MEDAT-H'),
    2027,
    'undecided',
    'just_starting',
    '1_2h',
    60,
    5,
    FALSE,
    '["BMS"]'::jsonb,
    TRUE
  )
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_medat_user_created ON auth.users;
CREATE TRIGGER on_medat_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_medat_user();
`;

async function main() {
  console.log('--- APPLYING MEDAT SCHEMA MIGRATION ---');
  const res = await runSql(migrationSql);
  console.log('Migration Result Status:', res.status);
  console.log('Migration Result Data:', JSON.stringify(res.data, null, 2));

  // Verify created tables
  const verify = await runSql(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public'
    ORDER BY table_name;
  `);
  console.log('Public tables in Supabase:', JSON.stringify(verify.data, null, 2));
}

main().catch(console.error);
