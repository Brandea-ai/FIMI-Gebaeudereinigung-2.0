# 🎯 ROADMAP: FIMI-Service Website Migration & Entwicklung

## 📋 Projekt-Übersicht

**Ausgangslage:**
Bestehende Website `bgs-gebaeudeservice` (Schweizer Reinigungsunternehmen) soll für deutschen Kunden FIMI-Service vollständig angepasst werden.

**Ziel:**
Hochwertige, SEO-optimierte B2B-Website für FIMI-Service mit modernem Design, psychologisch optimiertem Marketing und professioneller Darstellung.

---

## 🏢 Kundendaten FIMI-Service

### Unternehmen
- **Firmenname:** FIMI-Service
- **Inhaber:** Ntonalnt Tzoutzis und Ergest Qiraj
- **Adresse:** Kellerstr. 39, 84036 Landshut
- **Telefon:** 01747225473
- **E-Mail:** info@fimi-service.de
- **UST-ID:** DE347549925

### Corporate Identity
- **Primärfarbe (Navy Blau):** #012956
- **Sekundärfarbe (Türkis Grün):** #109387
- **Markenwerte:** Exklusivität, Professionalität, Seriosität, Hochwertigkeit
- **Zielgruppe:** B2B (Facility Manager, Immobilienverwalter, Unternehmen)

---

## 🎨 Design-Anforderungen

### Visuelles Konzept
- ✅ Moderne, hochwertige 4K-Design-Container
- ✅ Helle, saubere, einladende Ästhetik
- ✅ Zick-Zack-Layout für dynamische Präsentation
- ✅ Sticky-Effekte für bessere UX
- ✅ Professionelle Unsplash-Platzhalterbilder
- ✅ Exklusive B2B-Ansprache

### UI-Komponenten
- ✅ Dropdown-Menüs
- ✅ Tab-Navigation
- ✅ Megamenü mit allen Leistungen
- ✅ Sitemap in Navigation
- ✅ Kontaktformular im Footer (global)
- ✅ Separate Kontaktseite

### Navigation-Logik
- **Kontakt-Button (auf allen Seiten):** Scrollt zum Footer-Kontaktformular
- **"Kontaktieren Sie uns jetzt" (Navigation):** Führt zur dedizierten Kontaktseite

---

## 🏗️ Technische Architektur

### Projektstruktur
```
FIMI-Gebaeudereinigung-2.0/
├── app/
│   ├── page.tsx (Startseite)
│   ├── dienstleistungen/
│   │   ├── bueroreinigung/
│   │   │   ├── page.tsx
│   │   │   └── sections/
│   │   │       ├── HeroContainer.tsx
│   │   │       ├── ProblemContainer.tsx
│   │   │       ├── LoesungContainer.tsx
│   │   │       ├── TrustContainer.tsx
│   │   │       ├── FaqContainer.tsx
│   │   │       └── ...
│   │   ├── unterhaltsreinigung/
│   │   ├── baureinigung/
│   │   └── ... (alle Dienstleistungen)
│   ├── branchen/
│   │   ├── buero-verwaltung/
│   │   ├── gesundheit/
│   │   └── ... (alle Branchen)
│   ├── kontakt/
│   │   └── page.tsx
│   └── ... (weitere Seiten)
├── components/
│   ├── navigation/
│   │   ├── Header.tsx
│   │   ├── MegaMenu.tsx
│   │   └── Sitemap.tsx
│   ├── footer/
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   └── shared/
├── public/
│   ├── FIMI-LOGO/
│   │   └── ... (Logos)
│   ├── home/
│   │   └── ... (Bilder für Startseite)
│   ├── dienstleistungen/
│   │   ├── bueroreinigung/
│   │   ├── unterhaltsreinigung/
│   │   └── ... (Bilder pro Dienstleistung)
│   └── branchen/
│       └── ... (Bilder pro Branche)
└── styles/
    └── globals.css
```

