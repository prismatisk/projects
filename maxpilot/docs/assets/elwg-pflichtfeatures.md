# ElWG — Pflichtfeatures & Timeline für Stromlieferanten

> Erstellt: Februar 2026
> Quelle: ElWG (Nationalratsbeschluss Dezember 2025), energie-noe.at, bestconnect.info, wolftheiss.com, energiegemeinschaften.gv.at
> Zweck: Gesprächsvorbereitung maxenergy — Was muss bis wann implementiert sein?

---

## Überblick

Das **Elektrizitätswirtschaftsgesetz (ElWG)** ist die größte Reform des österreichischen Strommarkts seit 20 Jahren. Es löst das ElWOG 2010 ab und setzt die EU-Elektrizitätsbinnenmarktrichtlinie 2019/944 um.

**Kernziele:** Leistbarer Strom, Versorgungssicherheit, Energiewende beschleunigen, Klimaneutralität 2040.

---

## Timeline: Was tritt wann in Kraft?

| Datum | Was |
|-------|-----|
| **Jänner 2026** | „Preis-Runter-Garantie": Sinkende Stromkosten müssen innerhalb von 6 Monaten an Kunden weitergegeben werden |
| **April 2026** | Sozialtarif: 6 ct/kWh netto für erste 2.900 kWh bei schutzbedürftigen Haushalten (~290.000 Haushalte) |
| **1. Oktober 2026** | Bürgerenergie / Energiegemeinschaften: Neue Bestimmungen für GEA, EEG, BEG treten in Kraft |
| **1. Oktober 2026** | Dynamische Tarife: Pflicht für Lieferanten, mindestens einen dynamischen Tarif anzubieten |
| **1. Oktober 2026** | Erweiterte Kundenrechte: Vertragslogik, Wechsel, Transparenz |
| **31. Dezember 2026** | Neue Netzentgeltstruktur (Systemnutzungsentgelte) |
| **2027** | Einspeise-Infrastrukturbeitrag für Anlagen > 20 kW |

---

## Pflichtfeatures für Stromlieferanten (Detail)

### 1. Dynamische Tarife (§ 21 ElWG)
**Status:** PFLICHT ab Oktober 2026
**Was:** Jeder Lieferant muss mindestens einen Vertrag mit **dynamischen Energiepreisen** anbieten (Spotmarkt-gekoppelt).
**Dazu:**
- Erhöhte **Aufklärungs- und Warnpflicht** bei Haushaltskunden und Kleinunternehmern
- Verständliche Darstellung von Chancen UND Risiken vor Vertragsabschluss
- **Jederzeitiges Kündigungsrecht** für dynamische Produkte
- 15-Minuten-Verbrauchsdaten bei Smart-Meter-Kunden

**UX-Relevanz für maxenergy:**
- Opt-in-Flow muss einfach und verständlich sein
- Simulation „Was hätte ich letzten Monat gespart?" als Entscheidungshilfe
- Push-Notifications bei günstigen/teuren Preisfenstern
- Dashboard mit Echtzeit-Preis + Verbrauch

**→ MAX Pilot Lösung:** ElWG-Screen mit Flextarif-Erklärung, persönlicher Simulation und animiertem Opt-in-Toggle

---

