# Entwicklung — Ökostrom Tarifcheck

## Voraussetzungen

- **Node.js** ≥ 18
- **Git**

## Projektordner

```
C:/Users/Martin/.pi/Projects/prismatisk/
```

## Lokale Entwicklung

Die Tarife-Seite ist eine **Single-File HTML** (`tarife/index.html`) und braucht keinen Build.
Allerdings braucht sie die API (`/api/tarife`), die als Cloudflare Pages Function läuft.

### Mit Wrangler (empfohlen)

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk
npx wrangler pages dev deploy --compatibility-flag=nodejs_compat
# → http://localhost:8788/tarife/
# → API unter http://localhost:8788/api/tarife (Function emuliert)
```

### Nur statisches HTML (ohne API)

Einfach `tarife/index.html` im Browser öffnen — API-Calls schlagen fehl, UI ist testbar.

## Änderungen deployen

```bash
cd C:/Users/Martin/.pi/Projects/prismatisk

# 1. tarife/index.html oder functions/api/tarife.js bearbeiten
# 2. Builden und deployen
bash build.sh
CLOUDFLARE_API_TOKEN="7mjFCYQI0YO5HFrbDK0Iv34wW9ec0OH0FxnTVjeW" \
CLOUDFLARE_ACCOUNT_ID="674aebc7901337b9b587f2f02f81cbaa" \
npx wrangler pages deploy deploy --project-name prismatisk --branch main
```

## Datei-Änderungen

| Datei | Build nötig? | Was passiert |
|-------|-------------|-------------|
| `tarife/index.html` | Nein (wird kopiert) | Sofort live nach Deploy |
| `functions/api/tarife.js` | Nein | Neue Function nach Deploy |
| `_redirects` | Nein (wird kopiert) | Redirects aktiv nach Deploy |

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
