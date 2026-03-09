# MAX Pilot – Strategie & Kontakt-Log

> Zuletzt aktualisiert: 2. März 2026 (Nacht — Pitch-Page + Ordnerstruktur)  
> Produkt: `prismatisk.com/maxpilot/` — ElWG Companion App Prototyp für maxenergy  
> Pitch-Seite: `prismatisk.com/maxpilot/pitch/`

---

## Ziel

Freelance-Auftrag via Prismatisk bei maxenergy als Einstieg — mit dem mittelfristigen Ziel der Festanstellung als Country Manager Österreich.

```
Stufe 1 (kurzfristig):   Freelance-Auftrag via Prismatisk
                         → ElWG UX-Konzept / Companion-Prototyp
                         → Erstes Projekt = lebendige Bewerbung

Stufe 2 (mittelfristig): Country Manager Österreich (Anstellung)
                         → Entscheidung fällt auf Basis echter Zusammenarbeit
```

**Kernregel:** Freelance-Vorschlag nie als Alternative zur CM-Rolle framen — immer als logische Überbrückung.

---

## Gesprächspartner

| Person | Funktion | Kontext |
|---|---|---|
| **Bernd Neider** | GF maxenergy | Langjährige Beziehung über backbone.one, freundschaftliche Basis, committet aber schwer |
| **André Schäffner** | COO maxenergy | Hat Carlo bekommen. Bernd stimmt intern mit ihm ab — ist beim Meeting aber nicht dabei |

---

## Kontakt-Log

| Datum | Kanal | Inhalt | Ergebnis |
|---|---|---|---|
| 2. März 2026 | WhatsApp | Clickdummy-Link (`prismatisk.com/maxpilot/`) gesendet + 30-Min-Termin angefragt. Opener: Hoffnung für Carlo & Familie (André). Framing: ElWG als Retention-Hebel statt Compliance. | ✅ Positiv |
| 2. März 2026 (18:16) | WhatsApp | Antwort Bernd: stimmt sich Mi mit André ab, schlägt Termin **diese Woche** vor | ⏳ Termin ausstehend |

---

## Strategie für das Meeting

- **Nicht mit dem Prototyp beginnen** — zuerst CM-Status erfragen: „Wie steht es mit der CM-Rolle, haben sich deine Pläne konkretisiert?"
- Dann Prototyp als konkretes Beispiel zeigen was möglich ist
- Freelance-Vorschlag einführen als logische Überbrückung — nie als Ersatz zur CM-Rolle
- **Pitch-Seite (`/maxpilot/pitch/`) ist die Geheimwaffe** — nicht vorab schicken, erst im Meeting zeigen
- Was Bernd nach dem Meeting weiterträgt (an André), muss klar sein: du willst die CM-Rolle, das Projekt ist der Beweis

---

## Offene Next Steps

- [ ] Terminvorschläge von Bernd abwarten (nach Mi-Abstimmung mit André) — **nicht nachhaken**
- [ ] Bei Termin: CM-Status zuerst, dann Prototyp, dann Freelance als Brücke
- [ ] Nach Meeting: hier dokumentieren
- [ ] **Pitch-Page deployen** auf Netlify (git push) — Änderungen vom 2. März sind lokal fertig, noch nicht gepusht
- [ ] **Ordnerstruktur bereinigen** — redundante Projektordner konsolidieren (siehe Abschnitt unten)

---

## Pitch-Page — Änderungslog

> Quelldatei: `C:/Users/Martin/.pi/Projects/prismatisk/pitch/index.html`  
> Deploy-Ziel: `deploy/maxpilot/pitch/index.html` → `prismatisk.com/maxpilot/pitch/`  
> Stand nach Session vom 2. März 2026 (Abend): **lokal fertig, noch nicht auf Netlify deployed**

### Session 2. März 2026

#### 1. Accessibility — Schriftgrößen (23 Fixes)

Alle Textelemente unter 13px wurden auf lesbare Größen angehoben. Schlimmster Wert war `.problem-label` mit 9.9px.