### 2. Fixe Tarife (§ 21 ElWG)
**Status:** PFLICHT ab Oktober 2026
**Was:** Zusätzlich zum dynamischen Tarif muss auch mindestens ein **fixer Tarif** angeboten werden.
**Dazu:**
- Preisänderungen nur alle 6 Monate erlaubt
- Preisänderungen dürfen „nicht unbillig" sein
- Sinkende Kosten müssen binnen 6 Monaten weitergegeben werden („Preis-Runter-Garantie")

**UX-Relevanz:** Klarer Vergleich fix vs. dynamisch für den Kunden.

---

### 3. Preistransparenz & Rechnungen (§§ 19–20 ElWG)
**Status:** PFLICHT
**Was:**
- Energierechnungen müssen **klar strukturiert** sein: Energiepreis, Netzentgelte, Steuern/Abgaben getrennt
- Bei Smart Meter: **monatliche Abrechnung** möglich (statt jährlich)
- 15-Minuten-Intervall-Daten müssen dem Kunden zugänglich sein
- Erweiterte Informations- und Mitteilungspflichten bei Vertragsabschluss
- AGB-Änderungen: gesetzliches Änderungsrecht, erhöhte Informationspflichten

**UX-Relevanz:** Rechnungen nicht als PDF-Wüste, sondern als verständliches Dashboard.

**→ MAX Pilot Lösung:** Energie-Screen mit Kostenaufschlüsselung, Monatstrend, Vergleich zum Vorjahr

---

### 4. Lieferantenwechsel (§§ 24–25 ElWG)
**Status:** PFLICHT (beschleunigt)
**Was:**
- Wechsel wird massiv **vereinfacht und beschleunigt** (Ziel: <24h technisch möglich)
- Neue Verfahrensbestimmungen für den Wechselprozess
- Kontrahierungszwang: Lieferant muss Neukunden zu wettbewerbsfähigen Standardtarifen aufnehmen

**UX-Relevanz für maxenergy:**
- ⚠ **Churn-Risiko steigt massiv** — Wechselhürde sinkt von 14 Tagen auf Stunden
- Retention wird überlebenswichtig
- Kunden brauchen einen Grund zu BLEIBEN, nicht nur keinen Grund zu gehen

**→ MAX Pilot Lösung:** Loyalty-Programm (MAX+) als Gegengewicht zum Wechselbonus

---

### 5. Herkunftsnachweise
**Status:** PFLICHT (erweitert)
**Was:**
- Ökostrom-Herkunft muss für Kunden nachvollziehbar sein
- Zertifikate (Renewable Energy Guarantee of Origin) müssen sichtbar gemacht werden
- Zusammensetzung der Stromlieferung muss offengelegt werden

**UX-Relevanz:** Nicht als Fußnote auf Seite 3 der Rechnung, sondern als visuelles Dashboard.

**→ MAX Pilot Lösung:** Herkunftsnachweis-Screen (Wasserkraft 68%, Wind 22%, Solar 10%), PDF-Zertifikat, „100% Österreich" Badge

---

### 6. Smart Meter & Datenzugang (§ 17 ElWG)
**Status:** PFLICHT (vereinheitlicht)
**Was:**
- Einheitliche Datenzugangsstelle (wird noch implementiert)
- 15-Minuten-Intervall-Daten für alle Smart-Meter-Kunden
- Kunden haben Recht auf ihre Verbrauchsdaten
- Netzbetreiber müssen Daten in standardisiertem Format liefern

**Aktueller Stand in AT:**
- Fast alle maxenergy-AT-Kunden haben Smart Meter
- ABER: Zugang variiert stark je nach Netzbetreiber (Wiener Netze ≠ Netz Burgenland ≠ Energie Steiermark)
- ElWG soll das vereinheitlichen

**UX-Relevanz:** Erst mit einheitlichem Datenzugang sind personalisierte Insights möglich.

**→ MAX Pilot Lösung:** Heute: generische Visualisierungen. Post-Oktober: personalisierte 15-Min-Daten, Peak-Analyse, Spartipps

---

### 7. Sozialtarif (§ neu)
**Status:** PFLICHT ab April 2026
**Was:**
- 6 ct/kWh netto für erste 2.900 kWh/Jahr
- Zielgruppe: ~290.000 schutzbedürftige Haushalte (GIS-Befreiung, Arbeitslose, Mindestpensionisten)
- Finanzierung: Beiträge der Strombranche + Bundesmittel (~60 Mio €/Jahr)
- Recht auf kostenlosen Vorauszahlungszähler (Prepaid-Strom)

**UX-Relevanz:** Automatische Erkennung berechtigter Kunden, einfacher Antragsprozess.

---

### 8. Energiegemeinschaften / Bürgerenergie (§§ 65–72 ElWG)
**Status:** Optional, aber strategisch wichtig. Neue Regeln ab Oktober 2026.
**Was:**
- **Aktive Kunden** können Strom erzeugen, speichern, verbrauchen und verkaufen
- **Peer-to-Peer**: Strom direkt unter Nachbarn handeln
- **GEA** (Gemeinschaftliche Erzeugungsanlage): Im Gebäude/Standort
- **EEG** (Erneuerbare-Energie-Gemeinschaft): Lokal/regional, reduzierte Netzentgelte, keine E-Abgabe
- **BEG** (Bürgerenergiegemeinschaft): Österreichweit
- Organisator-Rolle: Dritte können Abwicklung für Energiegemeinschaften übernehmen
- Speichereinbindung wird erstmals geregelt

**UX-Relevanz:**
- Komplexestes UX-Problem des ElWG: Wie erkläre ich einem Normalkunden, was eine EEG ist?
- GEA-Finder: „Gibt es in deiner Straße eine Energiegemeinschaft?"
- Einfacher Beitritts-Flow

**→ MAX Pilot Lösung:** GEA-Tab mit Karte, „3 Gemeinschaften in 2 km", Beitreten-Button

---

### 9. Prosumer-Features
**Status:** Optional, aber wachsende Zielgruppe
**Was:**
- PV-Besitzer können Überschuss ins Netz einspeisen
- Anlagen bis 20 kW: kostenfreie Einspeisung
- Anlagen > 20 kW: Infrastrukturbeitrag 0,05 ct/kWh (ab 2027)
- Spitzenkappung: PV auf 70% der Modulspitzenleistung bei Netzengpässen
- Netzbetreiber kann neue Anlagen > 3,68 kW steuern

**UX-Relevanz:** Dashboard für Einspeisung, Eigenverbrauch, Vergütung.

---

## Zusammenfassung: Was muss maxenergy bis Oktober 2026 bauen?

### MUSS (gesetzliche Pflicht)

| # | Feature | Deadline |
|---|---------|----------|
| 1 | Dynamischen Tarif anbieten (mit Aufklärung, Risiko-Warnung, Kündigungsrecht) | Okt. 2026 |
| 2 | Fixen Tarif anbieten (mit Preis-Runter-Garantie) | Okt. 2026 |
| 3 | Klare Rechnungsstruktur (Energie / Netz / Steuern getrennt) | Okt. 2026 |
| 4 | Monatliche Abrechnung bei Smart Meter ermöglichen | Okt. 2026 |
| 5 | 15-Min-Verbrauchsdaten für Kunden zugänglich machen | Okt. 2026 |
| 6 | Beschleunigter Lieferantenwechsel | Okt. 2026 |
| 7 | Herkunftsnachweise sichtbar machen | Okt. 2026 |
| 8 | Sozialtarif implementieren | Apr. 2026 |
| 9 | AGB/Preisänderungs-Prozesse anpassen | Okt. 2026 |

### SOLLTE (strategisch wichtig)

| # | Feature | Warum |
|---|---------|-------|
| 10 | Energiegemeinschaften-Onboarding (GEA/EEG/BEG) | First-Mover-Vorteil, neue Kundengruppe |
| 11 | Prosumer-Dashboard (PV-Einspeisung) | Wachsende Zielgruppe, hoher LTV |
| 12 | Loyalty-Programm | Einzige Waffe gegen Wechselbonus + 24h-Wechsel |
| 13 | Smart-Home-Integration | Hardware-Lock-in wie Tibber |
| 14 | Push-Notifications bei Preisfenstern | Täglicher Touchpoint wie Tibber |

---

## Das Argument für Bernd

> **9 Pflicht-Features bis Oktober 2026.** Nicht optional, nicht nice-to-have.
>
> Die Frage: Baut maxenergy das als **9 Compliance-Checkboxen** —
> oder als **zusammenhängendes Kunden-Erlebnis**, das gleichzeitig Retention löst?
>
> Der Unterschied: 4,8 Mio € Jahresumsatz.
>
> MAX Pilot zeigt, wie Option 2 aussieht.
