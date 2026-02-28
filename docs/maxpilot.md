# MAX Pilot

> URL: [prismatisk.com/maxpilot/](https://www.prismatisk.com/maxpilot/)  
> Quellcode: `maxpilot/src/`

## Beschreibung

Konzept-App für einen fiktiven Energieversorger „MAX". Zeigt, wie ein modernes
Kundenportal mit Energiemonitoring, Treueprogramm und ElWG-Features aussehen könnte.
Keine echten Daten — alle Werte sind Mockups.

**Tech-Stack:** React 19, Vite 7, Tailwind CSS 4, Recharts 3, Lucide Icons

## Screens

### 1. HomeScreen (`screens/HomeScreen.jsx`)

Dashboard mit Überblick.

| Element | Beschreibung |
|---------|-------------|
| Begrüßung | „Guten Morgen, Bernd 👋" mit Benachrichtigungs-Button und Avatar |
| Verbrauchskarte | Wochenverbrauch (84,9 kWh) als AreaChart, −8% vs. Vorwoche |
| Quick Stats | 2er-Grid: MAX+ Punkte (1.840) + Ökostrom (100% AT Wasserkraft) |
| Empfehlungskarte | CTA: Flextarif aktivieren (NEU AB OKTOBER 2026), navigiert zu ElWG |

### 2. EnergyScreen (`screens/EnergyScreen.jsx`)

Detaillierter Energieüberblick.

| Element | Beschreibung |
|---------|-------------|
| Jahresprognose | 4.280 kWh als BarChart (Aug–Feb), aktueller Monat orange |
| Herkunftsnachweis | Wasserkraft 68%, Wind 22%, Solar 10% mit Balken |
| Zertifikat-Download | Button (nicht funktional) |
| Spartipp | „Dienstag: 40% mehr Verbrauch" → Waschmaschine verschieben |

### 3. LoyaltyScreen (`screens/LoyaltyScreen.jsx`)

MAX+ Treueprogramm.

| Element | Beschreibung |
|---------|-------------|
| Status | Silber-Badge, 1.840 Punkte, Fortschrittsbalken zu Gold (2.000) |
| Punkte sammeln | 4 Wege: Vertragstreue (+50), Verbrauch gesenkt (+30), Freund werben (+200), Jahresrechnung (+100) |
| Partner | 2×2 Grid: Billa, A1, Uniqa, Starbucks mit Punkteumrechnung |
| CTA | Freunde werben & 200 Punkte sichern |

### 4. ElwgScreen (`screens/ElwgScreen.jsx`)

Neue Möglichkeiten durch das Elektrizitätswirtschaftsgesetz.

| Element | Beschreibung |
|---------|-------------|
| Timeline | In Kraft ab Oktober 2026, Countdown (~8 Monate) |
| Feature-Tabs | Flextarif / Energiegemeinschaft |
| **Flextarif** | Pflicht ab Okt 2026, stündliche Marktpreise, Sparpotenzial ~€68/Jahr |
| Simulation | Normaltarif €48,20 → Flextarif €39,40 (−18%) |
| Opt-in Toggle | Vormerken mit animiertem Slider |
| **Energiegemeinschaft** | Strom mit Nachbarn teilen, ~€120/Jahr, Kartenplatzhalter |

### 5. CheckScreen (`screens/CheckScreen.jsx`)

3-Schritt Tarif-Check Wizard.

| Schritt | Inhalt |
|---------|--------|
| 1. Vertrag | Aktuelle Vertragsdaten (MAXstrom Komfort, 29,8 ct/kWh) |
| 2. Verbrauch | Smart Meter Profil (4.280 kWh, abendlastig, Di-Peak) |
| 3. Ergebnis | Empfehlung Flextarif-Wechsel |
| ✓ Done | Alles-gut-Screen mit 4 Checkmarks |

## Navigation

`components/BottomNav.jsx` — Fixed Bottom Tab Bar mit 5 Tabs:

| Tab | Icon | Screen |
|-----|------|--------|
| Start | Home | `home` |
| Energie | Zap | `energy` |
| MAX+ | Gift | `loyalty` |
| Neu 2026 | Leaf | `elwg` |
| Check | CheckCircle | `check` |

## Design-System

Siehe [design.md](./design.md) für Details. Kurzfassung:

- **Font:** Montserrat (400–800)
- **Farben:** Orange `#ec6726`, Grün `#a8d3af`, Gelb `#f1ea75`, Schwarz `#1d1d1b`, Grau `#f1efe8`
- **Radius:** 26px (Cards), 16px (Buttons), 12px (Icons)
- **Layout:** Mobile-first, max-width 390px, cards with rounded corners
- **Animationen:** slideUp (staggered), fadeIn, fillBar

## Routing

Einfaches State-basiertes Routing in `App.jsx`:

```jsx
const [screen, setScreen] = useState('home')
// Screen-Wechsel über setScreen('energy') etc.
// Kein React Router — einfacher useState + switch/case
```

Jeder Screen bekommt `onNavigate` als Prop für Kreuz-Navigation (z.B. Home → ElWG).
