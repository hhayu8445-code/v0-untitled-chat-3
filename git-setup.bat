@echo off
echo Setting up Git repository for FiveM Tools V7...

REM Initialize git repository if not already done
if not exist .git (
  git init
  if %errorlevel% neq 0 (
    echo Failed to initialize Git repository
    pause
    exit /b %errorlevel%
  )
)

REM Configure Git (replace with your actual name and email)
git config user.name "Your Name"
git config user.email "your.email@example.com"

REM Add all files to staging
git add .

REM Create initial commit
git commit -m "feat: Initial commit of FiveM Tools V7 with modern pink design

- Complete implementation of modern pink-themed UI
- All features connected to Supabase database
- Scripts, MLOs, vehicles, and clothing marketplace
- Forum system with categories and replies
- Coins system with daily rewards
- Spin wheel with prizes and history
- Admin panel for management
- Responsive design with glassmorphism and neon effects
- Authentication via Discord OAuth
- Modern animations and visual effects"

echo.
echo Initial commit completed successfully!
echo.
echo To push to GitHub:
echo 1. Create a repository on GitHub
echo 2. Add the remote origin:
echo    git remote add origin https://github.com/username/repository-name.git
echo 3. Push to GitHub:
echo    git push -u origin main
echo.
pause