| CSS-Klasse | Vorher | Nachher |
|---|---|---|
| `.hero-tag .tag` | 0.65rem (10.4px) | 0.75rem |
| `.hero-tag .label` | 0.70rem (11.2px) | 0.85rem |
| `.hero-kpi-label` | 0.72rem (11.5px) | 0.85rem |
| `.hero-scroll` | 0.68rem (10.9px) | 0.78rem |
| `.nav-link` | 0.72rem (11.5px) | 0.82rem |
| `.section-title` | 0.65rem (10.4px) | 0.75rem |
| `.kpi-label` | 0.65rem (10.4px) | 0.75rem |
| `.kpi-sub` | 0.72rem (11.5px) | 0.85rem |
| `.stage-time` | 0.68rem (10.9px) | 0.80rem |
| `.stage-desc` | 0.82rem | 0.90rem |
| `.stage-problem` | 0.78rem | 0.85rem |
| `.stage-problem .problem-label` | 0.62rem (9.9px) | 0.72rem |
| `.leak-label` | 0.68rem (10.9px) | 0.82rem |
| `.comp-label` | 0.78rem | 0.88rem |
| `.comp-value` | 0.85rem | 0.90rem |
| `.bench-col .bench-sub` | 0.72rem | 0.85rem |
| `.bench-feature-name` | 0.82rem | 0.90rem |
| `.bench-feature-desc` | 0.72rem | 0.82rem |
| `.matrix-row.header .matrix-cell` | 0.70rem | 0.80rem |
| `.matrix-cell` | 0.82rem | 0.88rem |
| `.matrix-cell:first-child` | 0.88rem | 0.92rem |
| `.timeline-date` | 0.62rem (9.9px) | 0.75rem |
| `.timeline-what` | 0.82rem | 0.88rem |
| `.pflicht-desc` | 0.72rem | 0.82rem |
| `.pflicht-badge` | 0.60rem (9.6px) | 0.72rem |
| `.ux-label` | 0.62rem (9.9px) | 0.75rem |
| `.quote-source` | 0.72rem | 0.82rem |
| `.proto-hint` | 0.78rem | 0.88rem |
| `.footer` | 0.68rem | 0.82rem |
| `@media 900px .nav-link` | 0.65rem | 0.75rem |
| `@media 500px .nav-link` | 0.60rem | 0.70rem |
| `@media 900px .matrix-cell` | 0.70rem | 0.78rem |
| `@media 500px .matrix-cell:first-child` | 0.72rem | 0.82rem |

#### 2. Accessibility — Farbkontrast

| Variable | Vorher | Nachher | Grund |
|---|---|---|---|
| `--text-muted` | `#4a4944` (Kontrast 2.1:1 ❌) | `#72706a` (Kontrast ~4.6:1 ✅) | WCAG AA erfordert ≥ 4.5:1 |

#### 3. Mobile — Matrix "Auf einen Blick" horizontal scrollbar

**Problem:** Die 5-spaltige Vergleichstabelle (Feature | Octopus | Tibber | MAXENERGY heute | MAX PILOT) wurde auf Mobile (390px) rechts abgeschnitten — die letzten zwei Spalten nicht sichtbar.

**Fix:**
- Neuer Wrapper `.matrix-scroll-wrapper` mit `overflow-x: auto; -webkit-overflow-scrolling: touch`
- `.matrix-simple` bekommt `min-width: 720px` damit alle 5 Spalten Platz haben
- Mobile Breakpoint: `grid-template-columns: 200px repeat(4, 1fr)` — feste Breite für Feature-Namen
- `.matrix-cell:first-child` bekommt `white-space: nowrap` — verhindert Zeilenumbrüche in der ersten Spalte (war der Grund für inkonsistente Zeilenhöhen)
- Visueller Scroll-Hint: `::after` Pseudo-Element mit Fade-Gradient rechts (nur auf Mobile)

