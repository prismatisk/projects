# Deployment & Infrastruktur

## Übersicht

| Service | Detail |
|---------|--------|
| **Hosting** | Netlify (CDN + Serverless Functions) |
| **Site** | `reliable-lolly-cb1111.netlify.app` |
| **Site-ID** | `ee019919-6ca6-4a01-8a59-bb332385fef4` |
| **Domain** | `prismatisk.com` / `www.prismatisk.com` |
| **Repo** | [github.com/prismatisk/projects](https://github.com/prismatisk/projects) |
| **Branch** | `main` (auto-deploy bei Push) |
| **Build** | `bash build.sh` → Output in `deploy/` |

## Build-Prozess

`build.sh` wird von Netlify bei jedem Push auf `main` ausgeführt:

```bash
# 1. MAX Pilot bauen (Vite)
cd maxpilot && npm ci && npm run build && cd ..

# 2. Deploy-Verzeichnis zusammenstellen
deploy/
├── maxpilot/    ← maxpilot/dist/ (Vite output, base: '/maxpilot/')
└── tarife/
    └── index.html  ← tarife/index.html (statisch, kein Build)
```

## Netlify-Konfiguration

`netlify.toml`:

```toml
[build]
  command = "bash build.sh"
  publish = "deploy"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

# Trailing-Slash Redirects
[[redirects]]
  from = "/tarife"
  to = "/tarife/"
  status = 301

[[redirects]]
  from = "/maxpilot"
  to = "/maxpilot/"
  status = 301

# MAX Pilot SPA Routing
[[redirects]]
  from = "/maxpilot/*"
  to = "/maxpilot/index.html"
  status = 200
```

### Serverless Functions

- **Pfad:** `netlify/functions/tarife.mjs`
- **URL:** `POST /api/tarife`
- **Runtime:** Node.js (ESM), gebündelt mit esbuild
- **Externe Calls:** E-Control API (`www.e-control.at`)

## DNS-Konfiguration

DNS wird über **Squarespace** verwaltet (Custom Nameservers: ns01–03.squarespacedns.com).

| Host | Typ | Wert | Zweck |
|------|-----|------|-------|
| `@` | A | `75.2.60.5` | Netlify Apex Domain |
| `www` | CNAME | `reliable-lolly-cb1111.netlify.app` | Netlify www |
| `@` | MX (10) | `mx.zoho.com` | Zoho Mail |
| `@` | MX (20) | `mx2.zoho.com` | Zoho Mail |
| `@` | MX (50) | `mx3.zoho.com` | Zoho Mail |
| `@` | TXT | `v=spf1 include:zoho.com ~all` | Zoho SPF |

## SSL

SSL-Zertifikat wird automatisch von Netlify via Let's Encrypt provisioniert.

**Bekanntes Problem:** Falls `prismatisk.com` noch als Custom Domain im Netlify-Account
`badlogic` (Mario Zechner) registriert ist, kann Netlify kein SSL-Cert ausstellen.
→ Domain muss dort entfernt werden (siehe `prismatisk/STATUS.md`).

## E-Mail

E-Mail für `@prismatisk.com` läuft über **Zoho Mail** (MX-Records in DNS konfiguriert).

## Manuelles Deployment

Falls nötig (ohne Git Push):

```bash
# Netlify CLI
cd prismatisk
npx netlify deploy --prod --dir=deploy --site=ee019919-6ca6-4a01-8a59-bb332385fef4

# Oder mit Auth Token
NETLIFY_AUTH_TOKEN=nfp_ieG3iqNnHU3yd4jj1j37CEUeQCxg7Cr1d540 \
  npx netlify deploy --prod --dir=deploy
```

## Zugänge

| Service | Zugang |
|---------|--------|
| Netlify | Auth Token in STATUS.md |
| GitHub | Org `prismatisk`, Repo `projects` |
| Squarespace | martin.oisterschek@gmail.com |
| Zoho Mail | Über Squarespace DNS |
