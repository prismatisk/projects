# MAX Pilot – Strategie & Kontakt-Log

> Zuletzt aktualisiert: 11. März 2026  
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
| 10. März 2026 | – | Terminbestätigung: **Donnerstag, 12. März 2026, 16:00 Uhr via Microsoft Teams** | ✅ Fix |

---

## Strategie für das Meeting

- **Nicht mit dem Prototyp beginnen** — zuerst CM-Status erfragen: „Wie steht es mit der CM-Rolle, haben sich deine Pläne konkretisiert?"
- Dann Prototyp als konkretes Beispiel zeigen was möglich ist
- Freelance-Vorschlag einführen als logische Überbrückung — nie als Ersatz zur CM-Rolle
- **Pitch-Seite (`/maxpilot/pitch/`) ist die Geheimwaffe** — nicht vorab schicken, erst im Meeting zeigen
- Was Bernd nach dem Meeting weiterträgt (an André), muss klar sein: du willst die CM-Rolle, das Projekt ist der Beweis

---

## Offene Next Steps

- [x] Terminvorschläge von Bernd abwarten — **Termin: Do 12. März, 16:00, Teams** ✅
- [x] Bei Termin: Prototyp + Pitch gezeigt — sehr positives Feedback ✅
- [x] Nach Meeting: dokumentiert ✅
- [x] **Seite live** — `prismatisk.com/maxpilot/` + `prismatisk.com/maxpilot/pitch/` auf Cloudflare Pages deployed ✅
- [ ] Vertragsdetails klären: variables Gehalt + Dienstwagen noch offen
- [ ] Reiseregelung nach Augsburg klären
- [ ] **Ordnerstruktur bereinigen** — redundante Projektordner konsolidieren (siehe Abschnitt unten)

---

## Call-Ergebnis — Do 12. März 2026

### Was passiert ist
- Prototyp (`prismatisk.com/maxpilot/`) und Pitch-Page wurden gezeigt → **sehr positives Feedback**
- maxenergy will intern die bestehende Stelle „Sales & Growth Manager (Privatkunden)" anpassen — Titel, Gehalt, Scope
- **Keine Country Manager Stelle** — brauchen sie strukturell nicht
- Rolle deckt **AT und DE** ab (nicht nur Österreich)
- Remote bestätigt — Augsburg-Präsenz gelegentlich, Details folgen

### Vereinbarte Eckdaten
| Punkt | Status |
|---|---|
| Titel | **Leiter Business Development** (Gegenvorschlag von Martin, akzeptiert) |
| Gehalt | ~6.500–7.000 € brutto/Monat |
| Dienstwagen | noch offen |
| Variables Gehalt | noch offen |
| Remote | bestätigt — gelegentliche Augsburg-Termine |
| Startdatum | noch offen |

---

## Pitch-Page — Änderungslog

> Quelldatei: `C:/Users/Martin/.pi/Projects/prismatisk/pitch/index.html`  
> Deploy-Ziel: `deploy/maxpilot/pitch/index.html` → `prismatisk.com/maxpilot/pitch/`  
> Stand: **live auf Cloudflare Pages** (`prismatisk.com`) — deployed 9. März 2026 ✅

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

---

## Gesprächsplan — Do 12. März 2026, 16:00, Teams

### Teilnehmer
- **Bernd Neider** (GF) — langjährige Beziehung, freundschaftliches Verhältnis
- **André Schäffner** (COO) — kein Fremder, 4 Jahre gemeinsam bei backbone.one gearbeitet, war auch beim Gespräch zur Sales-Rolle dabei
- **Johannes Griesbeck** (Vertriebsleiter) — engster Kontakt von den dreien, häufigste Zusammenarbeit bei backbone.one, war auch beim Gespräch zur Vertriebsrolle dabei

### Vorgeschichte
| Zeitpunkt | Was |
|---|---|
| 4 Jahre | Zusammenarbeit bei backbone.one mit Bernd, André, Johannes und dem Team |
| Sommer 2025 | Erstes Anstellungsgespräch — maxenergy bietet Sales-Rolle an → passt nicht |
| Dezember 2025 | Bewerbungsgespräch Venture Architect (Innovationsabteilung, Wien) → scheitert an Gehalt + Dienstort |
| 2. Februar 2026 | Gespräch mit Bernd — CM-Rolle Österreich erstmals ins Spiel gebracht |
| 4. Februar 2026 | Detailliertes Rollenkonzept Country Manager Austria an Bernd geschickt — inkl. Verantwortlichkeiten, Partnerschaften, 12-Monats-Plan, Gehaltsvorstellung (7.000 brutto + variabel + Dienstfahrzeug) |
| 2. März 2026 | Prototyp + Pitch-Page live geschickt |
| 12. März 2026 | Dieser Call |

### Aktuelle Lage
ÖGK meldet sich diese oder nächste Woche — dann wird der Dienstvertrag ausgearbeitet, wahrscheinlich mit Eintritt 1. April. **Es gibt keinen Puffer mehr.**

