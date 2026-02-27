#!/bin/bash
set -e

echo "🔨 Building MAX Pilot..."
cd maxpilot
npm ci
npm run build
cd ..

echo "📦 Assembling deploy directory..."
rm -rf deploy
mkdir -p deploy/maxpilot
mkdir -p deploy/tarife

# MAX Pilot (Vite output mit base: '/maxpilot/')
cp -r maxpilot/dist/. deploy/maxpilot/

# Ökostrom Tarife (statisches HTML)
cp tarife/index.html deploy/tarife/

echo "✅ Done."
echo "  deploy/maxpilot/ → prismatisk.com/maxpilot/"
echo "  deploy/tarife/   → prismatisk.com/tarife/"
