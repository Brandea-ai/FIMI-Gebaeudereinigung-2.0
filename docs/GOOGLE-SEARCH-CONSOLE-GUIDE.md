# Google Search Console Setup-Guide für FIMI-Service

**Website:** fimi-service.de
**Ziel:** SEO-Monitoring und Indexierung in Google
**Zeitaufwand:** ~30-60 Minuten
**Erstellt:** 23. November 2025

---

## Warum Google Search Console?

Google Search Console (GSC) ist ein **kostenloses** Tool von Google, das Ihnen hilft:

✅ **Indexierung überwachen** - Welche Seiten sind in Google?
✅ **Suchperformance analysieren** - Wie viele Klicks & Impressions?
✅ **Fehler erkennen** - Broken Links, Mobile-Probleme, etc.
✅ **Sitemap einreichen** - Google schneller über neue Seiten informieren
✅ **Keywords tracking** - Für welche Suchbegriffe ranken Sie?

**Kosten:** KOSTENLOS
**Voraussetzung:** Google-Konto (Gmail)

---

## Schritt 1: Google Search Console öffnen

1. Gehen Sie zu: **https://search.google.com/search-console**
2. Melden Sie sich mit Ihrem Google-Konto an
   - Falls kein Account: Erstellen Sie einen (gmail.com)

---

## Schritt 2: Property hinzufügen

### 2.1 Property-Typ wählen

Sie sehen zwei Optionen:

**Option A: Domain-Property** (EMPFOHLEN)
- Deckt alle Subdomains ab (www, blog, shop, etc.)
- Benötigt DNS-Verifizierung
- **Wählen Sie diese Option!**

**Option B: URL-Präfix**
- Nur für spezifische URL
- Einfachere Verifizierung
- Weniger flexibel

### 2.2 Domain eingeben

```
fimi-service.de
```

**OHNE:**
- `https://`
- `www.`
- Trailing Slash `/`

**Beispiel RICHTIG:** `fimi-service.de`
**Beispiel FALSCH:** `https://www.fimi-service.de/`

Klicken Sie auf: **"Weiter"**

---

## Schritt 3: Domain-Inhaberschaft bestätigen

Google zeigt Ihnen jetzt einen **TXT-Record** an, den Sie in Ihre DNS-Einstellungen eintragen müssen.

### 3.1 TXT-Record kopieren

Der Record sieht ungefähr so aus:
```
google-site-verification=abcdefgh1234567890EXAMPLE
```

**WICHTIG:** Kopieren Sie den GESAMTEN Wert!

### 3.2 DNS-Einstellungen öffnen

Wo Sie die DNS-Einstellungen finden, hängt davon ab, wo Ihre Domain registriert ist:

**Bei IONOS:**
1. Einloggen auf ionos.de
2. Domains & SSL
3. Domain auswählen: fimi-service.de
4. DNS-Einstellungen

**Bei Strato:**
1. Einloggen auf strato.de
2. Domainverwaltung
3. Domain auswählen
4. DNS-Einstellungen verwalten

**Bei 1&1 (IONOS):**
1. Einloggen auf 1und1.de
2. Domains
3. Domain verwalten
4. DNS-Verwaltung

**Bei Google Domains:**
1. domains.google.com
2. Domain auswählen
3. DNS → Manage custom records

### 3.3 TXT-Record hinzufügen

Erstellen Sie einen neuen DNS-Eintrag mit folgenden Werten:

| Feld | Wert |
|------|------|
| **Typ** | TXT |
| **Name** | @ (oder leer lassen) |
| **Wert** | `google-site-verification=abc...` |
| **TTL** | 3600 (oder Standard) |

**Beispiel bei IONOS:**
```
Host/Name: @
Type: TXT
Value: google-site-verification=abcdefgh1234567890EXAMPLE
TTL: 3600
```

Klicken Sie auf: **"Speichern"** oder **"Hinzufügen"**

### 3.4 DNS-Propagierung abwarten