### Vorbereitung
- Prototyp im Browser geöffnet: `prismatisk.com/maxpilot/`
- Pitch-Page in eigenem Tab: `prismatisk.com/maxpilot/pitch/` — nicht vorab zeigen
- Kamera an, ruhige Umgebung

---

### Phase 1 — Ankommen (2 Min)
Alle drei kennen dich — kein großes Warm-up nötig. Kurz kollegiales Wiedersehen, Carlo falls passend, dann direkt:

> *„Schön dass wir das endlich konkret machen. Ich hab euch was gebaut — ich zeig's euch kurz, und dann reden wir über das was ich mir vorstelle."*

---

### Phase 2 — Kontext setzen (2 Min)
Sie kennen das Rollenkonzept bereits, kein Re-Pitch nötig:

> *„Ihr habt das Konzept. Ich hab seitdem nicht stillgesessen — das ElWG ist einer der Punkte aus dem Konzept, den ich konkret durchgedacht und gebaut hab. Ich zeig euch was dabei rausgekommen ist."*

---

### Phase 3 — Prototyp zeigen (5–8 Min)
Screen teilen, `prismatisk.com/maxpilot/` öffnen.

Explizit mit dem Rollenkonzept verknüpfen — nicht nur zeigen, sondern einordnen:

1. **Home Screen** — Erster Eindruck, Branding, Ton
2. **ElWG Screen** — *„Das ist der Innovationsteil aus dem Konzept — ElWG nicht als Compliance, sondern als Produkt."*
3. **Energy Screen** — Transparenz als Vertrauensaufbau → direkt verknüpft mit Customer Retention
4. **Loyalty Screen** — *„Das ist der Loyalitätsprogramm-Gedanke aus dem Konzept, konkret gemacht."*

Ziel: Sie sehen dass das Konzept kein Dokument ist — es ist eine Arbeitsweise.

**Johannes besonders im Blick:** Er kennt dich am besten — wenn er nickt, zieht er die anderen mit. Falls er Fragen zum Vertriebsaspekt stellt, ist das ein gutes Zeichen.

**Erwartete Frage — vor allem von Johannes oder André:**
> *„Schön, aber wie bringt man Kunden dazu, die App überhaupt zu installieren?"*

Vorbereitete Antwort — zweistufig:

**Stufe 1 — Erster Install:**
- **ElWG als Pull:** Ab Oktober 2026 haben Kunden gesetzliches Recht auf ihre Verbrauchsdaten. Die App ist das Delivery-Medium — das ist kein Marketing, das ist ein Rechtsanspruch.
- **Payback-Onboarding:** Payback ist bereits Partner und hat ~6 Mio. Nutzer in Österreich. Neukundenwechsel-Bonus = natürlicher Anlass, die App beim Onboarding einzuführen. ⚠️ Aber: Payback ist ein **einmaliger Bonus beim Wechsel**, kein laufendes Sammelsystem — taugt also als Install-Trigger, nicht als Retention-Tool.
- **Meta Custom Audiences:** maxenergy ist bereits auf Social Media aktiv. Bestehende Kundenliste als Custom Audience ausspielen — kein neues Budget, andere Botschaft.
- **Neukunden-Flow:** App als Standard-Schritt nach Vertragsabschluss, mit Erstbonus (z.B. 500 MAX+ Punkte).

**Stufe 2 — Laufende Nutzung:**
Der echte Grund zum Wiederkommen kommt aus dem Mehrwert der App selbst — nicht aus Payback:
- **MAX+** — eigenes Punkte-System das sich monatlich aufbaut
- **Energiedaten** — wer einmal seinen Verbrauch gesehen hat, kommt wieder
- **ElWG-Features** — Flextarif, Energiegemeinschaft — ab Oktober dauerhaft relevant
- **Tarif-Check** — jährliches Ritual, das Kunden aktiv vor Abwanderung schützt

**Die entscheidende Pointe:**
> *„Die nötige Infrastruktur ist schon da — Payback, Meta, der Onboarding-Flow. MAX Pilot koordiniert das nur. Das ist nicht 'App bauen und hoffen', das ist bestehende Assets sinnvoll einsetzen."*

Realistisches Ziel: **10–15% aktive Nutzer im ersten Jahr = 12.000–18.000 installierte Apps.** Das sind die Kunden mit der stärksten Bindung — und die, die am wenigsten abwandern.

---

### Phase 4 — Pitch-Page (2–3 Min)

> *„Ich hab das auch auf einer Seite zusammengefasst — falls ihr das intern weiterreichen wollt."*

`prismatisk.com/maxpilot/pitch/` kurz durchscrollen. Seite ist live, sie können sie jederzeit selbst aufrufen.

---

### Phase 5 — Klartext (4–5 Min)
Das ist der Kern. Direkt, ohne Entschuldigung:

> *„Ich sag euch jetzt auch offen wo ich stehe. Ihr habt das Rollenkonzept seit Februar — ihr wisst was ich mir vorstelle, was ich mitbringe und was es kosten würde. Ich hab den Prototyp gebaut um zu zeigen dass ich nicht nur Konzepte schreibe, sondern liefere.*
>
> *Wir arbeiten seit vier Jahren zusammen — ihr wisst wie ich arbeite. Ich würde diese Rolle gerne machen, und ich glaube dass ich der Richtige dafür bin.*
>
> *Ich muss euch aber auch sagen: ich hab gerade eine konkrete andere Option auf dem Tisch. Die ÖGK meldet sich diese oder nächste Woche, dann geht's in die Vertragsverhandlung — wahrscheinlich mit Eintritt 1. April. Ich würde maxenergy vorziehen, aber dafür brauche ich jetzt ein klares Signal von euch."*

