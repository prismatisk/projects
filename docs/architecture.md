# Architektur & Projektstruktur

## Repository-Struktur

```
prismatisk/
├── docs/                          # Projektdokumentation
│   ├── README.md                  # Übersicht (dieses Dokument verlinkt)
│   ├── architecture.md            # Architektur (dieses Dokument)
│   ├── tarifcheck.md              # Tarifcheck Feature-Dokumentation
│   ├── maxpilot.md                # MAX Pilot App-Dokumentation
│   ├── deployment.md              # Deployment & Infrastruktur
│   ├── design.md                  # Design-System & Styleguide
│   └── development.md             # Lokales Setup & Entwicklung
│
├── tarife/
│   └── index.html                 # Ökostrom Tarifcheck (Single-File HTML/CSS/JS)
│
├── maxpilot/                      # MAX Pilot React App
│   ├── src/
│   │   ├── App.jsx                # Root-Komponente mit Screen-Router
│   │   ├── main.jsx               # React-Einstiegspunkt
│   │   ├── index.css              # Globale Styles + Tailwind + Animationen
│   │   ├── components/
│   │   │   └── BottomNav.jsx      # Tab-Navigation (5 Tabs)
│   │   └── screens/
│   │       ├── HomeScreen.jsx     # Dashboard mit Verbrauchschart
│   │       ├── EnergyScreen.jsx   # Energieübersicht + Herkunftsnachweis
│   │       ├── LoyaltyScreen.jsx  # MAX+ Treueprogramm
│   │       ├── ElwgScreen.jsx     # ElWG-Features (Flextarif, GEA)
│   │       └── CheckScreen.jsx    # Tarif-Check Wizard
│   ├── vite.config.js             # Vite Config (base: '/maxpilot/')
│   └── package.json               # Dependencies: React 19, Recharts, Tailwind 4
│
├── netlify/
│   └── functions/
│       └── tarife.mjs             # Serverless API: /api/tarife
│
├── build.sh                       # Build-Script für Netlify CI
├── netlify.toml                   # Netlify-Konfiguration (Build, Redirects)
├── STATUS.md                      # Deployment-Status & offene Punkte
└── .gitignore
```

## Architektur-Diagramm

```
┌─────────────────────────────────────────────────┐
│                  prismatisk.com                  │
├───────────────────┬─────────────────────────────┤
│                   │                             │
│  /tarife/         │  /maxpilot/                 │
│  Static HTML      │  React SPA (Vite)           │
│  (Single File)    │  Tailwind + Recharts        │
│                   │                             │
├───────────────────┴─────────────────────────────┤
│                                                 │
│  /api/tarife (POST)                             │
│  Netlify Function (tarife.mjs)                  │
│  └─→ E-Control Tarifkalkulator API             │
│       www.e-control.at/o/rc-public-rest/        │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Netlify CDN                                    │
│  DNS: Squarespace → Netlify Load Balancer       │
│  SSL: Let's Encrypt (auto-provisioned)          │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Technologie-Stack

| Schicht | Technologie | Version |
|---------|-------------|---------|
| **Tarifcheck Frontend** | Vanilla HTML/CSS/JS | Single-File, kein Build |
| **MAX Pilot Frontend** | React + Vite | React 19, Vite 7 |
| **Styling (MAX Pilot)** | Tailwind CSS | v4 |
| **Charts** | Recharts | v3 |
| **Icons** | Lucide React | v0.575 |
| **Serverless API** | Netlify Functions | ESM (`.mjs`) |
| **Externe Daten** | E-Control REST API | Tarifkalkulator v2 |
| **Hosting** | Netlify | CDN + Functions |
| **DNS** | Squarespace | Custom NS |
| **Domain** | prismatisk.com | Squarespace Registrar |

## Datenfluss: Tarifcheck

```
Browser                    Netlify Function           E-Control API
  │                            │                          │
  │  POST /api/tarife          │                          │
  │  { zipCode, persons,       │                          │
  │    appliances, gesamt }    │                          │
  │ ──────────────────────────>│                          │
  │                            │  GET grid-operators      │
  │                            │ ────────────────────────>│
  │                            │  ← gridOperatorId        │
  │                            │                          │
  │                            │  POST rate (consumption) │
  │                            │ ────────────────────────>│
  │                            │  ← ratedProducts[]       │
  │                            │                          │
  │                            │  Filter: 100% Ökostrom   │
  │                            │  Sort: Arbeitspreis ↑    │
  │                            │  Enrich: preisStabil     │
  │  ← { products, verbrauch, │                          │
  │       netzbetreiber }      │                          │
  │ <──────────────────────────│                          │
  │                            │                          │
  │  Render Tarif-Karten       │                          │
```