⏰ **Wartezeit: 5 Minuten bis 48 Stunden**

Normalerweise: 10-30 Minuten

Sie können den Status prüfen mit:
- https://dnschecker.org
- Geben Sie Ihre Domain ein
- Wählen Sie "TXT" als Record-Typ
- Prüfen Sie, ob der Google-Verification-Record sichtbar ist

### 3.5 Verifizierung abschließen

1. Gehen Sie zurück zu Google Search Console
2. Klicken Sie auf: **"Bestätigen"**

✅ **Erfolg:** "Inhaberschaft bestätigt"
❌ **Fehler:** DNS-Record noch nicht propagiert → 30 Min warten & erneut versuchen

---

## Schritt 4: Sitemap einreichen

Nach erfolgreicher Verifizierung:

### 4.1 Sitemap-URL

Ihre Sitemap-URL ist:
```
https://fimi-service.de/sitemap.xml
```

### 4.2 In GSC eintragen

1. Im Google Search Console Dashboard
2. Linkes Menü → **"Sitemaps"**
3. "Neue Sitemap hinzufügen"
4. Eingeben: `sitemap.xml`
5. Klicken Sie auf: **"Senden"**

✅ **Status:** "Erfolgreich"
⚠️ **Status:** "Ausstehend" → Warten Sie 24-48 Stunden

### 4.3 Überprüfen

Nach 24-48 Stunden sollten Sie sehen:
- **Entdeckt:** 27 URLs
- **Indexiert:** (variiert, steigt über Zeit)
- **Fehler:** 0 (idealerweise)

---

## Schritt 5: Wichtige Einstellungen

### 5.1 Bevorzugte Domain (optional)

Falls Sie sowohl `fimi-service.de` als auch `www.fimi-service.de` haben:

1. Einstellungen
2. Bevorzugte Domain wählen
3. **Empfehlung:** `https://fimi-service.de` (ohne www)

### 5.2 Geografisches Ziel

1. Linkes Menü → "Legacy-Tools & Berichte"
2. "Internationales Targeting"
3. Land: **Deutschland**
4. Speichern

### 5.3 URL-Prüftool

Testen Sie einzelne URLs:
1. Oben Suchleiste
2. URL eingeben: `https://fimi-service.de/`
3. **"URL prüfen"**

Status-Bedeutungen:
- ✅ **"URL ist in Google"** - Perfekt!
- ⏳ **"URL ist nicht in Google"** - Indexierung anfordern
- ❌ **"URL kann nicht indexiert werden"** - Fehler beheben

---

## Schritt 6: Erste Indexierung beschleunigen

### 6.1 URL-Inspektion für Hauptseiten

Für wichtige Seiten die Indexierung manuell anfordern:

1. URL-Prüftool öffnen
2. URL eingeben: `https://fimi-service.de/`
3. Klicken Sie: **"Indexierung beantragen"**

Wichtige URLs zum Indexieren:
```
https://fimi-service.de/
https://fimi-service.de/business/bueroreinigung
https://fimi-service.de/business/industriereinigung
https://fimi-service.de/kontakt
https://fimi-service.de/ueber-uns
```

**Limit:** ~10 manuelle Anfragen pro Tag

### 6.2 Geduld haben

⏰ **Indexierung dauert:**
- Erste URLs: 1-7 Tage
- Vollständige Site: 2-4 Wochen
- Regelmäßiges Crawling: 1-3 Monate

**Normal ist:**
- Tag 1: 0-5 Seiten indexiert
- Woche 1: 10-15 Seiten indexiert
- Monat 1: 25-27 Seiten indexiert

---

## Schritt 7: Performance überwachen

### 7.1 Leistungsbericht

Nach ~1 Woche Daten:

1. Linkes Menü → **"Leistung"**
2. Sie sehen:
   - **Klicks:** Wie viele Besucher von Google
   - **Impressionen:** Wie oft in Suchergebnissen angezeigt
   - **CTR (Click-Through-Rate):** Klicks / Impressionen
   - **Position:** Durchschnittliche Google-Position