Dann Stille lassen. Nicht nachschieben.

**Das ist kein Ultimatum — das ist Respekt.** Du gibst ihnen die Chance, sich zu entscheiden, bevor du es tust.

---

### Phase 6 — Freelance als Brücke (nur wenn nötig)
Nur ansprechen wenn die CM-Rolle im Call nicht greifbar ist — und nur wenn sie glaubhaft signalisieren dass sie ernsthaft dran sind, aber intern noch etwas Zeit brauchen:

> *„Wenn ihr noch ein paar Wochen braucht um das intern zu klären — ich könnte parallel ein konkretes Projekt angehen. ElWG UX-Konzept, fertig zum Bauen. So habt ihr einen echten Output und wir starten die Zusammenarbeit schon mal. Aber das ersetzt keine Antwort zur CM-Rolle."*

Freelance ist die Überbrückung, nicht der Ausweg für sie.

---

### Phase 7 — Schluss (2 Min)
> *„Was sind eure nächsten Schritte — und bis wann kann ich mit einer Antwort rechnen?"*

Konkretes Datum oder konkreten nächsten Schritt festhalten. Offen lassen ist keine Option mehr.

---

### Wichtigste Regel
**Du bist nicht der der wartet. Du bist der der eine Entscheidung ermöglicht — und selbst auch eine treffen wird.**

---

## App-Adoption — Argumentation

> Warum installieren Kunden MAX Pilot? Und was hält sie drin?

### Das eigentliche Problem
Eine App aus dem Nichts zu pushen funktioniert nicht — Energie ist für die meisten Menschen kein tägliches Interesse. Der Trick ist nicht, Kunden zur App zu bringen, sondern **natürliche Momente zu nutzen, in denen sie von selbst kommen.**

---

### Hebel 1 — Erster Install

| Hebel | Mechanik | Anmerkung |
|---|---|---|
| **ElWG-Rechtsanspruch** | Ab Oktober 2026 haben Kunden Recht auf ihre 15-Min-Verbrauchsdaten. Die App ist das Delivery-Medium. | Kein Marketing — ein Rechtsanspruch. |
| **Payback-Erstbonus** | Neukundenbonus beim Wechsel (bis 10.000 Punkte). Trigger für ersten App-Install beim Onboarding. | ⚠️ Einmalig — kein laufendes Sammelsystem. Schafft keinen Grund zur Wiederkehr. |
| **Onboarding-Flow** | Neukunden bekommen App als Standard-Schritt nach Vertragsabschluss: *„Schritt 2: App installieren & 500 MAX+ Punkte sichern."* | Kostet nichts extra, schafft sofortigen ersten Touchpoint. |
| **Meta Custom Audiences** | Bestehende Kundenliste als Custom Audience für App-Install-Kampagne. Keine neue Reichweite nötig — andere Botschaft auf bestehenden Kanälen. | maxenergy ist bereits aktiv auf Meta. |

---

### Hebel 2 — Laufende Nutzung (das Entscheidende)

Payback ist ein Akquise-Tool, kein Retention-Tool. Wer die Punkte einmal abgeholt hat, kommt nicht wegen Payback zurück. Der echte laufende Grund zur App-Nutzung kommt aus dem Mehrwert der App selbst:

| Feature | Warum Kunden wiederkommen |
|---|---|
| **MAX+** | Eigenes Punkte-System das sich monatlich aufbaut. Schafft Gewohnheit und messbaren Mehrwert. |
| **Energiedaten** | 15-Min-Verbrauch, monatliche Abrechnung, Spartipps. Wer einmal seinen Verbrauch gesehen hat, kommt wieder. |
| **Flextarif / ElWG-Features** | Ab Oktober dauerhaft relevant — nicht einmalig. |
| **Tarif-Check** | Jährliches Ritual das Kunden aktiv vor Abwanderung schützt — und die App als nützlich positioniert, statt als Spam. |

---

### Realistische Adoption-Erwartung
Nicht alle 120.000 werden die App installieren — das ist auch nicht das Ziel.

**10–15% aktive Nutzer im ersten Jahr = 12.000–18.000 Apps.**

Das sind genau die Kunden mit der stärksten Bindung — und die, die am wenigsten abwandern.

---

### Wichtig für den Call
Die Infrastruktur ist bereits vorhanden — es geht nur um Koordination:
- Payback: bereits Partner ✅
- Meta: bereits aktiv ✅
- Neukunden-Flow: bereits vorhanden ✅
- ElWG-Deadline: erzeugt von selbst Druck ab Oktober 2026 ✅

> MAX Pilot verbindet diese Punkte. Der Aufwand ist nicht „App bauen und hoffen" — es ist bestehende Assets koordinieren.
