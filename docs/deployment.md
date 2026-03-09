# Deployment & Infrastruktur

## Übersicht

| Service | Detail |
|---------|--------|
| **Hosting** | Cloudflare Pages |
| **Pages URL** | `https://prismatisk.pages.dev` |
| **Domain** | `prismatisk.com` / `www.prismatisk.com` |
| **Repo** | [github.com/prismatisk/projects](https://github.com/prismatisk/projects) |
| **Branch** | `main` |
| **Build** | `bash build.sh` → Output in `deploy/` |
| **Account** | `Martin.oisterschek@gmail.com` |
| **Account ID** | `674aebc7901337b9b587f2f02f81cbaa` |

## Build-Prozess

`build.sh` wird manuell oder via CI ausgeführt:

```bash
bash build.sh
```

Output-Struktur:

```
deploy/
├── maxpilot/         ← maxpilot/dist/ (Vite output, base: '/maxpilot/')
├── maxpilot/pitch/   ← pitch/index.html (statisch)
├── tarife/           ← tarife/index.html (statisch)
├── cv/               ← cv/index.html + cv/martin.jfif
└── _redirects        ← Cloudflare Pages Redirects
```

## Cloudflare Pages Konfiguration

### Redirects (`_redirects`)

```
/tarife         /tarife/              301
/maxpilot       /maxpilot/            301
/maxpilot/pitch /maxpilot/pitch/      301
/cv             /cv/                  301
/maxpilot/*     /maxpilot/index.html  200
```

### Serverless Function

- **Pfad im Repo:** `functions/api/tarife.js`
- **URL:** `POST /api/tarife`
- **Runtime:** Cloudflare Workers (V8 isolates, kein Node.js)
- **Externe Calls:** E-Control API (`www.e-control.at`)

## DNS-Konfiguration

DNS wird über **Cloudflare** verwaltet (Nameserver: `martin.ns.cloudflare.com` + `mina.ns.cloudflare.com`).

| Host | Typ | Wert | Zweck |
|------|-----|------|-------|
| `@` | CNAME | `prismatisk.pages.dev` | Cloudflare Pages |
| `www` | CNAME | `prismatisk.pages.dev` | Cloudflare Pages |
| `@` | MX (10) | `mx.zoho.com` | Zoho Mail — nicht ändern |
| `@` | MX (20) | `mx2.zoho.com` | Zoho Mail — nicht ändern |
| `@` | MX (50) | `mx3.zoho.com` | Zoho Mail — nicht ändern |
| `@` | TXT | `v=spf1 include:zoho.com ~all` | Zoho SPF — nicht ändern |

## SSL

SSL-Zertifikat wird automatisch von Cloudflare provisioniert. Beide Domains **Active · SSL enabled** ✅

## E-Mail

E-Mail für `@prismatisk.com` läuft über **Zoho Mail** (MX-Records in Cloudflare DNS konfiguriert).

## Manuelles Deployment

```bash
cd "C:/Users/Martin/.pi/Projects/prismatisk"
bash build.sh
CLOUDFLARE_API_TOKEN="7mjFCYQI0YO5HFrbDK0Iv34wW9ec0OH0FxnTVjeW" \
CLOUDFLARE_ACCOUNT_ID="674aebc7901337b9b587f2f02f81cbaa" \
npx wrangler pages deploy deploy --project-name prismatisk --branch main
```

## Cloudflare Dashboards

| Was | URL |
|-----|-----|
| Pages Projekt | https://dash.cloudflare.com/674aebc7901337b9b587f2f02f81cbaa/pages/view/prismatisk |
| Custom Domains | https://dash.cloudflare.com/674aebc7901337b9b587f2f02f81cbaa/pages/view/prismatisk/domains |
| DNS | https://dash.cloudflare.com/674aebc7901337b9b587f2f02f81cbaa/prismatisk.com/dns/records |
