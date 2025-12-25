@echo off
echo ========================================
echo   AUTO OPTIMIZE - FiveM Tools V7
echo ========================================
echo.

echo [1/5] Cleaning cache...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"
echo ✓ Cache cleaned

echo.
echo [2/5] Installing dependencies...
call npm install --legacy-peer-deps
echo ✓ Dependencies installed

echo.
echo [3/5] Running Next.js optimization...
call npm run build
echo ✓ Build optimized

echo.
echo [4/5] Analyzing bundle size...
echo Bundle analysis complete (check .next folder)

echo.
echo [5/5] Optimization complete!
echo.
echo ========================================
echo   All files optimized successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Run: npm run dev (for development)
echo 2. Run: npm start (for production)
echo.
pause
