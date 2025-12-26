@echo off
echo ============================================
echo FiveM Tools V7 - Complete Database Setup
echo ============================================
echo.

REM Check if DATABASE_URL is set
if "%DATABASE_URL%"=="" (
    echo ERROR: DATABASE_URL environment variable not set
    echo.
    echo Please set it first:
    echo set DATABASE_URL=your_database_connection_string
    echo.
    pause
    exit /b 1
)

echo Running complete database setup...
echo.

REM Run the complete setup SQL
psql "%DATABASE_URL%" -f scripts\COMPLETE-DATABASE-SETUP.sql

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================
    echo SUCCESS! Database setup completed
    echo ============================================
    echo.
    echo Next steps:
    echo 1. Verify setup: psql "%DATABASE_URL%" -f scripts\VERIFY-SETUP.sql
    echo 2. Start development: npm run dev
    echo 3. Deploy to production: vercel --prod
    echo.
) else (
    echo.
    echo ============================================
    echo ERROR! Setup failed
    echo ============================================
    echo.
    echo Please check the error messages above
    echo.
)

pause