### 7.2 Top-Keywords finden

1. Leistungsbericht
2. Tab: **"Suchanfragen"**
3. Sortieren nach: **Impressionen** oder **Klicks**

Sie sehen für welche Keywords Sie ranken:
- "gebäudereinigung landshut"
- "büroreinigung regensburg"
- "industriereinigung niederbayern"
- etc.

### 7.3 Optimierungspotenziale

**Niedrige CTR (< 2%):**
- Meta-Descriptions verbessern
- Title-Tags optimieren

**Hohe Impressionen, niedrige Klicks:**
- Snippet interessanter gestalten
- Position verbessern (besserer Content)

**Position 11-20 (Seite 2):**
- Content ausbauen
- Interne Verlinkung verbessern
- Backlinks aufbauen

---

## Schritt 8: Fehler beheben

### 8.1 Abdeckungsbericht

1. Linkes Menü → **"Abdeckung"**
2. Sehen Sie:
   - ✅ **Gültig:** URLs erfolgreich indexiert
   - ⚠️ **Warnung:** URLs mit Problemen
   - ❌ **Fehler:** URLs nicht indexierbar
   - 📋 **Ausgeschlossen:** URLs absichtlich nicht indexiert

### 8.2 Häufige Fehler

**"Weitergeleitet" (301/302):**
- ✅ Normal bei URL-Änderungen
- Prüfen ob Ziel-URL korrekt

**"Nicht gefunden (404)":**
- ❌ Broken Links
- Defekte Links reparieren oder entfernen

**"Blockiert durch robots.txt":**
- ⚠️ Prüfen ob absichtlich
- robots.txt anpassen falls nötig

**"Keine Indexierung, noindex":**
- ⚠️ Meta-Tag blockiert Indexierung
- Entfernen falls nicht gewollt

### 8.3 Mobile-Nutzerfreundlichkeit

1. Linkes Menü → **"Mobile Usability"**
2. Prüfen auf Fehler:
   - Text zu klein
   - Klickbare Elemente zu nah beieinander
   - Content breiter als Bildschirm

✅ **FIMI-Service:** Sollte 0 Fehler zeigen (responsive Design)

---

## Schritt 9: Core Web Vitals

### 9.1 Was sind Core Web Vitals?

Google-Ranking-Faktoren für User Experience:

- **LCP (Largest Contentful Paint):** Ladegeschwindigkeit
  - Ziel: < 2.5s
- **FID (First Input Delay):** Interaktivität
  - Ziel: < 100ms
- **CLS (Cumulative Layout Shift):** Visuelle Stabilität
  - Ziel: < 0.1

### 9.2 In GSC prüfen

1. Linkes Menü → **"Core Web Vitals"**
2. Zwei Berichte:
   - **Mobile:** Smartphone-Performance
   - **Desktop:** Desktop-Performance

Kategorien:
- ✅ **Gut:** Grün - keine Aktion nötig
- ⚠️ **Verbesserung erforderlich:** Orange - optimieren
- ❌ **Schlecht:** Rot - dringend beheben

### 9.3 Performance verbessern

Bei schlechten Werten:
1. PageSpeed Insights nutzen: https://pagespeed.web.dev
2. URL testen
3. Empfehlungen befolgen

**Häufige Fixes:**
- Bilder komprimieren
- CSS/JS minifizieren
- Caching aktivieren
- ✅ Bei FIMI: Bereits optimiert via Next.js!

---

## Schritt 10: Regelmäßige Wartung

### Wöchentlich (erste Wochen):
- [ ] Indexierungsstatus prüfen
- [ ] Neue Fehler checken
- [ ] Manuelle Indexierung für neue Seiten

### Monatlich (danach):
- [ ] Performance-Report analysieren
- [ ] Top-Keywords tracken
- [ ] CTR-Optimierung
- [ ] Fehler beheben

