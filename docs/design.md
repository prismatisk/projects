# Design-System & Styleguide

Das Projekt verwendet zwei unterschiedliche Design-Systeme für die beiden Apps.

---

## Tarifcheck Design (Editorial)

Die Tarife-Seite folgt einem **nordisch-editorialen Stil** mit starker Typografie und warmen Tönen.

### Typografie

| Verwendung | Font | Gewichte |
|------------|------|----------|
| **Display / Headlines** | [Fraunces](https://fonts.google.com/specimen/Fraunces) (Serif) | 300, 500, 700, 900 |
| **Body / UI** | [Sora](https://fonts.google.com/specimen/Sora) (Sans-Serif) | 300–800 |

- Fraunces wird für Zahlen (Rang, Preis, Count) und die Hauptüberschrift eingesetzt
- Sora für Labels, Tags, Buttons und Fließtext
- Font-Feature: `font-variant-numeric: tabular-nums` für Preisanzeigen

### Farben

```css
--orange:         #ec6726    /* Primärfarbe, CTAs, Akzente */
--orange-light:   #fdf0e8    /* Hintergrund aktiver Elemente */
--green:          #a8d3af    /* Ökostrom, positive Badges */
--green-dark:     #2d7d4f    /* Preisgarantie-Text */
--yellow:         #f1ea75    /* Akzent (MAX+) */
--red:            #f39b8c    /* Warnungen, instabile Preise */
--blue:           #d6eceb    /* Info-Hintergründe */
--black:          #1d1d1b    /* Primärtext, Buttons */
--cream:          #f9f7f2    /* Body-Hintergrund */
--warm-grey:      #f1efe8    /* Karten-Hintergrund, Borders */
--mid-grey:       #b8b5ad    /* Sekundärtext, Deaktiviert */
--text-secondary: #8a8780    /* Labels, Hints */
```

### Layout

- **Max-Width:** 720px (zentriert)
- **Card-Radius:** 20px
- **Button-Radius:** 12px
- **Input-Radius:** 12px
- **Spacing:** 1.5rem Container-Padding, 8px Card-Gap

### Visuelle Effekte

| Effekt | Beschreibung |
|--------|-------------|
| **Grain Overlay** | Subtiles SVG-Noise-Muster über gesamte Seite (`opacity: 0.025`) |
| **Hero Glow** | Radial-Gradient (orange, 15% Opacity) im Dark Hero |
| **Card Hover** | `translateY(-2px)` + verstärkter Shadow |
| **Card Enter** | Staggered `slideUp` Animation mit `animation-delay` |
| **Focus States** | Orange Border + Orange-Glow Box-Shadow |
| **Tier 2 Expand** | `max-height` Transition mit Opacity-Fade |
| **Badge Pulse** | Grüner Dot im Hero-Badge pulsiert (scale + opacity) |

### Komponenten

**Mode Toggle:** Segmented Control (kWh / Personen) mit aktiver Pill  
**Person Selector:** 5 quadratische Buttons, aktiv = orange Border + orange Text  
**Appliance Cards:** 2×2 Grid, Checkbox-Indicator oben rechts, grüner Rand wenn aktiv  
**Stability Badge:** Inline-Flex mit farbigem Dot (grün = stabil, rot = variabel)  
**Tarif Card:** Grid-Layout (Rang | Info | Preis), Top-3 mit farbiger linker Border

---

## MAX Pilot Design (App-Style)

Die MAX Pilot App folgt einem **mobilen App-Stil** mit runden Cards und kräftigen Farben.

### Typografie

| Verwendung | Font | Gewichte |
|------------|------|----------|
| **Alles** | [Montserrat](https://fonts.google.com/specimen/Montserrat) | 400–800 |
| **Sekundär** | [Bitter](https://fonts.google.com/specimen/Bitter) (Serif) | 400–600 |

### Farben

Identische Farbpalette wie Tarifcheck (s.o.), plus:

```css
--color-grey-dark: #dbdad7    /* Dunkleres Grau für Borders */
```

### Layout

- **Max-Width:** 390px (iPhone-Viewport)
- **Card-Radius:** 26px
- **Bottom Nav:** Fixed, 5 Tabs, `env(safe-area-inset-bottom)`
- **Padding-Bottom:** 80px (Platz für Bottom Nav)

### Animationen (index.css)

```css
/* Staggered card entrance */
.card-1 { animation: slideUp 0.28s 0.00s ease both; }
.card-2 { animation: slideUp 0.28s 0.06s ease both; }
.card-3 { animation: slideUp 0.28s 0.12s ease both; }
.card-4 { animation: slideUp 0.28s 0.18s ease both; }

/* Screen transitions */
.screen-enter { animation: slideUp 0.28s ease both; }
```

### Inline Styles

MAX Pilot verwendet **keine CSS-Klassen** für Komponenten — alles ist in JSX inline styled.
Das ist Absicht (Prototyp-Charakter), aber bei Weiterentwicklung sollte auf Tailwind-Klassen
oder CSS Modules umgestellt werden.

---

## Gemeinsame Markenelemente

| Element | Wert |
|---------|------|
| Primärfarbe | `#ec6726` (Orange) |
| Dunkel-Thema | `#1d1d1b` (Fast-Schwarz) |
| Warmer Hintergrund | `#f1efe8` / `#f9f7f2` |
| Grün (Öko) | `#a8d3af` |
| Radius-Philosophie | Großzügig gerundet (12–26px) |
| Gewicht Headlines | Extra Bold (800–900) |
