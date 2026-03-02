# MAX Pilot – Vollständige Dokumentation

> Erstellt: Februar 2026  
> Autor: Martin Oisterschek / Prismatisk e.U.  
> Status: Prototyp fertig, Gespräch mit maxenergy ausstehend

---

## Inhaltsverzeichnis

1. [Kontext & Ausgangslage](#1-kontext--ausgangslage)
2. [Strategische Entscheidung](#2-strategische-entscheidung)
3. [Produktvision](#3-produktvision)
4. [Design System](#4-design-system)
5. [Screens & Features](#5-screens--features)
6. [Technische Implementierung](#6-technische-implementierung)
7. [Gesprächsstrategie maxenergy](#7-gesprächsstrategie-maxenergy)
8. [Business Case](#8-business-case)
9. [Nächste Schritte](#9-nächste-schritte)

---

## 1. Kontext & Ausgangslage

### Wer

**Martin Oisterschek** – 20+ Jahre Erfahrung in digitaler Transformation, UX/UI-Strategie, Business Development und Innovation. Zuletzt VP Business Development & Innovation bei backbone.one (2021–2026) mit direktem Fokus auf Energie- und Technologiekunden in Österreich, Deutschland und den USA.

**Prismatisk e.U.** – Martins stillgelegte Einzelunternehmung (Graz), gegründet 2018. Spezialisierung auf digitale Innovation, Strategie, Workshops und Beratung. Soll als Vehikel für die Freelance-Beratung reaktiviert werden.

### Situation

- Seit Jänner 2026 arbeitslos
- Vater von 2 kleinen Kindern
- Finanzieller Runway bis ca. April 2026
- Vorliegendes Angebot: IT Organisator bei ÖGK, 6.200 € brutto, 40h, 50% Home Office, Start 1. April
- Offene Verhandlung: Country Manager Österreich bei maxenergy (noch keine Rückmeldung)

### Die Entscheidung

ÖGK-Job annehmen als finanzielle Brücke (Runway reicht nicht für Prismatisk-Kaltstart), gleichzeitig Prismatisk parallel aufbauen. Die Country Manager Verhandlung mit maxenergy weiterführen. MAX Pilot dient als Proof of Value für beides.

Detaillierter Entscheidungskontext → siehe `Projects/MAX Pilot/plan.md`

---

## 2. Strategische Entscheidung

### maxenergy als Primärziel

maxenergy ist der logische erste Kunde für Prismatisk:

- **120.000 Kunden** in Österreich (stärker als Deutschland)
- **Langjährige Beziehung** durch backbone.one-Partnerschaft
- **Direkter Kontakt zum GF**: Bernd Neider hat Freelance-Zusammenarbeit bereits angeboten
- **Konkreter Pain Point**: Customer Retention – Kunden wechseln nach 12 Monaten für Wechselboni
- **Externer Druck**: ElWG tritt Oktober 2026 in Kraft mit gesetzlichen Pflichtfeatures

### Zwei parallele Verhandlungsstränge

| Strang | Status |
|---|---|
| Country Manager AT (Anstellung) | Wartend auf Rückmeldung von Bernd Neider |
| Freelance Erstprojekt (Prismatisk) | Demo/Prototyp bereit, Gespräch noch nicht geführt |

**Kernregel**: Freelance nicht als Alternative zur CM-Rolle framen, sondern als Brücke und Proof of Value.

### Taktischer Gesprächseinstieg

Anlass für Kontaktaufnahme: Geburt beim 2. GF André Schäffner (COO) → persönliche Gratulation + ElWG-Idee als Appetithappen einwerfen.

---

## 3. Produktvision

### Name: MAX Pilot

Begleitkonzept zur Transformation der maxenergy-Kundenbeziehung von **transaktional** (einmal/Jahr Tarif buchen) zu **kontinuierlich** (regelmäßiger Mehrwert, täglicher Touchpoint).

### Das Problem

1. Kunden wechseln nach 12 Monaten zu günstigeren Anbietern mit Wechselbonus
2. Das ElWG (Oktober 2026) macht den Wechsel sogar noch einfacher (24h-Wechsel statt 14 Tage)
3. maxenergy hat kein Retention-Instrument jenseits des Preises

### Die Antwort: Drei Schichten

```
┌─────────────────────────────────────┐
│         LOYALTY LAYER               │  Punkte sammeln, Partner-Vorteile
├─────────────────────────────────────┤
│         SMART ENERGY LAYER          │  Verbrauch, Tipps, dynamische Tarife
├─────────────────────────────────────┤
│         ElWG READINESS LAYER        │  Flextarife, GEA, Prosumer, Datenzugang
└─────────────────────────────────────┘
```

### Das ElWG als strategischer Hebel

Ab Oktober 2026 sind folgende Features **gesetzlich verpflichtend**:

| Feature | Pflicht | UX-Relevanz |
|---|---|---|
| Flextarife (dynamische Tarife) | ✅ | Opt-in Flow, Simulation, Verständlichkeit |
| Preistransparenz | ✅ | Komplexe Preisinfos lesbar machen |
| Herkunftsnachweis | ✅ | Ökostrom-Zertifikate sichtbar machen |
| Smart Meter Datenzugang | ✅ | Einheitliche Datenzugangsstelle |
| Lieferantenwechsel in 24h | ✅ | Retention noch kritischer |
| Gemeinschaftliche Erzeugungsanlagen | Optional | GEA-Onboarding, Karte |
| Prosumer-Features | Optional | PV-Besitzer, Einspeisung |

**Kernargument für Bernd**: maxenergy MUSS diese Features bis Oktober bauen – die Frage ist nur ob als Compliance-Checkbox oder als Retention-Hebel. Der Unterschied liegt in der UX.

---

## 4. Design System

Vollständig extrahiert aus dem Live-CSS von `maxenergy.at`.

### Farben

| Variable | Hex | Verwendung |
|---|---|---|
| `--main-color-black` | `#1d1d1b` | Text, Headlines, dunkle Karten |
| `--main-color-white` | `#ffffff` | Cards, Hintergründe |
| `--sub-color-orange` | `#ec6726` | **Primäre Brandfarbe** – CTAs, Highlights |
| `--sub-color-green` | `#a8d3af` | Erfolg, Öko, positive Werte |
| `--sub-color-yellow` | `#f1ea75` | Badges, Loyalty, Aufmerksamkeit |
| `--sub-color-red` | `#f39b8c` | Fehler, Alerts |
| `--sub-color-blue` | `#d6eceb` | Info, ElWG-Themen |
| `--sub-color-grey` | `#f1efe8` | App-Hintergrund, Sekundärflächen |

### Typografie

- **Montserrat** – Headlines, UI-Elemente, CTAs (Google Fonts)
- **Bitter** – Fließtext, redaktionelle Inhalte (Google Fonts)

### Design-Charakteristik

- Border-Radius: **26px** durchgehend (sehr rund, fast pill-förmig)
- Dunkle Karten: `linear-gradient(145deg, #2a2a28, #1d1d1b)` für Tiefe
- Schatten: subtil (`0 2px 8px rgba(0,0,0,0.08)`)
- Hover-States: 30% Transparenz der Basisfarbe
- Animationen: `cubic-bezier(0.22, 1, 0.36, 1)` für alle Transitions (weich, natürlich)

---

## 5. Screens & Features

### Screen 1 – Home Dashboard

**Ziel**: Persönliche Begrüßung + sofortiger Überblick  
**Kernelemente**:
- Greeting mit Name ("Guten Morgen, Bernd 👋")
- Verbrauchskarte (dunkel) mit Wochenchart (orange Linie) + Jahresprognose
- Quick Stats: MAX+ Punkte (gelb) + Ökostrom 100% (blau)
- Aktions-Karte: Flextarif-Hinweis mit Oktober 2026 Badge (orange)

**Demo-Botschaft**: "Du hast alles auf einen Blick – und wir zeigen dir aktiv Möglichkeiten."

---

### Screen 2 – Energie

**Ziel**: Verbrauchsanalyse + Herkunftsnachweis  
**Kernelemente**:
- Jahresprognose 4.280 kWh (−120 kWh vs. Vorjahr, ~€ 38 gespart)
- Monatliches Balkendiagramm (aktueller Monat orange hervorgehoben)
- Herkunftsnachweis: Wasserkraft 68%, Wind 22%, Solar 10% mit Fortschrittsbalken
- "100% Österreich" Badge
- PDF-Zertifikat Download Button
- MAX PILOT TIPP: KI-gestützte Empfehlung basierend auf Verbrauchsmuster

**Demo-Botschaft**: "Dein Strom ist nachweislich grün – und wir helfen dir, noch weniger zu verbrauchen."

---

### Screen 3 – MAX+

**Ziel**: Loyalty-Programm als Retention-Anker  
**Kernelemente**:
- Punkte-Karte (dunkel): 1.840 Punkte, Progress Silber → Gold (noch 160 Pkt.)
- "So sammelst du Punkte": Vertragstreue (+50/Monat), Verbrauch gesenkt (+30), Freund werben (+200), Jahresrechnung (+100)
- Partner-Kacheln: Billa, A1, Uniqa, Starbucks (in Brand-Farben)
- CTA: "Freunde werben & 200 Punkte sichern"

**Demo-Botschaft**: "Dein Loyalty-Guthaben übersteigt nach 2 Jahren jeden einmaligen Wechselbonus."

---

### Screen 4 – Neu 2026 (ElWG)

**Ziel**: ElWG-Pflichtfeatures als Chance darstellen + Opt-in ermöglichen  
**Kernelemente**:
- Countdown-Banner: "In Kraft ab Oktober 2026 · Noch ~8 Monate" (orange)
- Tab-Switch: Flextarif / Energiegemeinschaft
- **Flextarif**: Erklärung + Simulation letzter Monat (€ 48,20 → € 39,40, −18%)
- Toggle "Jetzt vormerken" – animiert, orange bei Aktivierung
- **Energiegemeinschaft (GEA)**: Karte + "3 Gemeinschaften in 2 km" + Beitreten-Button

**Demo-Botschaft**: "Das müsst ihr bis Oktober bauen – so macht man es richtig."

---

### Screen 5 – Tarif-Check

**Ziel**: OCBF-Konzept als Retention-Tool (nicht Akquise) – "Bist du noch optimal aufgestellt?"  
**Kernelemente**:
- 3-Step-Wizard: Vertrag → Verbrauch → Ergebnis
- Vertrag: automatisch ausgelesen (MAXstrom Komfort, €7,50 + 29,8 ct/kWh)
- Verbrauch: Smart Meter basiert (4.280 kWh, abendlastig, Peak Di 18–21 Uhr)
- Ergebnis-Button: wird auf Step 3 orange + Glow-Effekt
- Resultat: "Alles gut ✓" oder Empfehlung zum Flextarif-Wechsel

**Demo-Botschaft**: "Wir kümmern uns proaktiv um dich – du musst nichts selbst prüfen."

---

## 6. Technische Implementierung

### Stack

| Technologie | Version | Zweck |
|---|---|---|
| React | 18 | UI Framework |
| Vite | 6 | Build Tool, Dev Server (Port 3000) |
| Tailwind CSS | v4 (@tailwindcss/vite) | Utility-first Styling |
| Recharts | latest | Charts (AreaChart, BarChart) |
| Lucide React | latest | Icons |
| Google Fonts | – | Montserrat + Bitter |

### Projektstruktur

```
.pi/Projects/
├── MAX Pilot/
│   ├── plan.md                  # Strategieplan
│   ├── documentation.md         # Dieses Dokument
│   └── maxpilot/                # React App
│       ├── dev.cjs              # Server-Script (start/stop/status/log)
│       ├── src/
│       │   ├── App.jsx          # Root + Screen Router + key-basiertes Re-mounting
│       │   ├── index.css        # Global Styles, CSS Variablen, Animationen
│       │   ├── components/
│       │   │   └── BottomNav.jsx # 5-Tab Navigation (fest, 80px bottom padding)
│       │   └── screens/
│       │       ├── HomeScreen.jsx   # Dashboard
│       │       ├── EnergyScreen.jsx # Energie + Herkunft
│       │       ├── LoyaltyScreen.jsx # MAX+ Loyalty
│       │       ├── ElwgScreen.jsx   # ElWG Features + Toggle
│       │       └── CheckScreen.jsx  # 3-Step Tarif-Check Wizard
│       ├── vite.config.js       # Port 3000, base: /maxpilot/
│       └── package.json
└── oekostrom-tarife/            # Separates Projekt (Ökostrom Tarifvergleich)
```

### Animationen

```css
/* Screen-Transition beim Tab-Wechsel */
.screen-enter {
  animation: slideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Gestaffelte Card-Animationen */
.card-1 { animation-delay: 0.00s; }
.card-2 { animation-delay: 0.06s; }
.card-3 { animation-delay: 0.12s; }
.card-4 { animation-delay: 0.18s; }
```

Screen-Transition funktioniert durch `key={screen}` auf jeder Screen-Komponente – React mountet neu und triggert die CSS-Animation automatisch.

### Dev Server starten

```bash
cd "C:/Users/Martin/.pi/Projects/MAX Pilot/maxpilot"
node dev.cjs start    # starten (detached, kein Blocking)
node dev.cjs stop     # stoppen
node dev.cjs status   # PID + URL prüfen
node dev.cjs log      # Vite-Logs anzeigen
```

Aufrufbar unter: `http://localhost:3000/maxpilot/`

### GitHub Repository

`https://github.com/badlogic/oekostrom-tarife`  
Branch: `main`  
Commit: `97a54d0` – "Add MAX Pilot prototype – maxenergy Companion App"

### Geplantes Deployment

Domain: `prismatisk.com/maxpilot` (nach Bernd-Gespräch, als Demo-Link)  
Hosting: Netlify (bereits im Repo konfiguriert für das Hauptprojekt)

---

## 7. Gesprächsstrategie maxenergy

### Reihenfolge im ersten Gespräch

1. **CM-Status erfragen** – Interesse an Country Manager Rolle bekräftigen, kein Druck
2. **Überleitung**: "Ich wollte die Wartezeit nicht ungenutzt lassen..."
3. **Problem benennen lassen** – Bernd soll Retention + ElWG-Druck selbst aussprechen
4. **Audit zeigen** (10 Min.): Customer Journey Map, LTV-Kalkulation, ElWG-Deadline
5. **Prototyp zeigen** (15 Min.): MAX Pilot auf dem Handy – live, klickbar
6. **Positionierung**: "Das ist die Art von Arbeit die ich als CM bei euch machen würde"
7. **Nächsten Schritt vorschlagen**: Kleines Discovery-Paket (Phase 0)

### Positionierung von Prismatisk

Nicht als Ersatz des internen UX/UI-Teams (hat maxenergy bereits), sondern als:
- Externer strategischer Sparringspartner
- ElWG-UX-Spezialist (neue Expertise, die intern noch fehlt)
- AI-augmented Rapid Prototyper ("ich zeige in 3 Tagen was euer Team 3 Wochen braucht")
- Jemand der das Business bereits kennt (keine Einarbeitungszeit)

### Angebotspakete

| Phase | Leistung | Preis |
|---|---|---|
| Phase 0 – Discovery | UX Audit + Journey Map + ElWG-Gap-Analyse | 5.000–8.000 € |
| Phase 1 – Prototyp | Klickbarer Companion-Prototyp + Konzept | 12.000–18.000 € |
| Phase 0+1 Bundle | Einstiegspaket (empfohlen) | 15.000–22.000 € |
| Phase 2 – Begleitung | UX-Konzeption ElWG-Features (mit internem Team) | 20.000–35.000 € |
| Retainer | Strategischer UX-Sparring + Konzept-Sprints | 3.000–5.000 €/Monat |

---

## 8. Business Case

### Für maxenergy

- Annahme: 15% Churn/Jahr bei 120.000 Kunden = 18.000 verlorene Kunden
- Churn-Reduktion um 5 Prozentpunkte = 6.000 gehaltene Kunden/Jahr
- Bei ~€ 800 Jahresumsatz/Kunde = **€ 4,8 Mio. gesicherter Jahresumsatz**
- ElWG-Implementierung ist ohnehin Pflicht → Investition fällt so oder so an
- Mit MAX Pilot: Pflicht-UX wird zum Retention-Hebel → doppelter ROI auf dieselbe Investition

### Für Prismatisk

- Ziel Jahr 1: 2 Aufträge (maxenergy + 1 weiterer EVU)
- Minimalziel: Phase 0+1 bei maxenergy = ~€ 20.000
- Retainer ab Monat 4: €4.000/Monat = €48.000/Jahr recurring
- Bei ÖGK-Job parallel: kein Existenzdruck, Prismatisk wächst organisch

---

## 9. Nächste Schritte

### Sofort
- [ ] Bernd Neider: Persönliche Nachricht (Anlass: Geburt André Schäffner) + ElWG-Idee anteasen
- [ ] AMS: Gründungsbeihilfe anfragen
- [ ] ÖGK Vertrag auf Nebentätigkeitsklausel prüfen

### Vor dem Gespräch mit Bernd
- [ ] Customer Journey Map fertigstellen (Visualisierung "leaky bucket")
- [ ] LTV/Churn-Kalkulation für die Präsentation aufbereiten
- [ ] ElWG-Pflichtfeatures vollständig dokumentieren
- [ ] Benchmark: Octopus Energy App + Tibber App analysieren
- [ ] MAX Pilot auf prismatisk.com deployen (Demo-Link für das Gespräch)

### Nach dem Gespräch
- [ ] Feedback in Prototyp einarbeiten
- [ ] Angebot Phase 0+1 schreiben
- [ ] Prismatisk e.U. reaktivieren (nach positivem Signal)

---

## Anhang: Referenzen

- **Octopus Energy (UK)**: `octopus.energy` – Retention durch Community + Gamification
- **Tibber (AT/DE/NO)**: `tibber.com` – Dynamische Tarife, starke App-UX, direkter Wettbewerber
- **E-Control Österreich**: `e-control.at` – ElWG-Leitfäden, Regulierung
- **ElWG Text**: `ris.bka.gv.at` – Bundesgesetzblatt, Inkrafttreten Oktober 2026
- **maxenergy Website**: `maxenergy.at`
- **GitHub Repo**: `github.com/badlogic/oekostrom-tarife`
- **Strategieplan**: `Projects/MAX Pilot/plan.md`