**Ergebnis:** Tabelle auf Mobile per Wisch vollständig lesbar. Zeilenhöhen bündig auf beiden Scroll-Positionen. Auf Desktop unverändert.

#### 4. Datum aktualisiert

- [x] Hero-Tag: „Februar 2026" → „März 2026" ✅
- [x] Footer: „Februar 2026" → „März 2026" ✅
- [x] Deploy auf Netlify (`git push`) ✅

#### 5. Hero-Tag — Datum in eigener Zeile

**Problem:** „März 2026" stand inline hinter „Prismatisk x MAXENERGY", nicht bündig darunter.

**Fix:**
- Neuer Wrapper-Span `.hero-tag-right` mit `flex-direction: column; gap: 3px` um Label + Datum
- Neues CSS-Element `.hero-tag .date` für die Datumszeile
- `flex-wrap` auf `.hero-tag` entfernt (nicht mehr nötig)

**Ergebnis:** „März 2026" steht linksbündig unter „Prismatisk x MAXENERGY", VERTRAULICH-Badge bleibt vertikal zentriert daneben.

#### 6. Mobile — Szenario-Vergleich (comp-row) Layout-Fix

**Problem:** Im Szenario-Vergleich kollidierten auf schmalen Screens Label und Wert nebeneinander — lange Labels wie „Wechselbonus-Abwehr" und lange Werte wie „14,4 → 19,2 Mio EUR" brachen unkontrolliert um.

**Fix:** `@media (max-width: 500px)`
- `.comp-row`: `flex-direction: column; align-items: flex-start; gap: 0.15rem`
- `.comp-label`: Schriftgröße auf `0.78rem` (dezenter)
- `.comp-value`: Schriftgröße auf `1rem` (stärker betont)
- `.comparison-col`: Padding reduziert auf `1.5rem 1.2rem`

**Ergebnis:** Label und Wert gestapelt statt nebeneinander — kein Kollisionsrisiko, egal wie lang der Text ist.

---

## Ordnerstruktur — Bereinigung

> Durchgeführt: 2. März 2026 (Nacht)

**Problem:** MAX Pilot Inhalte sind redundant über 3 Ordner verteilt:

| Ordner | Status | Plan |
|---|---|---|
| `Projects/prismatisk/` | ✅ Aktiv, wird deployed | Bleibt — wird die einzige Wahrheit |
| `Projects/MAX Pilot/` | ❌ Redundant | Löschen — Inhalte vorher nach `prismatisk/maxpilot/docs/` verschieben |
| `Projects/oekostrom-tarife/` | ❌ Altes Repo, überholt | Löschen — superseded durch `prismatisk/` |

**Zielstruktur nach Bereinigung:**
```
prismatisk/
├── maxpilot/           ← React App (Code)
│   ├── src/
│   ├── docs/           ← NEU: alle Docs, Pläne, Assets zu MAX Pilot
│   │   ├── plan.md     ← zusammengeführt
│   │   ├── README.md
│   │   ├── design.md
│   │   ├── development.md
│   │   ├── benchmark-analyse.md
│   │   ├── elwg-pflichtfeatures.md
│   │   └── assets/
│   └── ...
├── pitch/              ← Pitch-Page Quelle
├── tarife/             ← Tarifcheck Quelle
├── docs/               ← nur prismatisk.com allgemein (Deployment, Architektur)
└── deploy/             ← Build-Output → Netlify
```

**Durchgeführt:**
- `MAX Pilot/docs/` → `prismatisk/maxpilot/docs/` ✅
- `MAX Pilot/assets/` → `prismatisk/maxpilot/docs/assets/` ✅
- `MAX Pilot/documentation.md` → `prismatisk/maxpilot/docs/strategy.md` (getrennt behalten) ✅
- `oekostrom-tarife/docs/` → `prismatisk/tarife/docs/` ✅
- `MAX Pilot/` gelöscht ✅
- `oekostrom-tarife/` gelöscht ✅