### Quartalsweise:
- [ ] Content-Strategie anpassen basierend auf Keywords
- [ ] Seiten mit niedriger Performance überarbeiten
- [ ] Neue Zielgruppen-Keywords recherchieren

---

## Troubleshooting

### Problem: "Domain kann nicht verifiziert werden"

**Lösung 1:** TXT-Record korrekt?
- Prüfen mit: https://dnschecker.org
- Type: TXT wählen
- Domain eingeben

**Lösung 2:** DNS propagiert?
- Warten Sie 1-24 Stunden
- Erneut versuchen

**Lösung 3:** TXT-Record richtig formatiert?
- Keine Leerzeichen
- Keine Anführungszeichen (außer vom DNS-Provider gefordert)

### Problem: "Sitemap kann nicht gelesen werden"

**Lösung 1:** URL korrekt?
```
https://fimi-service.de/sitemap.xml
```
Test im Browser: URL öffnen, XML sollte sichtbar sein

**Lösung 2:** robots.txt blockiert?
Prüfen: https://fimi-service.de/robots.txt
Sollte enthalten:
```
Sitemap: https://fimi-service.de/sitemap.xml
```

**Lösung 3:** Sitemap valide?
Testen auf: https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Problem: "URLs werden nicht indexiert"

**Ursachen:**
1. ⏰ **Geduld:** Neue Sites brauchen 1-4 Wochen
2. 🚫 **noindex Tag:** Meta-Tag blockiert (unwahrscheinlich bei FIMI)
3. 📄 **Thin Content:** Zu wenig Text auf Seite
4. 🔗 **Keine internen Links:** Seite nicht verlinkt
5. ⚠️ **Technischer Fehler:** 404, 500 Error

**Lösungen:**
- Warten Sie 2-4 Wochen
- Manuelle Indexierung beantragen
- Mehr Content hinzufügen (min. 300 Wörter)
- Interne Verlinkung verbessern

### Problem: "Core Web Vitals schlecht"

**Wenn trotz Optimierung:**
1. Hosting-Performance prüfen (Vercel sollte gut sein)
2. Bilder weiter optimieren
3. Lazy Loading für Below-the-Fold Content
4. Font-Loading optimieren

✅ **FIMI-Service:** Already optimized via Next.js Image & Performance Best Practices

---

## Zusammenfassung

### ✅ Checkliste:
- [ ] Google Account erstellt
- [ ] Google Search Console geöffnet
- [ ] Domain-Property hinzugefügt
- [ ] TXT-Record in DNS eingetragen
- [ ] Inhaberschaft bestätigt
- [ ] Sitemap eingereicht
- [ ] Geografisches Ziel: Deutschland
- [ ] Erste URLs zur Indexierung angefordert

### 📊 Erwartungen:
- **Woche 1:** 5-10 URLs indexiert
- **Woche 2-4:** 20-27 URLs indexiert
- **Monat 2:** Erste Klicks & Impressionen
- **Monat 3:** Regelmäßiger Traffic von Google

### 🎯 Ziele (nach 3 Monaten):
- 100+ Impressionen/Woche
- 10-20 Klicks/Woche
- CTR: 3-5%
- Position: Top 20 für Haupt-Keywords

---

## Weiterführende Ressourcen

**Offizielle Docs:**
- Google Search Console Hilfe: https://support.google.com/webmasters
- Google SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide

**Tools:**
- Google PageSpeed Insights: https://pagespeed.web.dev
- DNS Checker: https://dnschecker.org
- XML Sitemap Validator: https://www.xml-sitemaps.com

**Lernressourcen:**
- Google Search Central: https://developers.google.com/search
- SEO für Anfänger (Deutsch): https://www.sistrix.de/frag-sistrix

---

**Erstellt am:** 23. November 2025
**Für:** FIMI-Service (fimi-service.de)
**Version:** 1.0
**Zeitaufwand:** 30-60 Minuten Setup, dann 10 Min/Woche Monitoring
