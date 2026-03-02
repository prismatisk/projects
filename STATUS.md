# Prismatisk Deployment – Status & Offene Punkte

> Zuletzt aktualisiert: 27. Februar 2026  
> Session: prismatisk.com Setup & Deployment

---

## Aktueller Stand

### ✅ Erledigt

| Was | Detail |
|---|---|
| GitHub Repo | `github.com/prismatisk/projects` (Org: prismatisk) |
| Netlify Site | `reliable-lolly-cb1111.netlify.app` (Site-ID: `ee019919-6ca6-4a01-8a59-bb332385fef4`) |
| Build Pipeline | `build.sh` → baut maxpilot, kopiert tarife → `deploy/` |
| MAX Pilot | ✅ live unter `www.prismatisk.com/maxpilot/` |
| Pitch-Präsentation | ✅ live unter `www.prismatisk.com/maxpilot/pitch/` |
| Ökostrom Tarife | ✅ live unter `www.prismatisk.com/tarife/` |
| DNS A-Record | `prismatisk.com` → `75.2.60.5` (Netlify load balancer) |
| DNS CNAME | `www.prismatisk.com` → `reliable-lolly-cb1111.netlify.app` |
| Zoho Mail | MX-Records erhalten, E-Mail funktioniert weiter |

### ❌ Offen: SSL für prismatisk.com

**Problem:**  
`prismatisk.com` (apex domain) ist als Custom Domain in einem **anderen Netlify-Account** (`badlogic` / Mario Zechner, Repo: `oekostrom-tarife`) registriert. Netlify routet deshalb HTTP/HTTPS-Anfragen für `prismatisk.com` zum falschen Account → Squarespace antwortet statt unserem Site.

**Symptom:**  
- `curl http://prismatisk.com` → `Server: Squarespace` (falsch)  
- `www.prismatisk.com/maxpilot/` → 200 OK, aber SSL-Cert ist `*.netlify.app` (Browser-Warnung)  
- Netlify kann kein Let's Encrypt Cert ausstellen, weil der HTTP-01 Challenge zum badlogic-Account geroutet wird

**Lösung (1 Schritt):**  
**Mario Zechner (badlogic) muss `prismatisk.com` aus seinem Netlify-Account entfernen.**  
→ app.netlify.com → oekostrom-tarife Site → Domain Management → `prismatisk.com` entfernen  
→ Danach provisioniert Netlify SSL automatisch innerhalb von Minuten

**Was dann noch zu tun ist (automatisch durch Netlify):**  
- SSL-Cert wird ausgestellt  
- `prismatisk.com` → HTTPS mit grünem Schloss  
- Netlify API: `POST /api/v1/sites/ee019919-6ca6-4a01-8a59-bb332385fef4/ssl` zum Anstoßen falls nötig

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
│       └── tarife.mjs     # Netlify Function für /api/tarife (E-Control API)
├── build.sh               # Build-Script für Netlify
├── netlify.toml           # Build + Redirect-Regeln
└── STATUS.md              # Dieses Dokument
```

## netlify.toml Kurzreferenz

```toml
[build]
  command = "bash build.sh"
  publish = "deploy"

[[redirects]]
  from = "/maxpilot/*"
  to = "/maxpilot/index.html"
  status = 200          # SPA routing
```

---

## Credentials & Zugänge

| Service | Detail |
|---|---|
| Netlify Auth Token | `nfp_ieG3iqNnHU3yd4jj1j37CEUeQCxg7Cr1d540` |
| Netlify Site ID | `ee019919-6ca6-4a01-8a59-bb332385fef4` |
| GitHub Repo | `github.com/prismatisk/projects` |
| Domain Registrar | Squarespace (login: martin.oisterschek@gmail.com) |
| DNS | Squarespace Nameservers (ns01–03.squarespacedns.com als custom NS gesetzt) |
| Zoho Mail | MX-Records in Squarespace DNS aktiv |

---

## DNS-Einträge (Squarespace Custom Records)

| Host | Type | Data | Zweck |
|---|---|---|---|
| `@` | A | `75.2.60.5` | Netlify apex |
| `www` | CNAME | `reliable-lolly-cb1111.netlify.app` | Netlify www |
| `@` | MX (10) | `mx.zoho.com` | Zoho Mail |
| `@` | MX (20) | `mx2.zoho.com` | Zoho Mail |
| `@` | MX (50) | `mx3.zoho.com` | Zoho Mail |
| `@` | TXT | `v=spf1 include:zoho.com ~all` | Zoho SPF |

**Hinweis Nameserver-Setup:**  
Squarespace zeigt "You're using custom nameservers" weil ns01–03.squarespacedns.com als custom NS eingetragen sind (war nötig um alte NS1/Netlify-DNS-Einträge vom badlogic-Account zu entfernen). Funktioniert identisch zu Squarespace-Standard-NS.

---

## Browser-Automation Setup

Für zukünftige Browser-Tasks (Squarespace, Netlify etc.):

```powershell
# Chrome mit Remote Debugging starten (frisches Profil, kein Datenverlust)
powershell -ExecutionPolicy Bypass -File "C:\Users\Martin\start-chrome.ps1"
```

Die `start-chrome.ps1` liegt unter:
`C:\Users\Martin\.pi\agent\sessions\2026-02-27-prismatisk-deploy\start-chrome.ps1`

**Hinweis:** Browser-Automation über Puppeteer hängt auf Squarespace/Netlify. CDP direkt (WebSocket) funktioniert. Skill-Script: `C:\Users\Martin\.pi\agent\skills\browser-tools\cdp-eval.mjs`

---

## Nächste Schritte (Priorität)

1. **[ ] Mario kontaktieren** – `prismatisk.com` aus badlogic Netlify-Account entfernen lassen  
   → Danach: SSL automatisch, beide URLs mit grünem Schloss  

2. **[ ] Nach SSL-Fix testen:**
   ```bash
   curl -skL -o /dev/null -w "%{http_code}" https://prismatisk.com/maxpilot/
   # Erwartet: 200
   ```

3. **[ ] Lokale Entwicklung** (MAX Pilot weiterentwickeln):
   ```bash
   cd "C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot"
   node dev.cjs start    # http://localhost:3000/maxpilot/
   ```
   Nach Änderungen: in `C:/Users/Martin/.pi/Projects/prismatisk/maxpilot/` spiegeln + push

5. **[ ] Überlegung**: Lokalen Entwicklungsordner aufräumen – aktuell gibt es zwei maxpilot-Instanzen:
   - `C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot/` (dev, mit dev.cjs)
   - `C:/Users/Martin/.pi/Projects/prismatisk/maxpilot/` (deploy-Quelle)
   → Idealerweise zusammenlegen oder symlinken

---

## Session-Archiv

Screenshots und Scripts dieser Session:  
`C:/Users/Martin/.pi/agent/sessions/2026-02-27-prismatisk-deploy/`
