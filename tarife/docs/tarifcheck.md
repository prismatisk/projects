# Ökostrom Tarifcheck

> URL: [prismatisk.com/tarife/](https://www.prismatisk.com/tarife/)  
> Quellcode: `tarife/index.html` (Frontend) + `netlify/functions/tarife.mjs` (API)

## Beschreibung

Vergleicht die günstigsten 100%-Ökostrom-Tarife in Österreich. Daten kommen live vom
[E-Control Tarifkalkulator](https://www.e-control.at/tarifkalkulator). Ohne Wechselrabatte,
sortiert nach Arbeitspreis, mit Preisgarantie-Analyse.

## Features

### Eingabe Tier 1 — Grunddaten

| Feld | Beschreibung |
|------|-------------|
| **PLZ** | 4-stellige österreichische Postleitzahl. Bestimmt den Netzbetreiber. Leer = ganz Österreich (alle 9 Netzgebiete). |
| **Verbrauch (kWh)** | Direkteingabe des Jahresverbrauchs in kWh. Standard: 3.500 kWh. |
| **Personen** | Alternative zur kWh-Eingabe. Wählt aus 1–5+ Personen, Verbrauch wird automatisch berechnet. |

**Verbrauch pro Personenanzahl:**

| Personen | kWh/Jahr |
|----------|----------|
| 1 | 1.500 |
| 2 | 2.500 |
| 3 | 3.500 |
| 4 | 4.500 |
| 5+ | 5.500 |

### Eingabe Tier 2 — Zusatzverbraucher (optional)

Aufklappbarer Bereich für Geräte, die den Stromverbrauch wesentlich beeinflussen:

| Gerät | Icon | Verbrauchsänderung |
|-------|------|--------------------|
| Wärmepumpe | 🌡️ | +4.000 kWh/Jahr |
| Heißwasserboiler | 🚿 | +1.800 kWh/Jahr |
| Stromheizung | ♨️ | +5.000 kWh/Jahr |
| Gasheizung | 🔥 | −500 kWh/Jahr |

Die Werte werden auf den Basisverbrauch addiert (bzw. subtrahiert bei Gas).
Minimum: 500 kWh/Jahr.

Ein Live-Preview zeigt den berechneten Gesamtverbrauch in Echtzeit an.

### Ergebnisanzeige

- **Bis zu 15 Tarife** sortiert nach Arbeitspreis (günstigste zuerst)
- Rang-Anzeige mit Medaillen (🥇🥈🥉) für Top 3
- Pro Tarif:
  - Anbieter + Produktname
  - Arbeitspreis in ct/kWh brutto
  - Grundpreis in €/Monat
  - Geschätzte Gesamtkosten €/Jahr
  - Preisgarantie-Status (siehe unten)
  - Link zum Anbieter (falls vorhanden)
  - Badge "100% Ökostrom"

### Preisgarantie-Check

Jeder Tarif bekommt einen **Stability-Badge**:

| Badge | Bedeutung |
|-------|-----------|
| 🟢 **Preis stabil** | Preisgarantie ≥ 12 Monate. Preis bleibt auch nach einem Jahr gleich. |
| 🔴 **Kein Preisschutz** | Keine Preisgarantie. Preis kann jederzeit steigen. |
| 🔴 **[Dauer]** | Garantie < 12 Monate, z.B. "6 Monate". Nach Ablauf kann der Preis steigen. |
| 🔴 **variabel / Anpassung** | Dynamischer Preis, der sich an einen Index koppelt. |

Tarife mit `preisStabil: true` bekommen zusätzlich einen subtilen grünen Hintergrund-Gradienten.

### Ganz-Österreich-Modus

Wenn keine PLZ eingegeben wird:
1. Alle 9 repräsentativen PLZ werden parallel abgefragt (Wien 1010, NÖ 3100, OÖ 4020, Sbg 5020, Tirol 6020, Vlbg 6900, Bgld 7000, Stmk 8010, Ktn 9020)
2. Ergebnisse werden dedupliziert (gleicher Anbieter + Produkt → günstigsten behalten)
3. Top 15 werden angezeigt

Beim Laden der Seite wird automatisch eine Ganz-Österreich-Abfrage gestartet.

---

## API

### `POST /api/tarife`

Netlify Function unter `netlify/functions/tarife.mjs`.

#### Request Body

```json
{
  "zipCode": "1010",
  "consumption": 3500,
  "persons": 2,
  "appliances": {
    "waermepumpe": true,
    "heisswasser": false,
    "stromheizung": false,
    "gas": false
  },
  "gesamt": false
}
```

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|-------------|
| `zipCode` | string | Nein* | 4-stellige PLZ. Pflicht wenn `gesamt: false`. |
| `consumption` | number | Nein | Jahresverbrauch in kWh. Hat Vorrang vor `persons`. |
| `persons` | number | Nein | Personenanzahl (1–5). Wird zu kWh umgerechnet. |
| `appliances` | object | Nein | Aktive Zusatzverbraucher. Keys: `waermepumpe`, `heisswasser`, `stromheizung`, `gas`. |
| `gesamt` | boolean | Nein | `true` = alle Netzgebiete abfragen. `zipCode` wird ignoriert. |

*Wenn weder `consumption` noch `persons` angegeben: Standard 3.500 kWh.

#### Verbrauchsberechnung (Server-seitig)

```
Basis = consumption || CONSUMPTION_PER_PERSON[persons] || 3500
+ waermepumpe?   → +4000
+ heisswasser?   → +1800
+ stromheizung?  → +5000
+ gas?           → -500
= max(Ergebnis, 500)
```

#### Response (200 OK)

```json
{
  "netzbetreiber": "Wiener Netze GmbH",
  "verbrauch": 5300,
  "anzahlGesamt": 42,
  "products": [
    {
      "anbieter": "oekostrom GmbH",
      "produkt": "oekostrom future",
      "arbeitspreisCtKwh": 9.84,
      "grundpreisMonat": 3.25,
      "energieJahr": 624.50,
      "gesamtJahr": 985.30,
      "garantie": "12 Monate",
      "garantieMonate": 12,
      "preisStabil": true,
      "link": "https://..."
    }
  ]
}
```

| Feld | Typ | Beschreibung |
|------|-----|-------------|
| `netzbetreiber` | string | Name des Netzbetreibers (oder "Ganz Österreich") |
| `verbrauch` | number | Berechneter Verbrauch in kWh |
| `anzahlGesamt` | number | Gesamtzahl gefundener Ökostrom-Tarife |
| `products` | array | Top 15 Tarife, sortiert nach Arbeitspreis |
| `products[].arbeitspreisCtKwh` | number | Arbeitspreis in ct/kWh brutto (inkl. 20% USt) |
| `products[].grundpreisMonat` | number | Grundpreis in €/Monat brutto |
| `products[].energieJahr` | number | Reine Energiekosten pro Jahr brutto |
| `products[].gesamtJahr` | number | Gesamtkosten (Energie + Netz) pro Jahr brutto |
| `products[].garantie` | string\|null | Preisgarantie als Text (z.B. "12 Monate", "bis 31.12.2026") |
| `products[].garantieMonate` | number\|null | Preisgarantie in Monaten (numerisch) |
| `products[].preisStabil` | boolean | `true` wenn Garantie ≥ 12 Monate |
| `products[].link` | string\|null | URL zum Anbieter-Wechsel |

#### Error Response

```json
{ "error": "Ungültige Postleitzahl." }
```

Status-Codes: `400` (ungültige Eingabe), `500` (E-Control-Fehler).

---

## E-Control API Details

Die Serverless Function kommuniziert mit der E-Control REST API:

**Base URL:** `https://www.e-control.at/o/rc-public-rest`

### 1. Netzbetreiber ermitteln

```
GET /rate-calculator/grid-operators?locale=de&zipCode={PLZ}&energyType=POWER
```

Gibt `gridOperators[0].id` und `gridAreaId` zurück.

### 2. Tarife abrufen

```
POST /rate-calculator/energy-type/POWER/rate?locale=de&isSmartMeter=false
```

Wichtige Parameter im Request Body:
- `customerGroup: "HOME"` — Haushaltskunde
- `moveHome: true` — Neukunde (kein bestehender Vertrag)
- `includeSwitchingDiscounts: false` — ohne Wechselrabatte
- `searchPriceModel: "CLASSIC"` — klassisches Preismodell (kein Spot)

### 3. Filterung

Aus `ratedProducts` werden nur Tarife genommen, die:
- `productProperties` mit `CERTIFIED_GREEN_POWER` enthalten (100% Ökostrom)
- `energyRateTotal > 0` haben (gültiger Arbeitspreis)
- `complexPrice === false` (kein dynamischer Spotmarkt-Tarif)

### 4. Preisberechnung

```
Arbeitspreis (ct/kWh brutto) = energyRateTotal × (1 + taxRate) / consumption
Grundpreis (€/Monat brutto)  = baseRate × (1 + taxRate) / 100 / 12
```

`taxRate` ist typischerweise `0.2` (20% USt).
