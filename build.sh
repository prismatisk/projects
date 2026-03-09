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
mkdir -p deploy/maxpilot/pitch
mkdir -p deploy/tarife
mkdir -p deploy/cv

# MAX Pilot (Vite output mit base: '/maxpilot/')
cp -r maxpilot/dist/. deploy/maxpilot/

# MAX Pilot Pitch (statisches HTML)
cp pitch/index.html deploy/maxpilot/pitch/

# Ökostrom Tarife (statisches HTML)
cp tarife/index.html deploy/tarife/

# CV / Persönliche Präsentation
cp cv/index.html deploy/cv/
cp cv/martin.jfif deploy/cv/

# Cloudflare Pages Redirects
cp _redirects deploy/

echo "✅ Done."
echo "  deploy/maxpilot/       → prismatisk.com/maxpilot/"
echo "  deploy/maxpilot/pitch/ → prismatisk.com/maxpilot/pitch/"
echo "  deploy/tarife/         → prismatisk.com/tarife/"
echo "  deploy/cv/             → prismatisk.com/cv/"
