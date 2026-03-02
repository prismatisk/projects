# Entwicklung — MAX Pilot

## Voraussetzungen

- **Node.js** ≥ 18
- **Git**

## Projektordner

```
C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot/
```

Der Deploy-Code wird nach `C:/Users/Martin/.pi/Projects/prismatisk/maxpilot/` gespiegelt
und von dort nach GitHub gepusht → Netlify Build.

## Lokale Entwicklung

### Dev Server starten

```bash
cd "C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot"
node dev.cjs start    # starten (detached, kein Blocking)
node dev.cjs stop     # stoppen
node dev.cjs status   # PID + URL prüfen
node dev.cjs log      # Vite-Logs anzeigen
```

Oder direkt:

```bash
cd "C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot"
npm install
npm run dev
# → http://localhost:5173/maxpilot/
```

Vite Config (`vite.config.js`) setzt `base: '/maxpilot/'` für korrektes Asset-Loading.

## Änderungen deployen

```bash
# 1. Änderungen in MAX Pilot/maxpilot/src/ machen

# 2. Nach prismatisk spiegeln
cp -r "C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot/src" \
      "C:/Users/Martin/.pi/Projects/prismatisk/maxpilot/src"

# 3. Committen und pushen
cd C:/Users/Martin/.pi/Projects/prismatisk
git add -A
git commit -m "Beschreibung der Änderung"
git push

# 4. Netlify baut automatisch (npm ci + vite build)
```

## Tech-Stack

| Technologie | Version | Zweck |
|-------------|---------|-------|
| React | 19 | UI Framework |
| Vite | 7 | Build Tool, Dev Server |
| Tailwind CSS | v4 | Utility-first Styling |
| Recharts | v3 | Charts (AreaChart, BarChart) |
| Lucide React | v0.575 | Icons |
| Google Fonts | — | Montserrat + Bitter |

## Datei-Änderungen

| Datei | Build nötig? | Was passiert |
|-------|-------------|-------------|
| `maxpilot/src/**` | Ja (Vite Build) | `build.sh` baut `maxpilot/dist/` |
| `maxpilot/vite.config.js` | — | Vite liest bei Build |
| `maxpilot/package.json` | — | `npm ci` bei Build |
