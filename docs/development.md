# Entwicklung & Lokales Setup

## Voraussetzungen

- **Node.js** ≥ 18 (für MAX Pilot Build und Netlify CLI)
- **Git** (Push auf `main` triggert Netlify-Deploy)

## Projektordner

Das Projekt liegt unter:

```
C:/Users/Martin/.pi/Projects/prismatisk/
```

Es gibt auch einen älteren Ordner `C:/Users/Martin/.pi/Projects/oekostrom-tarife/`
mit einem lokalen `server.js` (Node HTTP Server). Dieser ist **nicht** die Deploy-Quelle —
nur `prismatisk/` wird nach GitHub gepusht und von Netlify gebaut.

## Lokale Entwicklung

### Tarifcheck (`tarife/index.html`)

Die Tarife-Seite ist eine **Single-File HTML** und braucht keinen Build.
Allerdings braucht sie die API (`/api/tarife`), die nur über Netlify Functions läuft.

**Option 1: Netlify Dev (empfohlen)**

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk
npx netlify dev
# → http://localhost:8888/tarife/
# → API unter http://localhost:8888/api/tarife (Functions emuliert)
```

**Option 2: Alter lokaler Server**

```bash
cd C:/Users/Martin/.pi/Projects/oekostrom-tarife
node server.js
# → http://localhost:3000
# ⚠ server.js hat ggf. nicht die neuesten API-Features (persons, appliances)
```

### MAX Pilot (`maxpilot/`)

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk/maxpilot
npm install
npm run dev
# → http://localhost:5173/maxpilot/
```

Vite Config (`vite.config.js`) setzt `base: '/maxpilot/'` für korrektes Asset-Loading.

## Workflow: Änderungen deployen

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk

# 1. Änderungen machen
#    - tarife/index.html bearbeiten
#    - oder maxpilot/src/ bearbeiten
#    - oder netlify/functions/tarife.mjs bearbeiten

# 2. Committen und pushen
git add -A
git commit -m "Beschreibung der Änderung"
git push

# 3. Netlify baut automatisch und deployed
#    → Build-Log: https://app.netlify.com/sites/reliable-lolly-cb1111/deploys
```

## Datei-Änderungen und ihre Auswirkungen

| Datei | Build nötig? | Was passiert |
|-------|-------------|-------------|
| `tarife/index.html` | Nein (wird kopiert) | Sofort live nach Deploy |
| `netlify/functions/tarife.mjs` | Nein (esbuild bundled) | Neue Function nach Deploy |
| `maxpilot/src/**` | Ja (Vite Build) | `build.sh` baut `maxpilot/dist/` |
| `netlify.toml` | — | Netlify liest bei Deploy |
| `build.sh` | — | Netlify führt bei Deploy aus |

## Ordnerstruktur nach Build

```
deploy/                    ← Netlify publish directory
├── maxpilot/
│   ├── index.html         ← Vite-generiert
│   └── assets/            ← JS/CSS Bundles (gehashed)
└── tarife/
    └── index.html         ← 1:1 Kopie aus tarife/
```

## Testing

### API testen

```bash
# Einzelne PLZ
curl -X POST https://www.prismatisk.com/api/tarife \
  -H "Content-Type: application/json" \
  -d '{"zipCode":"1010","consumption":3500}'

# Mit Personen + Appliances
curl -X POST https://www.prismatisk.com/api/tarife \
  -H "Content-Type: application/json" \
  -d '{"zipCode":"8010","persons":3,"appliances":{"waermepumpe":true}}'

# Ganz Österreich
curl -X POST https://www.prismatisk.com/api/tarife \
  -H "Content-Type: application/json" \
  -d '{"gesamt":true,"consumption":4000}'
```

### Erwartete Ergebnisse prüfen

- Response hat `products` Array mit bis zu 15 Einträgen
- Jedes Produkt hat `arbeitspreisCtKwh`, `preisStabil`, `garantie`
- Bei `persons: 3` + `waermepumpe: true` → `verbrauch` sollte 7500 kWh sein (3500 + 4000)
- Sortierung: aufsteigend nach `arbeitspreisCtKwh`

## Browser-Automation

Für Tasks die Browser-Interaktion erfordern (Squarespace DNS, Netlify Dashboard):

```powershell
# Chrome mit Remote Debugging starten
powershell -ExecutionPolicy Bypass -File "C:\Users\Martin\start-chrome.ps1"
```

Siehe [STATUS.md](../STATUS.md) für Details.