### Container-Konzept
**Jede Sektion = Eigene Datei**
- `HeroContainer.tsx` - Header mit Hauptbild
- `ProblemContainer.tsx` - Problemstellung
- `LoesungContainer.tsx` - Lösungsansatz
- `TrustContainer.tsx` - Vertrauenselemente (Logos, Testimonials)
- `FaqContainer.tsx` - FAQ-Sektion
- `ProcessContainer.tsx` - Ablauf/Prozess
- `BenefitsContainer.tsx` - Vorteile
- `FinalCtaContainer.tsx` - Abschließender Call-to-Action

**Vorteil:** Token-Limit-freundlich, modulare Bearbeitung möglich

---

## 🛠️ Dienstleistungen

### KATEGORIE 1: Gewerbliche Objektreinigung
1. Büroreinigung
2. Unterhaltsreinigung
3. Baureinigung
4. Hallenreinigung
5. Parkplatzreinigung
6. Fensterreinigung

### KATEGORIE 2: Industrielle & Spezialreinigung
1. Industriereinigung
2. Maschinenreinigung
3. Fassadenreinigung
4. Tiefgaragenreinigung
5. Außenanlagenpflege
6. Sonderleistungen

### KATEGORIE 3: Facility Management & Services
1. Facility Management
2. Hausmeisterservice
3. Winterdienst
4. Beschaffungsmanagement

---

## 🏙️ Städte & SEO-Strategie

### Alt (Schweiz - wird entfernt)
- ❌ Zürich, Luzern, Zug (separate Landing Pages)

### Neu (Deutschland - integriert)
- ✅ Regensburg
- ✅ Landshut
- ✅ Freising
- ✅ Straubing
- ✅ Deggendorf
- ✅ Augsburg
- ✅ Nürnberg

**SEO Best Practice:** Städte werden in Seite integriert (nicht als separate Landing Pages), z.B.:
- Schema Markup mit Servicegebiet
- "Wir bieten [Dienstleistung] in Landshut, Regensburg, ..." Texte
- Lokalisierte Meta-Descriptions
- Strukturierte Daten für lokale Suchanfragen

---

## 🎯 Branchen

1. Büro/Verwaltung
2. Gesundheit (Praxen, Kliniken, Pflege)
3. Hotellerie & Gastro
4. Bildung (Kita, Schule, Hochschule)
5. Handel & Einkaufszentren
6. Industrie / Produktion
7. Logistik & Automotive
8. Immobilienverwaltungen / Wohnungswirtschaft
9. Öffentliche Hand / Kommunen

---

## 🚀 3-Phasen-Umsetzung

### Phase 1: Setup & Struktur (Foundation)
**Ziel:** Technische Basis schaffen
- Repository-Setup (bgs-gebaeudeservice → FIMI-Gebaeudereinigung-2.0)
- Ordnerstruktur erstellen
- CI-Farben global integrieren
- Logo-Integration
- Navigation & Footer aufbauen
- Kontaktformular (Footer)
- Vercel/Git Deployment-Pipeline

**Deliverables:**
- ✅ Funktionierende Repository
- ✅ Globale Components (Header, Footer, Navigation)
- ✅ CI/CD-Pipeline aktiv

---

### Phase 2: Content & Design (Core)
**Ziel:** Alle Seiten mit Inhalten füllen
- Startseite komplett
- Alle 18 Dienstleistungsseiten (mit Container-Sektionen)
- Alle 9 Branchenseiten
- Kontaktseite
- Über Uns / Team
- SEO-Texte für jede Seite
- Unsplash-Bilder integrieren
- Zick-Zack-Layouts implementieren
- Sticky-Effekte

**Deliverables:**
- ✅ Vollständiger Content auf allen Seiten
- ✅ Responsive Design
- ✅ Marketing-Psychologie integriert

---

