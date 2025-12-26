@echo off
echo Starting FiveM Tools V7 with increased memory...
set NODE_OPTIONS=--max-old-space-size=4096
npx next dev
