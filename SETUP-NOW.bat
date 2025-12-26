@echo off
echo ============================================
echo Auto Setup Supabase - Direct SQL
echo ============================================
echo.

set DB_URL=postgres://postgres.linnqtixdfjwbrixitrb:XAJPIiDfXVC7GskV@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require

echo Running SQL setup...
psql "%DB_URL%" -f scripts\COMPLETE-DATABASE-SETUP-FIXED.sql

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================
    echo SUCCESS! Database setup completed
    echo ============================================
) else (
    echo.
    echo ============================================
    echo ERROR! Setup failed
    echo ============================================
)

pause
