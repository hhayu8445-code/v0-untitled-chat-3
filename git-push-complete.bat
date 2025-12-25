@echo off
chcp 65001 >nul
echo ========================================
echo   FiveM Tools V7 - Git Push
echo ========================================
echo.

echo [1/4] Adding all files...
git add .

echo.
echo [2/4] Creating commit...
git commit -m "FiveM Tools V7 - Complete Update" -m "NEW: Seasonal system, 3D effects, Linkvertise anti-bypass" -m "TECH: 438 files, 80+ APIs, 21+ tables" -m "STATUS: Production Ready"

echo.
echo [3/4] Checking remote...
git remote -v

echo.
echo [4/4] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   Done!
echo ========================================
echo.
pause
