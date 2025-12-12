-- Run this ONCE in Supabase SQL Editor to enable auto table creation
-- This creates an RPC function that allows executing raw SQL

CREATE OR REPLACE FUNCTION exec_sql(sql text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  EXECUTE sql;
END;
$$;

-- Grant access to service role
GRANT EXECUTE ON FUNCTION exec_sql(text) TO service_role;
