@echo off
echo ============================================
echo Auto Setup Supabase Database
echo ============================================
echo.

node auto-setup-supabase.js

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
