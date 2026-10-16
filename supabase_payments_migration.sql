-- ============================================================
-- MedAT Supabase Payments, Subscriptions & Entitlements Migration
-- Project: vwvacbxbynwiwnnfyjht (medatprep@gmail.com)
-- ============================================================

-- 1. Extend medat_user_profiles with entitlement columns
ALTER TABLE public.medat_user_profiles
  ADD COLUMN IF NOT EXISTS is_pro BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS subscription_tier TEXT DEFAULT 'free',
  ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'none',
  ADD COLUMN IF NOT EXISTS pro_expires_at TIMESTAMPTZ;

-- 2. Create Payments Table
CREATE TABLE IF NOT EXISTS public.medat_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  paddle_transaction_id TEXT UNIQUE NOT NULL,
  paddle_customer_id TEXT,
  paddle_subscription_id TEXT,
  product_id TEXT,
  price_id TEXT,
  amount NUMERIC DEFAULT 0,
  currency TEXT DEFAULT 'EUR',
  status TEXT NOT NULL,
  environment TEXT NOT NULL DEFAULT 'sandbox',
  custom_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Subscriptions Table
CREATE TABLE IF NOT EXISTS public.medat_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  paddle_subscription_id TEXT UNIQUE NOT NULL,
  paddle_customer_id TEXT,
  product_id TEXT,
  price_id TEXT,
  status TEXT NOT NULL,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  environment TEXT NOT NULL DEFAULT 'sandbox',
  custom_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create Webhook Events Log (for strict idempotency & audit trail)
CREATE TABLE IF NOT EXISTS public.medat_webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT UNIQUE NOT NULL,
  event_type TEXT NOT NULL,
  environment TEXT NOT NULL DEFAULT 'sandbox',
  payload JSONB,
  status TEXT NOT NULL DEFAULT 'processed',
  error_message TEXT,
  processed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Indexes
CREATE INDEX IF NOT EXISTS idx_medat_payments_user_id ON public.medat_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_medat_payments_tx_id ON public.medat_payments(paddle_transaction_id);
CREATE INDEX IF NOT EXISTS idx_medat_subs_user_id ON public.medat_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_medat_subs_sub_id ON public.medat_subscriptions(paddle_subscription_id);
CREATE INDEX IF NOT EXISTS idx_medat_events_event_id ON public.medat_webhook_events(event_id);

-- 6. Enable Row Level Security (RLS)
ALTER TABLE public.medat_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medat_webhook_events ENABLE ROW LEVEL SECURITY;

-- 7. Grant Privileges to API roles
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.medat_payments TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.medat_subscriptions TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.medat_webhook_events TO anon, authenticated, service_role;

-- 8. RLS Policies
DO $$
BEGIN
  -- medat_payments: authenticated users can only view their own payment history
  DROP POLICY IF EXISTS "payments_select_own" ON public.medat_payments;
  CREATE POLICY "payments_select_own" ON public.medat_payments
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

  -- medat_subscriptions: authenticated users can only view their own subscription
  DROP POLICY IF EXISTS "subscriptions_select_own" ON public.medat_subscriptions;
  CREATE POLICY "subscriptions_select_own" ON public.medat_subscriptions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

  -- medat_webhook_events: strictly service_role only (no public/anon access)
  -- service_role automatically bypasses RLS, so no policy needed for anon/authenticated
END $$;
