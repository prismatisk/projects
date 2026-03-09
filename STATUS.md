# Prismatisk Deployment – Status & Offene Punkte

> Zuletzt aktualisiert: 9. März 2026 (Session 2)  
> Session: DNS-Umstellung + Go-Live auf Cloudflare Pages

---

## Aktueller Stand (nach Session 9. März 2026)

### ✅ Erledigt

| Was | Detail |
|---|---|
| GitHub Repo | `github.com/prismatisk/projects` (Org: prismatisk) |
| Build Pipeline | `build.sh` → baut maxpilot, kopiert tarife → `deploy/` |
| **DNS: Squarespace → Cloudflare** | ✅ Nameserver auf `martin.ns.cloudflare.com` + `mina.ns.cloudflare.com` umgestellt |
| **Cloudflare Account** | ✅ `Martin.oisterschek@gmail.com` · Account-ID: `674aebc7901337b9b587f2f02f81cbaa` |
| **prismatisk.com in Cloudflare** | ✅ Domain aktiv, Free Plan, DNS vollständig importiert |
| **Cloudflare Pages Projekt** | ✅ Projekt `prismatisk` angelegt · deployed unter `https://prismatisk.pages.dev` |
| **Erster Deploy** | ✅ `deploy/` Ordner hochgeladen, live unter `https://24fd552d.prismatisk.pages.dev` |
| **Custom Domains verknüpft** | ✅ `prismatisk.com` + `www.prismatisk.com` — **Active, SSL enabled** 🟢 |
| **DNS auf Cloudflare Pages** | ✅ A-Record + www-CNAME → `prismatisk.pages.dev` umgestellt |
| **Go-Live** | ✅ `prismatisk.com` läuft live auf Cloudflare Pages (9. März 2026) |
| **Cloudflare GitHub App** | ✅ Auf prismatisk Org installiert (`github.com/prismatisk`) |
| **API Token** | ✅ erstellt: `7mjFCYQI0YO5HFrbDK0Iv34wW9ec0OH0FxnTVjeW` (Cloudflare Workers/Pages Edit) |
| Zoho Mail MX-Records | ✅ erhalten in Cloudflare DNS, Mail funktioniert weiter |

---

## ✅ DNS-Records umgestellt (9. März 2026, Session 2)

| Record | Vorher | Jetzt |
|---|---|---|
| `prismatisk.com` | A → `75.2.60.5` (Netlify) | CNAME → `prismatisk.pages.dev` ✅ |
| `www.prismatisk.com` | CNAME → `reliable-lolly-cb1111.netlify.app` | CNAME → `prismatisk.pages.dev` ✅ |

Beide Domains: **Active · SSL enabled** 🟢

---

## ⚠️ Offen: Netlify Function → Cloudflare Function migrieren

Die `/api/tarife` Endpoint (E-Control API Proxy) lief bisher als Netlify Function:

```
netlify/functions/tarife.mjs
```

**Muss migriert werden zu Cloudflare Pages Function:**
```
functions/api/tarife.js   (oder functions/tarife.js)
```

Cloudflare Pages Functions liegen im `functions/` Ordner im Repo-Root.
Syntax ist ähnlich zu Netlify Functions, aber leicht anders:

```js
// Cloudflare Pages Function (functions/api/tarife.js)
export async function onRequest(context) {
  // context.request statt event.body
  const response = await fetch('https://api.e-control.at/...');
  return new Response(await response.text(), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

→ Nach Migration: `build.sh` und `netlify.toml` entsprechend anpassen (kein `netlify/` Ordner mehr nötig)

---

## ⚠️ Offen: GitHub Auto-Deploy einrichten

Aktuell deployed Wrangler CLI manuell. Für automatisches Deployment bei git push:
- Im Cloudflare Pages Dashboard: `prismatisk` Projekt → Settings → Builds & Deployments → Git-Verbindung herstellen
- GitHub App ist bereits auf prismatisk Org installiert ✅
- Problem war bisher: Cloudflare Pages UI erkennt GitHub-Verbindung nicht im Browser → CLI-Workaround verwendet

**Alternative:** Deploy bleibt manuell via:
```bash
cd "C:/Users/Martin/.pi/projects/prismatisk"
CLOUDFLARE_API_TOKEN="7mjFCYQI0YO5HFrbDK0Iv34wW9ec0OH0FxnTVjeW" \
CLOUDFLARE_ACCOUNT_ID="674aebc7901337b9b587f2f02f81cbaa" \
npx wrangler pages deploy deploy --project-name prismatisk --branch main
```

---

## Credentials & Zugänge

| Service | Detail |
|---|---|
| **Cloudflare Account** | `Martin.oisterschek@gmail.com` |
| **Cloudflare Account ID** | `674aebc7901337b9b587f2f02f81cbaa` |
| **Cloudflare API Token** | `7mjFCYQI0YO5HFrbDK0Iv34wW9ec0OH0FxnTVjeW` (Workers/Pages Edit) |
| **Cloudflare Pages URL** | `https://prismatisk.pages.dev` |
| **Cloudflare Pages Dashboard** | `https://dash.cloudflare.com/674aebc7901337b9b587f2f02f81cbaa/pages/view/prismatisk` |
| **Cloudflare DNS Dashboard** | `https://dash.cloudflare.com/674aebc7901337b9b587f2f02f81cbaa/prismatisk.com/dns/records` |
| **GitHub Repo** | `github.com/prismatisk/projects` |
| **Netlify (alt, abzulösen)** | Site: `reliable-lolly-cb1111.netlify.app` · ID: `ee019919-6ca6-4a01-8a59-bb332385fef4` · Token: `nfp_ieG3iqNnHU3yd4jj1j37CEUeQCxg7Cr1d540` |
| **Zoho Mail** | MX-Records in Cloudflare DNS aktiv, nicht anfassen |