### Phase 3: SEO & Finalisierung (Optimization)
**Ziel:** Google-Optimierung & Launch
- Meta-Tags für alle Seiten
- Schema Markup (LocalBusiness, Service, FAQ)
- Sitemap.xml
- Robots.txt
- Stadt-Integration (SEO)
- Performance-Optimierung (Core Web Vitals)
- Accessibility (WCAG 2.1)
- Testing (Desktop/Mobile)
- Launch-Checkliste

**Deliverables:**
- ✅ 100% SEO-optimiert
- ✅ Google Search Console Setup
- ✅ Production-Ready

---

## 📊 Marketing & Psychologie

### Eingesetzte Strategien
1. **Social Proof:** Logos bekannter Kunden, Testimonials
2. **Autorität:** Zertifikate, Erfahrung, Expertise
3. **Knappheit:** "Begrenzte Kapazitäten", "Jetzt anfragen"
4. **Vertrauen:** Transparente Preise, klare Prozesse
5. **Exklusivität:** "Premium-Service", "Maßgeschneidert"
6. **Problem-Lösung:** Schmerzpunkte ansprechen → Lösung bieten

### B2B-Personas
- **CFO/Geschäftsführer:** Kosten, ROI, Effizienz
- **Facility Manager:** Zuverlässigkeit, Qualität, Service
- **Immobilienverwalter:** Flexibilität, Flächenabdeckung

---

## ✅ Qualitätskriterien

### Design
- ✅ 4K-Auflösung für alle Designelemente
- ✅ CI-konform (#012956, #109387)
- ✅ Responsive (Mobile-First)
- ✅ Moderne UI/UX (2025 Standards)

### SEO
- ✅ Google Lighthouse Score >90
- ✅ Core Web Vitals: Grün
- ✅ Strukturierte Daten
- ✅ Crawlbar & indexierbar

### Content
- ✅ SEO-optimierte Texte (Keyword-Dichte, LSI)
- ✅ Unique Content (kein Duplicate)
- ✅ Call-to-Actions auf jeder Seite

### Technik
- ✅ Next.js 14+ (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Vercel Deployment
- ✅ Git Version Control

---

## 🔄 Workflow-Prinzipien

### Token-Management
- **Problem:** Große Dateien = Token-Limit
- **Lösung:** Container-Konzept (eine Datei pro Sektion)
- **Vorteil:** Präzise Bearbeitung ohne Limit-Probleme

### Versionskontrolle
- Jeder Change wird committed
- Klare Commit-Messages
- Branch-Strategie (main, develop, feature/*)

### Deployment
- Automatisches Deployment via Vercel
- Preview-URLs für jede Änderung
- Production-Branch = main

---

## 📅 Zeitplan-Empfehlung

**Phase 1:** 1-2 Sessions (Setup & Infrastruktur)
**Phase 2:** 3-5 Sessions (Content & Design)
**Phase 3:** 1-2 Sessions (SEO & Launch)

**Gesamt:** 5-9 Sessions (abhängig von Token-Limits und Umfang)

---

## 🎯 Erfolgskriterien

1. ✅ Alle 18 Dienstleistungen vollständig implementiert
2. ✅ Alle 9 Branchen vollständig implementiert
3. ✅ 7 Städte SEO-optimiert integriert
4. ✅ Google Lighthouse Score >90
5. ✅ Mobile & Desktop perfekt
6. ✅ Kontaktformular funktional
7. ✅ Alle Kundendaten korrekt übernommen
8. ✅ CI (#012956, #109387) durchgängig
9. ✅ Production-Deployment erfolgreich
10. ✅ Google-Indexierung funktioniert

---

## 📞 Nächste Schritte

1. **Workflow-Prompt lesen** (`01-WORKFLOW-PROMPT.md`)
2. **Phase 1 starten** (`02-PHASE-1-Setup-und-Struktur.md`)
3. **Mit natürlicher Sprache arbeiten** (wie gewohnt!)
4. **Token-freundlich:** Container für Container bearbeiten

---

**Erstellt am:** 2025-11-20
**Projekt:** FIMI-Service Website Migration
**Version:** 1.0
