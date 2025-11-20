# 🔧 WORKFLOW-PROMPT: FIMI-Service Website Entwicklung

## 🎯 Zweck dieses Dokuments

Diese Datei enthält den **vollständigen Prompt**, den du Claude Code geben kannst, um die FIMI-Service Website zu entwickeln. Der Workflow nutzt Vercel und Git automatisch, sodass du nur in natürlicher Sprache arbeiten musst.

---

## 🚀 Haupt-Prompt für Claude Code

```
Ich möchte die bestehende Website von bgs-gebaeudeservice für einen neuen deutschen Kunden (FIMI-Service) vollständig anpassen. Bitte arbeite nach diesem Workflow:

### PROJEKT-SETUP

1. **Repository-Handling:**
   - Erstelle eine lokale Kopie von /Users/brandea/Desktop/bgs-gebaeudeservice
   - Speichere diese als Backup unter: /Users/brandea/Desktop/bgs-gebaeudeservice-BACKUP
   - Erstelle ein neues Repository: FIMI-Gebaeudereinigung-2.0 in /Users/brandea/Desktop/
   - Initialisiere Git und erstelle Remote-Repository auf GitHub
   - Richte automatisches Deployment mit Vercel ein

2. **Vercel & Git Integration:**
   - Nutze meine Vercel-Tokens für automatisches Deployment
   - Jeder Commit triggert automatisch einen Build
   - Preview-URLs für jede Änderung
   - Main-Branch = Production

3. **Arbeitsweise:**
   - Ich arbeite nur in natürlicher Sprache
   - Du übernimmst alle technischen Tasks
   - Token-Management: Container-basiert (eine Datei pro Sektion)

### KUNDENDATEN (Komplett überschreiben)

**Unternehmen:**
- Firmenname: FIMI-Service
- Inhaber: Ntonalnt Tzoutzis und Ergest Qiraj
- Adresse: Kellerstr. 39, 84036 Landshut
- Telefon: 01747225473
- E-Mail: info@fimi-service.de
- UST-ID: DE347549925

**Corporate Identity:**
- Navy Blau: #012956
- Türkis Grün: #109387

### DIENSTLEISTUNGEN (18 Services in 3 Kategorien)

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

### BRANCHEN (9 B2B-Zielgruppen)

1. Büro/Verwaltung
2. Gesundheit (Praxen, Kliniken, Pflege)
3. Hotellerie & Gastro
4. Bildung (Kita, Schule, Hochschule)
5. Handel & Einkaufszentren
6. Industrie / Produktion
7. Logistik & Automotive
8. Immobilienverwaltungen / Wohnungswirtschaft
9. Öffentliche Hand / Kommunen

### STÄDTE (SEO-Integration statt Landing Pages)

Regensburg, Landshut, Freising, Straubing, Deggendorf, Augsburg, Nürnberg

**SEO-Methode:** Städte werden in Seiten integriert (Schema Markup, lokalisierte Texte), NICHT als separate Landing Pages.

### DESIGN-ANFORDERUNGEN

**Visuell:**
- Moderne, hochwertige 4K-Design-Container
- Hell, sauber, einladend (wie die Dienstleistung selbst)
- Zick-Zack-Layout für Dynamik
- Sticky-Effekte
- B2B-fokussiert: Exklusivität, Professionalität, Seriosität

**Komponenten:**
- Dropdown-Menüs
- Tab-Navigation
- Megamenü mit allen Leistungen
- Sitemap in Navigation
- Kontaktformular im Footer (global auf allen Seiten)
- Separate Kontaktseite

**Navigation-Logik:**
- "Kontakt"-Button (auf allen Seiten): Scrollt zum Footer-Kontaktformular
- "Kontaktieren Sie uns jetzt" (Navigation): Öffnet dedizierte Kontaktseite

**Bilder:**
- Logo: /Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/FIMI-LOGO
- Platzhalter: Unsplash (hochwertig, auch wenn nicht 100% passend)
- Organisation: Public-Ordner → Unterordner pro Seite

### TECHNISCHE ARCHITEKTUR

**Struktur:**
```
FIMI-Gebaeudereinigung-2.0/
├── app/
│   ├── page.tsx (Startseite)
│   ├── dienstleistungen/
│   │   ├── [service-name]/
│   │   │   ├── page.tsx
│   │   │   └── sections/
│   │   │       ├── HeroContainer.tsx
│   │   │       ├── ProblemContainer.tsx
│   │   │       ├── LoesungContainer.tsx
│   │   │       ├── TrustContainer.tsx
│   │   │       ├── FaqContainer.tsx
│   │   │       └── ...
│   ├── branchen/
│   │   └── [branche]/
│   ├── kontakt/
│   └── ...
├── components/
│   ├── navigation/
│   ├── footer/
│   └── shared/
├── public/
│   ├── FIMI-LOGO/
│   ├── home/
│   ├── dienstleistungen/
│   └── branchen/
└── styles/
```

**Container-Konzept:**
Jede Sektion ist eine eigene Datei (z.B. HeroContainer.tsx, ProblemContainer.tsx).
**Vorteil:** Token-Limit-freundlich, modulare Bearbeitung.

### SEO-ANFORDERUNGEN

- SEO-optimierte Texte für jede Seite
- Meta-Tags (Title, Description, Keywords)
- Schema Markup (LocalBusiness, Service, FAQ)
- Google-crawlbar & indexierbar
- Core Web Vitals optimiert
- Sitemap.xml & robots.txt
- Stadt-Integration (strukturierte Daten)

### MARKETING-PSYCHOLOGIE

**B2B-Personas:**
- CFO/Geschäftsführer: Kosten, ROI, Effizienz
- Facility Manager: Zuverlässigkeit, Qualität, Service
- Immobilienverwalter: Flexibilität, Flächenabdeckung

**Psychologische Trigger:**
- Social Proof (Logos, Testimonials)
- Autorität (Zertifikate, Erfahrung)
- Knappheit ("Begrenzte Kapazitäten")
- Vertrauen (Transparenz, klare Prozesse)
- Exklusivität ("Premium-Service")

### 3-PHASEN-UMSETZUNG

**Phase 1: Setup & Struktur**
- Repository erstellen
- CI-Farben integrieren
- Navigation & Footer
- Vercel Deployment

**Phase 2: Content & Design**
- Alle 18 Dienstleistungsseiten
- Alle 9 Branchenseiten
- Startseite, Kontakt, Über Uns
- SEO-Texte & Bilder

**Phase 3: SEO & Finalisierung**
- Meta-Tags, Schema Markup
- Performance-Optimierung
- Testing & Launch

### ARBEITSWEISE

1. Arbeite Container für Container (Token-Management)
2. Committe jeden Change mit klaren Messages
3. Nutze Vercel für automatisches Deployment
4. Ich gebe Feedback in natürlicher Sprache
5. Du setzt um, testest, deployed

Verstanden? Dann lass uns mit Phase 1 starten!
```