---

## Aktueller DNS-Stand in Cloudflare

| Host | Type | Content | Zweck |
|---|---|---|---|
| `@` | CNAME | `prismatisk.pages.dev` | Cloudflare Pages ✅ |
| `www` | CNAME | `prismatisk.pages.dev` | Cloudflare Pages ✅ |
| `_domainconnect` | CNAME | `_domainconnect...` | intern |
| `@` | MX (10/20/50) | `mx/mx2/mx3.zoho.com` | Zoho Mail — nicht anfassen |
| `@` | TXT | `v=spf1 include:zoho.com ~all` | Zoho SPF — nicht anfassen |
| NS | — | `martin.ns.cloudflare.com` | Cloudflare NS |
| NS | — | `mina.ns.cloudflare.com` | Cloudflare NS |

---

## Repo-Struktur

```
github.com/prismatisk/projects
├── maxpilot/              # MAX Pilot React App (Vite + Tailwind + Recharts)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── components/BottomNav.jsx
│   │   └── screens/
│   │       ├── HomeScreen.jsx
│   │       ├── EnergyScreen.jsx
│   │       ├── LoyaltyScreen.jsx
│   │       ├── ElwgScreen.jsx
│   │       └── CheckScreen.jsx
│   ├── vite.config.js     # base: '/maxpilot/'
│   └── package.json
├── pitch/
│   └── index.html         # Pitch-Präsentation (statisch) → /maxpilot/pitch/
├── tarife/
│   └── index.html         # Ökostrom Tarife statische App
├── netlify/
│   └── functions/
│       └── tarife.mjs     # ⚠️ Netlify Function → muss zu Cloudflare Function migriert werden
├── functions/             # ← Hier Cloudflare Pages Functions anlegen (noch nicht vorhanden)
│   └── api/
│       └── tarife.js      # ← Ziel nach Migration
├── build.sh               # Build-Script (funktioniert unverändert für Cloudflare)
├── netlify.toml           # ⚠️ Nach Migration durch wrangler.toml ersetzen oder entfernen
└── STATUS.md              # Dieses Dokument
```

## Deploy-Befehl (manuell)

```bash
cd "C:/Users/Martin/.pi/projects/prismatisk"
bash build.sh   # baut deploy/ Ordner
CLOUDFLARE_API_TOKEN="7mjFCYQI0YO5HFrbDK0Iv34wW9ec0OH0FxnTVjeW" \
CLOUDFLARE_ACCOUNT_ID="674aebc7901337b9b587f2f02f81cbaa" \
npx wrangler pages deploy deploy --project-name prismatisk --branch main
```

---

## Nächste Schritte (Priorität)

| Priorität | Aufgabe | Details |
|---|---|---|
| ✅ ~~1~~ | ~~DNS-Records umstellen~~ | Erledigt 9. März 2026 |
| ✅ ~~2~~ | ~~„Check DNS records" klicken~~ | Erledigt, beide Domains Active + SSL |
| ✅ ~~3~~ | ~~Netlify Function migrieren~~ | `functions/api/tarife.js` live, alle Routen 200 ✅ |
| ✅ ~~3b~~ | ~~CV Pitchdeck deployen~~ | `prismatisk.com/cv/` live ✅ |
| 🟡 4 | **Auto-Deploy via GitHub** | GitHub-Verbindung in Cloudflare Pages Dashboard herstellen |
| 🟢 5 | **Netlify Site kündigen/löschen** | Kann jetzt abgeschaltet werden |
| 🟢 6 | **Squarespace kündigen** | DNS ist weg, kein Bedarf mehr |

---

## Session-Log

### Session: 27. Februar 2026
- Erstes Deployment auf Netlify eingerichtet
- Build-Pipeline mit `build.sh` aufgebaut
- DNS via Squarespace auf Netlify gezeigt
- SSL-Problem: prismatisk.com im badlogic Netlify-Account blockiert

### Session: 9. März 2026 (Teil 1)
- **Squarespace Nameserver → Cloudflare** umgestellt ✅
- **Cloudflare Account** neu angelegt (GitHub OAuth) ✅
- **prismatisk.com** in Cloudflare (Free Plan) eingerichtet ✅
- **Cloudflare Pages** Projekt `prismatisk` erstellt ✅
- **Erstes Deployment** via Wrangler CLI erfolgreich ✅
- **Custom Domains** prismatisk.com + www verknüpft ✅

### Session: 9. März 2026 (Teil 2)
- **DNS-Records umgestellt:** A `75.2.60.5` → CNAME `prismatisk.pages.dev`, www-CNAME auf `prismatisk.pages.dev` ✅
- **Custom Domains verifiziert:** beide Active + SSL enabled ✅
- **prismatisk.com ist live auf Cloudflare Pages** 🟢
- **Netlify Function migriert:** `functions/api/tarife.js` als Cloudflare Pages Function ✅
- **CV Pitchdeck deployed:** `prismatisk.com/cv/` live ✅
- **netlify.toml gelöscht**, `_redirects` ersetzt alle Weiterleitungen ✅
- Alle Routen live und getestet: `/cv/`, `/tarife/`, `/maxpilot/`, `/maxpilot/pitch/`, `/api/tarife` ✅
