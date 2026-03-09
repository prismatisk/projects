# Architektur & Projektstruktur

## Repository-Struktur

```
prismatisk/
├── docs/
│   ├── README.md
│   ├── architecture.md        # dieses Dokument
│   ├── deployment.md          # Cloudflare, DNS, Build
│
├── tarife/
│   └── index.html             # Ökostrom Tarifcheck (Single-File HTML/CSS/JS)
│
├── maxpilot/                  # MAX Pilot React App
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── components/
│   │   │   └── BottomNav.jsx
│   │   └── screens/
│   │       ├── HomeScreen.jsx
│   │       ├── EnergyScreen.jsx
│   │       ├── LoyaltyScreen.jsx
│   │       ├── ElwgScreen.jsx
│   │       └── CheckScreen.jsx
│   ├── vite.config.js         # base: '/maxpilot/'
│   └── package.json
│
├── pitch/
│   └── index.html             # MAX Pilot Pitch-Präsentation (statisch)
│
├── cv/
│   ├── index.html             # Persönliche Präsentation / Pitchdeck
│   └── martin.jfif            # Profilfoto
│
├── functions/
│   └── api/
│       └── tarife.js          # Cloudflare Pages Function: POST /api/tarife
│
├── _redirects                 # Cloudflare Pages Redirects
├── build.sh                   # Build-Script → deploy/
└── STATUS.md
```

## Architektur-Diagramm

```
┌─────────────────────────────────────────────────────┐
│                   prismatisk.com                     │
├──────────────┬──────────────┬───────────────────────┤
│              │              │                       │
│  /tarife/    │  /maxpilot/  │  /cv/                 │
│  Static HTML │  React SPA   │  Static HTML          │
│              │  (Vite)      │  (Persönl. Pitchdeck) │
│              │              │                       │
│              │  /maxpilot/pitch/                    │
│              │  Static HTML (MAX Pitch)             │
│              │                                      │
├──────────────┴──────────────┴───────────────────────┤
│                                                     │
│  /api/tarife (POST)                                 │
│  Cloudflare Pages Function (functions/api/tarife.js)│
│  └─→ E-Control Tarifkalkulator API                 │
│       www.e-control.at/o/rc-public-rest/            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Cloudflare Pages CDN                               │
│  DNS: Cloudflare (CNAME → prismatisk.pages.dev)     │
│  SSL: Cloudflare (automatisch)                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Technologie-Stack

| Schicht | Technologie | Version |
|---------|-------------|---------|
| **Tarifcheck Frontend** | Vanilla HTML/CSS/JS | Single-File, kein Build |
| **MAX Pilot Frontend** | React + Vite | React 19, Vite 7 |
| **Styling (MAX Pilot)** | Tailwind CSS | v4 |
| **Charts** | Recharts | v3 |
| **Icons** | Lucide React | v0.575 |
| **CV / Pitchdeck** | Vanilla HTML + Reveal.js | Single-File, kein Build |
| **Serverless API** | Cloudflare Pages Functions | ESM, V8 isolates |
| **Externe Daten** | E-Control REST API | Tarifkalkulator v2 |
| **Hosting** | Cloudflare Pages | CDN + Functions |
| **DNS** | Cloudflare | CNAME Flattening |
| **Domain** | prismatisk.com | Squarespace Registrar |