---

## 🔑 DEINE ECHTEN TOKENS (Verwende diese!)

### ✅ Vercel Credentials
```
VERCEL_TOKEN=your_vercel_token_here
VERCEL_PROJECT_ID=your_project_id_here
VERCEL_ORG_ID=your_org_id_here
```

### ✅ GitHub Token
```
GITHUB_TOKEN=your_github_token_here
```

### ✅ Resend API Key (E-Mail)
```
RESEND_API_KEY=your_resend_api_key_here
```

### ✅ Google Maps API Key
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

---

## 🔑 Vercel & Git Token-Integration

### Vercel Setup

**1. Vercel-Token generieren:**
- Gehe zu: https://vercel.com/account/tokens
- Erstelle neues Token: "FIMI-Service-Deployment"
- Kopiere Token (wird nur einmal angezeigt!)

**2. Token in Claude Code verwenden:**
```bash
# Vercel CLI installieren
npm i -g vercel

# Login mit Token
vercel login --token YOUR_VERCEL_TOKEN

# Projekt verknüpfen
vercel link

# Deployment
vercel --prod
```

**3. Automatisches Deployment:**
Vercel erkennt Git-Pushes automatisch und deployed:
- Push zu `main` → Production
- Push zu anderen Branches → Preview

---

### GitHub Setup

**1. GitHub Token generieren:**
- Gehe zu: https://github.com/settings/tokens
- Erstelle "Fine-grained personal access token"
- Permissions:
  - Repository: Read & Write
  - Contents: Read & Write
  - Metadata: Read

**2. Repository erstellen:**
```bash
# Neues Repository initialisieren
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0
git init

# Remote hinzufügen
git remote add origin https://YOUR_TOKEN@github.com/USERNAME/FIMI-Gebaeudereinigung-2.0.git

# Erster Commit
git add .
git commit -m "Initial commit: FIMI-Service Website Setup"
git branch -M main
git push -u origin main
```

**3. Vercel mit GitHub verknüpfen:**
- Vercel Dashboard → "Add New Project"
- "Import Git Repository" → FIMI-Gebaeudereinigung-2.0
- Framework: Next.js
- Root Directory: ./
- Build Command: `next build`
- Output Directory: `.next`
- Environment Variables: (falls nötig)

