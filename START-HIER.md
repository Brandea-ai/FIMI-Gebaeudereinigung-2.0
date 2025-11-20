# 🚀 START-PROMPT für FIMI-Service Website

## 📁 Arbeitsverzeichnis
Dieser Ordner (`/Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/`) ist dein **Projekt-Hub**.

Hier wird alles erstellt:
- ✅ Next.js Projekt
- ✅ Git Repository
- ✅ Alle Code-Dateien
- ✅ Public-Ordner mit Bildern
- ✅ Components & Sections

---

## 🎯 KOPIERE DIESEN PROMPT UND STARTE!

```
Hallo Claude Code!

Ich möchte die FIMI-Service Website erstellen. Bitte arbeite nach folgendem Workflow:

---

### 🔧 TOKENS & CREDENTIALS

Nutze diese Tokens aus meiner .env.local:

VERCEL_TOKEN=your_vercel_token_here
VERCEL_PROJECT_ID=your_project_id_here
VERCEL_ORG_ID=your_org_id_here
GITHUB_TOKEN=your_github_token_here
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

---

### 📂 PROJEKT-SETUP

1. **Arbeitsverzeichnis:**
   - Arbeite KOMPLETT in: /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/
   - Alle Code-Dateien kommen hier rein
   - Alle MD-Dateien bleiben hier

2. **Backup erstellen:**
   - Kopiere /Users/brandea/Desktop/bgs-gebaeudeservice
   - Nach: /Users/brandea/Desktop/bgs-gebaeudeservice-BACKUP

3. **Next.js Projekt:**
   - Erstelle neues Next.js 14+ Projekt (TypeScript, Tailwind, App Router)
   - DIREKT in /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/
   - NICHT in einem Unterordner!

4. **Git Repository:**
   - Initialisiere Git im Projekt
   - Erstelle GitHub-Repository: FIMI-Gebaeudereinigung-2.0
   - Nutze: GITHUB_TOKEN (aus .env.local)

5. **Vercel Deployment:**
   - Verknüpfe mit Vercel
   - Nutze: VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_ORG_ID (aus .env.local)
   - Automatisches Deployment bei Push zu main

---

### 🎨 KUNDENDATEN (Komplett neue CI!)

**Firma:**
- Name: FIMI-Service
- Inhaber: Ntonalnt Tzoutzis und Ergest Qiraj
- Adresse: Kellerstr. 39, 84036 Landshut
- Telefon: 01747225473
- E-Mail: info@fimi-service.de
- UST-ID: DE347549925

**Corporate Identity:**
- Navy Blau: #012956
- Türkis Grün: #109387

---

### 🧹 DIENSTLEISTUNGEN (18 Services)

**Kategorie 1: Gewerbliche Objektreinigung**
1. Büroreinigung
2. Unterhaltsreinigung
3. Baureinigung
4. Hallenreinigung
5. Parkplatzreinigung
6. Fensterreinigung

**Kategorie 2: Industrielle & Spezialreinigung**
7. Industriereinigung
8. Maschinenreinigung
9. Fassadenreinigung
10. Tiefgaragenreinigung
11. Außenanlagenpflege
12. Sonderleistungen

**Kategorie 3: Facility Management & Services**
13. Facility Management
14. Hausmeisterservice
15. Winterdienst
16. Beschaffungsmanagement

---

### 🏢 BRANCHEN (9 B2B-Zielgruppen)

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

### 🏙️ STÄDTE (SEO-Integration, KEINE Landing Pages!)

Regensburg, Landshut, Freising, Straubing, Deggendorf, Augsburg, Nürnberg

**Methode:** Städte in Seiten integrieren (Schema Markup, SEO-Texte)

---

### 🎯 DESIGN-ANFORDERUNGEN

1. **Visuell:**
   - Modern, hochwertig, 4K-Design
   - Hell, sauber, einladend
   - Zick-Zack-Layouts
   - Sticky-Effekte
   - B2B-Fokus: Exklusivität, Professionalität, Seriosität

2. **Komponenten:**
   - Megamenü mit allen Dienstleistungen
   - Dropdown-Menüs
   - Tab-Navigation
   - Kontaktformular im Footer (global)
   - Separate Kontaktseite

3. **Navigation:**
   - "Kontakt"-Button → Scrollt zu Footer-Formular
   - "Kontaktieren Sie uns jetzt" → Öffnet Kontaktseite

4. **Bilder:**
   - Logo von: /Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/FIMI-LOGO
   - Platzhalter: Unsplash (hochwertig)
   - Organisation: public/[seite]/[bilder]

---

### 🏗️ TECHNISCHE ARCHITEKTUR

**Container-Konzept** (WICHTIG für Token-Management!):

Jede Seite besteht aus EINZELNEN Container-Dateien:
- HeroContainer.tsx
- ProblemContainer.tsx
- LoesungContainer.tsx
- ProcessContainer.tsx
- BenefitsContainer.tsx
- TrustContainer.tsx
- FaqContainer.tsx
- FinalCtaContainer.tsx

**Vorteil:** Wir können Container für Container bearbeiten (Token-Limit-freundlich!)

**Struktur:**
```
FIMI-Gebaeudereinigung-2.0/
├── app/
│   ├── page.tsx
│   ├── dienstleistungen/
│   │   ├── bueroreinigung/
│   │   │   ├── page.tsx
│   │   │   └── sections/
│   │   │       ├── HeroContainer.tsx
│   │   │       ├── ProblemContainer.tsx
│   │   │       └── ...
│   ├── branchen/
│   └── kontakt/
├── components/
│   ├── navigation/
│   ├── footer/
│   └── shared/
├── public/
│   ├── FIMI-LOGO/
│   ├── home/
│   └── dienstleistungen/
└── [MD-Dateien bleiben hier]
```

---

### 🔥 SEO-ANFORDERUNGEN

- SEO-optimierte Texte (Google-crawlbar)
- Meta-Tags (Title, Description, Keywords)
- Schema Markup (LocalBusiness, Service, FAQ)
- Sitemap.xml & robots.txt
- Core Web Vitals optimiert
- Stadt-Integration (strukturierte Daten)

---

### 🎯 MARKETING-PSYCHOLOGIE

**B2B-Personas ansprechen:**
- CFO: Kosten, ROI, Effizienz
- Facility Manager: Zuverlässigkeit, Qualität
- Immobilienverwalter: Flexibilität, Flächenabdeckung

**Trigger:**
- Social Proof (Logos, Testimonials)
- Autorität (Zertifikate, Erfahrung)
- Knappheit ("Begrenzte Kapazitäten")
- Vertrauen (Transparenz)
- Exklusivität ("Premium-Service")

---

### 📋 3-PHASEN-WORKFLOW

**PHASE 1: Setup & Struktur** (JETZT STARTEN!)
1. Backup von bgs-gebaeudeservice erstellen
2. Next.js Projekt in /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/ erstellen
3. Git initialisieren & GitHub-Repository erstellen
4. Vercel verknüpfen & deployen
5. CI-Farben (#012956, #109387) integrieren
6. Logo kopieren & integrieren
7. Navigation mit Megamenü erstellen
8. Footer mit Kontaktformular erstellen
9. Startseite (Placeholder) erstellen
10. Alles committen & deployen

**PHASE 2: Content & Design** (Danach)
- Startseite vollständig
- Alle 18 Dienstleistungsseiten (Container für Container!)
- Alle 9 Branchenseiten
- Kontaktseite
- Über Uns
- SEO-Texte & Bilder

**PHASE 3: SEO & Finalisierung** (Zum Schluss)
- Meta-Tags
- Schema Markup
- Stadt-Integration
- Performance-Optimierung
- Testing & Launch

---

### ✅ WAS ICH VON DIR ERWARTE

1. **Arbeite komplett in /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/**
2. **Nutze die Tokens** (VERCEL_TOKEN, GITHUB_TOKEN, etc.)
3. **Erstelle automatisch Git-Commits** bei jeder Änderung
4. **Deploye automatisch** zu Vercel bei jedem Push
5. **Arbeite Container für Container** (Token-Management!)
6. **Gib mir Feedback** nach jedem Schritt
7. **Ich arbeite nur in natürlicher Sprache** - du machst den Rest!

---

### 🚀 STARTE JETZT MIT PHASE 1!

Beginne mit:
1. Backup erstellen
2. Next.js Projekt aufsetzen
3. Git & GitHub einrichten
4. Vercel deployen
5. Grundstruktur (Navigation, Footer, CI-Farben, Logo)
6. Startseite (Placeholder)

WICHTIG: Arbeite IMMER in /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/

Los geht's! 🎉
```

---

## 📚 Dokumentation

Alle Details findest du in den MD-Dateien in diesem Ordner:

1. **00-ROADMAP-FIMI-Service.md** - Gesamtübersicht
2. **01-WORKFLOW-PROMPT.md** - Workflow & Tokens
3. **02-PHASE-1-Setup-und-Struktur.md** - Phase 1 Details
4. **03-PHASE-2-Content-und-Design.md** - Phase 2 Details
5. **04-PHASE-3-SEO-und-Finalisierung.md** - Phase 3 Details
6. **05-TOKEN-SETUP-ANLEITUNG.md** - Token-Verwaltung

---

## 🎯 Ready?

**Kopiere den Prompt oben und starte Claude Code!**

Viel Erfolg! 🚀
