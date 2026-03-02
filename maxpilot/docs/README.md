# MAX Pilot — Dokumentation

> Live: [prismatisk.com/maxpilot/](https://www.prismatisk.com/maxpilot/)  
> Pitch: [prismatisk.com/maxpilot/pitch/](https://www.prismatisk.com/maxpilot/pitch/)  
> Stand: 28. Februar 2026

Konzept-App für MAXENERGY — Kundenportal mit Energiemonitoring,
Treueprogramm (MAX+) und ElWG-Features.

## Dokumente

- [Screens & Features](./maxpilot.md)
- [Design-System](./design.md)
- [Entwicklung & Lokales Setup](./development.md)
- [Vollständige Dokumentation (Strategie, Business Case, Gesprächsstrategie)](../documentation.md)
- [Strategieplan (Taktik, Pricing, Nächste Schritte)](../plan.md)

## Präsentations-Assets (`assets/`)

- **[Pitch-Präsentation](../assets/presentation.html)** — Vollständige Präsentationswebsite (Journey + Benchmark + ElWG + Prototyp), live unter [prismatisk.com/maxpilot/pitch/](https://www.prismatisk.com/maxpilot/pitch/)
- [Customer Journey Map / Leaky Bucket](../assets/customer-journey-map.html) — Standalone Dark-Theme HTML
- [Benchmark-Analyse: Octopus Energy & Tibber](../assets/benchmark-analyse.md) — Feature-Vergleich (Quelldaten)
- [ElWG-Pflichtfeatures & Timeline](../assets/elwg-pflichtfeatures.md) — 9 Pflicht-Features bis Oktober 2026 (Quelldaten)

## Live-URLs

| Seite | URL |
|-------|-----|
| MAX Pilot Prototyp | [prismatisk.com/maxpilot/](https://www.prismatisk.com/maxpilot/) |
| Pitch-Präsentation | [prismatisk.com/maxpilot/pitch/](https://www.prismatisk.com/maxpilot/pitch/) |
| Ökostrom Tarifcheck | [prismatisk.com/tarife/](https://www.prismatisk.com/tarife/) |

## Verwandte Projekte

- **Ökostrom Tarifcheck** → `C:/Users/Martin/.pi/Projects/oekostrom-tarife/docs/`
- **Deployment & Infrastruktur** → `C:/Users/Martin/.pi/Projects/prismatisk/docs/`

## Repo-Struktur (GitHub)

```
github.com/prismatisk/projects
├── maxpilot/          # MAX Pilot React App (Vite)
├── pitch/             # Pitch-Präsentation (statisches HTML)
│   └── index.html     # → prismatisk.com/maxpilot/pitch/
├── tarife/            # Ökostrom Tarifcheck
├── netlify/functions/ # Serverless Functions
├── build.sh           # Build-Script
└── netlify.toml       # Redirects & Config
```

## Status & Nächste Schritte

### Erledigt ✅
- [x] MAX Pilot Prototyp (5 Screens, React, live auf prismatisk.com/maxpilot/)
- [x] Ökostrom Tarifcheck refactored (Tier 1+2, Preisgarantie-Check, live auf prismatisk.com/tarife/)
- [x] Customer Journey Map / Leaky Bucket Analyse erstellt
- [x] Benchmark Octopus Energy + Tibber
- [x] ElWG-Pflichtfeatures vollständig dokumentiert
- [x] Vollständige Projektdokumentation (3 Projekte, Design, Deployment)
- [x] **Pitch-Präsentation** gebaut und deployed (Journey + Benchmark + ElWG + Prototyp, animiertes Prisma-Visual, Fullscreen-Particles, CEO-ready)

### Offen — Vor dem Gespräch mit Bernd
- [ ] **LTV/Churn-Kalkulation** als eigenes Slide aufbereiten (Zahlen stehen in Journey Map)
- [ ] **Bernd Neider kontaktieren** — persönliche Nachricht (Anlass: Geburt André Schäffner), ElWG anteasen, 45-Min-Termin
- [ ] **ÖGK-Vertrag** auf Nebentätigkeitsklausel prüfen
- [ ] **AMS** Gründungsbeihilfe anfragen

### Im Gespräch erfragen
- [ ] Neukundenvolumen/Woche bei MAXENERGY
- [ ] Stand ElWG-Planung intern
- [ ] Smart Meter Datenzugang aktuell
- [ ] Raiffeisenbank/Flughafenprojekt Kooperationsstruktur

### Nach dem Gespräch
- [ ] Feedback in Prototyp einarbeiten
- [ ] Angebot Phase 0+1 schreiben (~15.000–22.000 €)
- [ ] Prismatisk e.U. reaktivieren
