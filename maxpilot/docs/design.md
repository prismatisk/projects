# Design-System — MAX Pilot

Die MAX Pilot App folgt einem **mobilen App-Stil** mit runden Cards und kräftigen Farben.
Das Design-System ist vollständig aus dem Live-CSS von `maxenergy.at` extrahiert.

## Typografie

| Verwendung | Font | Gewichte |
|------------|------|----------|
| **Headlines, UI** | [Montserrat](https://fonts.google.com/specimen/Montserrat) | 400–800 |
| **Fließtext** | [Bitter](https://fonts.google.com/specimen/Bitter) (Serif) | 400–600 |

## Farben

```css
--color-black:     #1d1d1b    /* Text, Headlines, dunkle Karten */
--color-white:     #ffffff    /* Cards, Hintergründe */
--color-orange:    #ec6726    /* Primäre Brandfarbe – CTAs, Highlights */
--color-green:     #a8d3af    /* Erfolg, Öko, positive Werte */
--color-yellow:    #f1ea75    /* Badges, Loyalty, Aufmerksamkeit */
--color-red:       #f39b8c    /* Fehler, Alerts */
--color-blue:      #d6eceb    /* Info, ElWG-Themen */
--color-grey:      #f1efe8    /* App-Hintergrund, Sekundärflächen */
--color-grey-dark: #dbdad7    /* Dunkleres Grau für Borders */
```

## Layout

- **Max-Width:** 390px (iPhone-Viewport)
- **Card-Radius:** 26px (sehr rund, fast pill-förmig)
- **Button-Radius:** 16px
- **Icon-Container-Radius:** 12px
- **Bottom Nav:** Fixed, 5 Tabs, `env(safe-area-inset-bottom)`
- **Padding-Bottom:** 80px (Platz für Bottom Nav)

## Design-Charakteristik

- Dunkle Karten: `linear-gradient(145deg, #2a2a28, #1d1d1b)` für Tiefe
- Schatten: subtil (`0 2px 8px rgba(0,0,0,0.08)`)
- Hover-States: 30% Transparenz der Basisfarbe
- Animationen: `cubic-bezier(0.22, 1, 0.36, 1)` für alle Transitions (weich, natürlich)

## Animationen (index.css)

```css
/* Screen-Transition beim Tab-Wechsel */
.screen-enter {
  animation: slideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Gestaffelte Card-Animationen */
.card-1 { animation: slideUp 0.28s 0.00s ease both; }
.card-2 { animation: slideUp 0.28s 0.06s ease both; }
.card-3 { animation: slideUp 0.28s 0.12s ease both; }
.card-4 { animation: slideUp 0.28s 0.18s ease both; }
```

Screen-Transition funktioniert durch `key={screen}` auf jeder Screen-Komponente —
React mountet neu und triggert die CSS-Animation automatisch.

## Inline Styles

MAX Pilot verwendet **keine CSS-Klassen** für Komponenten — alles ist in JSX inline styled.
Das ist Absicht (Prototyp-Charakter), aber bei Weiterentwicklung sollte auf Tailwind-Klassen
oder CSS Modules umgestellt werden.

## Gemeinsame Markenelemente (prismatisk)

| Element | Wert |
|---------|------|
| Primärfarbe | `#ec6726` (Orange) |
| Dunkel-Thema | `#1d1d1b` (Fast-Schwarz) |
| Warmer Hintergrund | `#f1efe8` / `#f9f7f2` |
| Grün (Öko) | `#a8d3af` |
| Radius-Philosophie | Großzügig gerundet (12–26px) |
| Gewicht Headlines | Extra Bold (800–900) |
