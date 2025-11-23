# FIMI-SERVICE WEBSITE - KOMPLETTE ROADMAP

## 🚨 KRITISCHE FEHLER (PRIO 1)

### 1. Parkplatzreinigung-Seite fehlt
- [ ] Seite `/business/parkplatzreinigung/page.tsx` erstellen
- [ ] Vollständig ausarbeiten wie andere Service-Seiten
- [ ] GRÜN-Konzept anwenden
- [ ] SEO optimieren

### 2. Sonderleistungen unvollständig
- [ ] Seite `/basis/sonderleistungen/page.tsx` vollständig ausarbeiten
- [ ] Gleiche Qualität wie andere Service-Seiten
- [ ] Bilder, FAQ, CTA hinzufügen

### 3. Service-Regionen auf Homepage
- [ ] München fehlt in der Liste (Zeile 302-309 in app/page.tsx)
- [ ] Farbe bg-white statt bg-primary/5 (Konsistenz)

---

## 🎨 DESIGN VERBESSERUNGEN (PRIO 2)

### 4. Logo-Updates
- [ ] Footer: Neues FIMI-Logo verwenden (nicht Hero-Logo)
- [ ] Navigation Logo: 3x größer machen
- [ ] Footer Logo: 3x größer machen
- [ ] Logo-Datei: `/public/logo.png` aktualisieren

### 5. Footer Premium-Design
- [ ] Texte besser lesbar machen (text-slate-300 statt text-slate-400)
- [ ] Überschriften größer und prominenter
- [ ] Links mit Hover-Effekten hervorheben
- [ ] Mehr Padding/Spacing
- [ ] Service-Regionen Liste im Footer hinzufügen

### 6. Navigation Premium-Design
- [ ] Links horizontal MITTIG platzieren
- [ ] Mehr Spacing zwischen Links
- [ ] Hover-Effekte verbessern
- [ ] Dropdown-Menü hochwertiger gestalten
- [ ] Sticky Navigation mit Blur-Effekt

---

## 📐 4K FULL-WIDTH LAYOUT (PRIO 3)

### 7. Container-Breite maximieren
- [ ] `container` class von max-w-7xl auf max-w-[1920px] ändern
- [ ] Schmale Ränder: px-6 lg:px-12
- [ ] Volle Breite für Hero-Sections
- [ ] Apple-Style: Großzügige White-Space

### 8. Responsives 4K Design
- [ ] Alle Sections: py-24 md:py-32 lg:py-40
- [ ] Texte größer auf 4K: text-7xl, text-8xl für Überschriften
- [ ] Bilder: Full-Width mit object-cover
- [ ] Grid-Layouts: 4 Spalten auf 4K

---

## ✅ QUALITÄTSSICHERUNG (PRIO 4)

### 9. Alle 34 Seiten testen
- [ ] Homepage
- [ ] Business-Seiten (10): Büro, Industrie, Fassade, Fenster, Hallen, Maschinen, Bau, Außen, Facility, Tiefgarage, **PARKPLATZ**
- [ ] Basis-Seiten (5): Unterhalt, Hausmeister, Winter, Beschaffung, Sonder
- [ ] Blog-Seiten (5): Hauptseite + 4 Artikel
- [ ] Statische Seiten (3): Über uns, Referenzen, Kontakt
- [ ] Info-Seiten (2): Impressum, Datenschutz

### 10. Fehlerprüfung
- [ ] Alle Links funktionieren
- [ ] Alle Bilder laden
- [ ] Keine 404-Fehler
- [ ] Keine Console-Errors
- [ ] Build erfolgreich (34 Seiten)

---

## 📊 CHECKLISTE

**Total Tasks:** 31
**Geschätzte Zeit:** 2-3 Stunden
**Priorität:** KRITISCH

---

## 🚀 UMSETZUNGS-REIHENFOLGE

1. Parkplatzreinigung-Seite erstellen ✅
2. Sonderleistungen ausarbeiten ✅
3. München zur Homepage hinzufügen ✅
4. Neues Logo implementieren ✅
5. Footer Premium-Design ✅
6. Navigation Premium-Design ✅
7. 4K Full-Width Layout ✅
8. Alle Seiten testen ✅
9. Build & Push ✅