---

## 🤖 Claude Code Workflow-Instruktionen

### Wie Claude Code arbeiten soll:

**1. Repository-Management:**
```
- Automatisch Git-Commits erstellen nach jeder Änderung
- Commit-Messages: Klar, beschreibend, konventionell
- Beispiel: "feat: Add HeroContainer for Büroreinigung page"
- Automatisch pushen zu GitHub
```

**2. Vercel-Deployment:**
```
- Nach jedem Push zu main → Production-Deployment
- Preview-URLs für Feature-Branches
- Build-Logs automatisch prüfen
- Bei Fehlern: Automatisch fixen
```

**3. Token-Management:**
```
- Container für Container bearbeiten
- Nie ganze Seiten auf einmal (Token-Limit!)
- Beispiel: "Bearbeite jetzt den HeroContainer für Büroreinigung"
- Nach Fertigstellung: Nächster Container
```

**4. Natürliche Sprache:**
```
Du sagst: "Erstelle jetzt die Büroreinigung-Seite"
Claude macht:
1. Ordner erstellen: app/dienstleistungen/bueroreinigung/
2. page.tsx erstellen
3. sections/ Ordner erstellen
4. HeroContainer.tsx erstellen
5. Git commit & push
6. Vercel deployment triggern
7. Feedback geben: "HeroContainer erstellt, deployed unter: [URL]"
```

---

## 📝 Beispiel-Workflow (Phase 1)

**Du sagst:**
```
Starte Phase 1: Erstelle das Repository und richte Vercel ein.
```

**Claude macht:**
1. Backup von bgs-gebaeudeservice erstellen
2. Neues Projekt FIMI-Gebaeudereinigung-2.0 erstellen
3. Git initialisieren
4. GitHub-Repository erstellen
5. Vercel-Projekt erstellen & verknüpfen
6. CI-Farben in globals.css integrieren
7. Logo kopieren nach public/FIMI-LOGO/
8. Navigation-Component mit Megamenü erstellen
9. Footer-Component mit Kontaktformular erstellen
10. Startseite (placeholder) erstellen
11. Alles committen & pushen
12. Vercel-Deployment starten
13. **Feedback:** "Phase 1 abgeschlossen! Website live unter: [URL]"

**Du machst:** Nichts! Nur Feedback geben.

---

## 🎯 Token-Management-Strategie

### Problem
Große Dateien = Token-Limit erreicht = Claude kann nicht mehr arbeiten

### Lösung
**Container-Konzept:**
- Jede Sektion = Eigene Datei
- Beispiel: `HeroContainer.tsx`, `ProblemContainer.tsx`, etc.
- Pro Session: 1-3 Container bearbeiten

### Workflow
```
Session 1: HeroContainer + ProblemContainer (Büroreinigung)
Session 2: LoesungContainer + TrustContainer (Büroreinigung)
Session 3: FaqContainer + FinalCtaContainer (Büroreinigung)
Session 4: HeroContainer + ProblemContainer (Unterhaltsreinigung)
...
```

**Vorteil:**
- Kein Token-Limit
- Präzise Bearbeitung
- Bessere Code-Qualität

---

## ✅ Checkliste: Vor dem Start

- [ ] Vercel-Token generiert
- [ ] GitHub-Token generiert
- [ ] bgs-gebaeudeservice vorhanden unter /Users/brandea/Desktop/
- [ ] FIMI-Logo vorhanden unter /Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/FIMI-LOGO/
- [ ] Alle Kundendaten notiert (siehe Roadmap)
- [ ] Phase-Dokumente gelesen (Phase 1, 2, 3)

---

## 🚀 Los geht's!

**Dein erster Prompt an Claude Code:**
```
Ich möchte mit Phase 1 starten. Erstelle das Repository FIMI-Gebaeudereinigung-2.0, richte Git und Vercel ein, und baue die Grundstruktur mit Navigation und Footer. Arbeite nach dem Workflow in 01-WORKFLOW-PROMPT.md.
```

**Claude wird:**
1. Alles automatisch aufsetzen
2. Git-Commits erstellen
3. Vercel-Deployment starten
4. Dir Feedback geben

**Du musst:**
- Nur in natürlicher Sprache kommunizieren
- Feedback geben
- Nächste Schritte anstoßen

---

**Erstellt am:** 2025-11-20
**Projekt:** FIMI-Service Website Migration
**Version:** 1.0
**Workflow:** Automatisiert mit Vercel & Git
