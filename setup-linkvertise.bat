@echo off
echo ========================================
echo   Linkvertise Setup for FiveM Tools V7
echo ========================================
echo.

REM Check if .env.local exists
if not exist .env.local (
    echo ERROR: .env.local not found!
    echo Please copy .env.example to .env.local and configure it first.
    pause
    exit /b 1
)

echo [1/3] Running database setup...
psql %DATABASE_URL% -f scripts/LINKVERTISE-SETUP.sql
if %errorlevel% neq 0 (
    echo ERROR: Database setup failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Verifying tables...
psql %DATABASE_URL% -c "SELECT table_name FROM information_schema.tables WHERE table_name = 'linkvertise_downloads';"

echo.
echo [3/3] Setup complete!
echo.
echo Next steps:
echo 1. Get your Linkvertise credentials from https://publisher.linkvertise.com/
echo 2. Add LINKVERTISE_AUTH_TOKEN to .env.local
echo 3. Configure settings at /admin/linkvertise
echo 4. Read LINKVERTISE_GUIDE.md for full documentation
echo.
pause
