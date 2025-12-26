@echo off
echo Initializing Git repository for FiveM Tools V7...

REM Initialize git repository
git init

REM Add all files to staging
git add .

REM Initial commit
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

REM Instructions for the user
echo.
echo Git repository initialized and files committed!
echo Now you can:
echo 1. Create a repository on GitHub
echo 2. Add the remote origin: git remote add origin https://github.com/username/repository-name.git
echo 3. Push to GitHub: git push -u origin main
echo.
pause