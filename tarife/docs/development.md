# Entwicklung — Ökostrom Tarifcheck

## Voraussetzungen

- **Node.js** ≥ 18
- **Git**

## Projektordner

```
C:/Users/Martin/.pi/Projects/oekostrom-tarife/
```

Der zugehörige Deploy-Code liegt in `C:/Users/Martin/.pi/Projects/prismatisk/` —
das ist das Git-Repo das nach GitHub gepusht und von Netlify gebaut wird.

## Lokale Entwicklung

Die Tarife-Seite ist eine **Single-File HTML** (`tarife/index.html`) und braucht keinen Build.
Allerdings braucht sie die API (`/api/tarife`), die über Netlify Functions läuft.

### Option 1: Netlify Dev (empfohlen)

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk
npx netlify dev
# → http://localhost:8888/tarife/
# → API unter http://localhost:8888/api/tarife (Functions emuliert)
```

### Option 2: Lokaler Node-Server

```bash
cd C:/Users/Martin/.pi/Projects/oekostrom-tarife
node server.js
# → http://localhost:3000
# ⚠ server.js hat ggf. nicht die neuesten API-Features (persons, appliances)
```

## Änderungen deployen

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk

# 1. tarife/index.html oder netlify/functions/tarife.mjs bearbeiten
# 2. Committen und pushen
git add -A
git commit -m "Beschreibung der Änderung"
git push
# 3. Netlify baut automatisch und deployed
```

## Datei-Änderungen

| Datei | Build nötig? | Was passiert |
|-------|-------------|-------------|
| `tarife/index.html` | Nein (wird kopiert) | Sofort live nach Deploy |
| `netlify/functions/tarife.mjs` | Nein (esbuild bundled) | Neue Function nach Deploy |
| `netlify.toml` | — | Netlify liest bei Deploy |

## API testen

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

### Erwartete Ergebnisse

- Response hat `products` Array mit bis zu 15 Einträgen
- Jedes Produkt hat `arbeitspreisCtKwh`, `preisStabil`, `garantie`
- Bei `persons: 3` + `waermepumpe: true` → `verbrauch` = 7500 kWh (3500 + 4000)
- Sortierung: aufsteigend nach `arbeitspreisCtKwh`
