-- Fix Function Search Path Security Warnings
-- Simple approach: ALTER each function directly

-- Core functions
ALTER FUNCTION public.is_admin() SET search_path = public;
ALTER FUNCTION public.update_category_thread_count() SET search_path = public;
ALTER FUNCTION public.get_user_balance(p_user_id text) SET search_path = public;
ALTER FUNCTION public.add_coins(p_user_id text, p_amount integer, p_type text, p_description text) SET search_path = public;
ALTER FUNCTION public.can_claim_daily(p_user_id text, p_claim_type text) SET search_path = public;

SELECT '✅ Core functions fixed!' as status;
