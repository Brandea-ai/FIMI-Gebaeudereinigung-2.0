# 🏗️ PHASE 1: Setup & Struktur

## 🎯 Ziel dieser Phase

Eine solide technische Basis für die FIMI-Service Website schaffen:
- Repository-Setup abgeschlossen
- CI/CD-Pipeline funktioniert
- Grundlegende Navigation & Footer
- Farben & Logo integriert
- Deployment auf Vercel läuft

**Geschätzte Sessions:** 1-2 (abhängig von Komplexität)

---

## ✅ Deliverables Phase 1

1. ✅ Neues Repository: `FIMI-Gebaeudereinigung-2.0`
2. ✅ GitHub-Repository erstellt & verknüpft
3. ✅ Vercel-Deployment aktiv
4. ✅ CI-Farben (#012956, #109387) global integriert
5. ✅ Logo funktioniert (FIMI-LOGO)
6. ✅ Navigation mit Megamenü
7. ✅ Footer mit Kontaktformular
8. ✅ Ordnerstruktur komplett
9. ✅ Startseite (Placeholder)
10. ✅ Git-Workflow funktioniert

---

## 📋 Task-Liste Phase 1

### 1. Repository & Backup

**Task 1.1: Backup erstellen**
```bash
# Bestehende Repository sichern
cp -r /Users/brandea/Desktop/bgs-gebaeudeservice /Users/brandea/Desktop/bgs-gebaeudeservice-BACKUP
```

**Task 1.2: Neues Repository erstellen**
```bash
# Neues Projekt-Verzeichnis
mkdir /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0

# Next.js Projekt initialisieren
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Git initialisieren
git init
git add .
git commit -m "Initial commit: Next.js setup for FIMI-Service"
```

**Task 1.3: GitHub-Repository erstellen**
```bash
# Repository auf GitHub erstellen (via gh CLI oder manuell)
gh repo create FIMI-Gebaeudereinigung-2.0 --public --source=. --remote=origin

# Pushen
git branch -M main
git push -u origin main
```

---

### 2. Vercel-Deployment

**Task 2.1: Vercel-Projekt erstellen**
```bash
# Vercel CLI nutzen
vercel login --token YOUR_VERCEL_TOKEN
vercel link
vercel --prod
```

**Task 2.2: Environment-Variablen**
Falls nötig:
```
# In Vercel Dashboard
NEXT_PUBLIC_SITE_URL=https://fimi-service.de
NEXT_PUBLIC_CONTACT_EMAIL=info@fimi-service.de
NEXT_PUBLIC_CONTACT_PHONE=01747225473
```

**Task 2.3: Automatisches Deployment**
Vercel erkennt Git-Pushes automatisch:
- Push zu `main` → Production
- Push zu `develop` → Preview

---

### 3. CI-Farben & Globals

**Task 3.1: Tailwind-Config anpassen**
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // FIMI CI-Farben
        'fimi-navy': '#012956',
        'fimi-turquoise': '#109387',
      },
    },
  },
  plugins: [],
}
export default config
```

**Task 3.2: Globals.css**
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --fimi-navy: #012956;
  --fimi-turquoise: #109387;
}

/* B2B-Typografie */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  color: #1a1a1a;
  background-color: #ffffff;
}

/* Hochwertige, klare Ästhetik */
h1, h2, h3, h4, h5, h6 {
  color: var(--fimi-navy);
  font-weight: 700;
  letter-spacing: -0.02em;
}

a {
  color: var(--fimi-turquoise);
  transition: all 0.3s ease;
}

a:hover {
  color: var(--fimi-navy);
}
```

---

### 4. Logo-Integration

**Task 4.1: Logo kopieren**
```bash
# Logo von bestehendem Projekt kopieren
cp -r /Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/FIMI-LOGO /Users/brandea/Desktop/FIMI-Gebaeudereinigung-2.0/public/
```

**Task 4.2: Logo-Component**
```typescript
// components/shared/Logo.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/FIMI-LOGO/logo.svg"
        alt="FIMI-Service - Gebäudereinigung Landshut"
        width={180}
        height={60}
        priority
        className="h-auto w-auto"
      />
    </Link>
  )
}
```

---

### 5. Navigation & Megamenü

**Task 5.1: Navigation-Component**
```typescript
// components/navigation/Header.tsx
'use client'

import { useState } from 'react'
import Logo from '../shared/Logo'
import MegaMenu from './MegaMenu'
import Link from 'next/link'

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-fimi-navy hover:text-fimi-turquoise">
            Startseite
          </Link>

          <button
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="text-fimi-navy hover:text-fimi-turquoise"
          >
            Dienstleistungen
          </button>

          <Link href="/branchen" className="text-fimi-navy hover:text-fimi-turquoise">
            Branchen
          </Link>

          <Link href="/ueber-uns" className="text-fimi-navy hover:text-fimi-turquoise">
            Über uns
          </Link>

          <Link
            href="/kontakt"
            className="bg-fimi-turquoise text-white px-6 py-3 rounded-lg hover:bg-fimi-navy transition"
          >
            Kontaktieren Sie uns jetzt
          </Link>
        </div>
      </nav>

      {isMegaMenuOpen && <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />}
    </header>
  )
}
```

**Task 5.2: Megamenü**
```typescript
// components/navigation/MegaMenu.tsx
'use client'

import Link from 'next/link'

const dienstleistungen = {
  'Gewerbliche Objektreinigung': [
    'Büroreinigung',
    'Unterhaltsreinigung',
    'Baureinigung',
    'Hallenreinigung',
    'Parkplatzreinigung',
    'Fensterreinigung',
  ],
  'Industrielle & Spezialreinigung': [
    'Industriereinigung',
    'Maschinenreinigung',
    'Fassadenreinigung',
    'Tiefgaragenreinigung',
    'Außenanlagenpflege',
    'Sonderleistungen',
  ],
  'Facility Management & Services': [
    'Facility Management',
    'Hausmeisterservice',
    'Winterdienst',
    'Beschaffungsmanagement',
  ],
}

interface MegaMenuProps {
  onClose: () => void
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
      className="absolute left-0 w-full bg-white shadow-2xl border-t border-gray-200"
    >
      <div className="container mx-auto px-4 py-8 grid grid-cols-3 gap-8">
        {Object.entries(dienstleistungen).map(([kategorie, services]) => (
          <div key={kategorie}>
            <h3 className="text-fimi-navy font-bold mb-4 text-lg">
              {kategorie}
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/dienstleistungen/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-fimi-turquoise transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### 6. Footer & Kontaktformular

**Task 6.1: Footer-Component**
```typescript
// components/footer/Footer.tsx
import ContactForm from './ContactForm'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="kontakt-footer" className="bg-fimi-navy text-white">
      {/* Kontaktformular-Sektion */}
      <div className="container mx-auto px-4 py-16">
        <ContactForm />
      </div>

      {/* Footer-Infos */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Kontakt */}
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <p>FIMI-Service</p>
              <p>Ntonalnt Tzoutzis & Ergest Qiraj</p>
              <p>Kellerstr. 39</p>
              <p>84036 Landshut</p>
              <p className="mt-2">Tel: 01747225473</p>
              <p>E-Mail: info@fimi-service.de</p>
            </div>

            {/* Dienstleistungen */}
            <div>
              <h4 className="font-bold mb-4">Dienstleistungen</h4>
              <ul className="space-y-2">
                <li><Link href="/dienstleistungen/bueroreinigung">Büroreinigung</Link></li>
                <li><Link href="/dienstleistungen/industriereinigung">Industriereinigung</Link></li>
                <li><Link href="/dienstleistungen/facility-management">Facility Management</Link></li>
              </ul>
            </div>

            {/* Branchen */}
            <div>
              <h4 className="font-bold mb-4">Branchen</h4>
              <ul className="space-y-2">
                <li><Link href="/branchen/buero-verwaltung">Büro & Verwaltung</Link></li>
                <li><Link href="/branchen/gesundheit">Gesundheit</Link></li>
                <li><Link href="/branchen/industrie">Industrie</Link></li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link href="/impressum">Impressum</Link></li>
                <li><Link href="/datenschutz">Datenschutz</Link></li>
                <li><Link href="/agb">AGB</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
            <p>&copy; 2025 FIMI-Service. Alle Rechte vorbehalten. | UST-ID: DE347549925</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Task 6.2: Kontaktformular**
```typescript
// components/footer/ContactForm.tsx
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission (Phase 2)
    console.log('Form submitted:', formData)
    alert('Vielen Dank! Wir melden uns in Kürze bei Ihnen.')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Kontaktieren Sie uns</h2>
      <p className="text-center text-white/80 mb-8">
        Wir erstellen Ihnen ein unverbindliches Angebot
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ihr Name"
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Ihre E-Mail"
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <input
          type="tel"
          placeholder="Ihre Telefonnummer"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <textarea
          placeholder="Ihre Nachricht"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-fimi-turquoise text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-fimi-navy transition"
        >
          Jetzt Anfrage senden
        </button>
      </form>
    </div>
  )
}
```

---

### 7. Ordnerstruktur

**Task 7.1: Vollständige Struktur erstellen**
```bash
# Alle Ordner erstellen
mkdir -p app/dienstleistungen
mkdir -p app/branchen
mkdir -p app/kontakt
mkdir -p app/ueber-uns
mkdir -p components/navigation
mkdir -p components/footer
mkdir -p components/shared
mkdir -p public/FIMI-LOGO
mkdir -p public/home
mkdir -p public/dienstleistungen
mkdir -p public/branchen
```

---

### 8. Startseite (Placeholder)

**Task 8.1: app/page.tsx**
```typescript
// app/page.tsx
import Header from '@/components/navigation/Header'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero-Sektion (Placeholder) */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">
              Professionelle Gebäudereinigung in Landshut
            </h1>
            <p className="text-2xl mb-8">
              Ihr Partner für gewerbliche Reinigungslösungen
            </p>
            <button
              onClick={() => document.getElementById('kontakt-footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-fimi-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-fimi-turquoise hover:text-white transition"
            >
              Jetzt Angebot anfordern
            </button>
          </div>
        </section>

        {/* Weitere Sektionen in Phase 2 */}
      </main>

      <Footer />
    </>
  )
}
```

---

### 9. Layout & Metadata

**Task 9.1: app/layout.tsx**
```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FIMI-Service | Gebäudereinigung Landshut',
  description: 'Professionelle Gebäudereinigung in Landshut und Umgebung. Büroreinigung, Industriereinigung, Facility Management für B2B-Kunden.',
  keywords: 'Gebäudereinigung Landshut, Büroreinigung, Industriereinigung, Facility Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
```

---

### 10. Git & Deployment

**Task 10.1: Committen & Pushen**
```bash
git add .
git commit -m "feat: Phase 1 complete - Setup, Navigation, Footer, CI colors"
git push origin main
```

**Task 10.2: Vercel-Deployment prüfen**
- Vercel deployed automatisch
- Production-URL: https://fimi-gebaeudereinigung-2-0.vercel.app
- Prüfen ob alles funktioniert

---

## ✅ Abnahme-Kriterien Phase 1

Bevor du zu Phase 2 gehst, prüfe:

- [ ] Repository `FIMI-Gebaeudereinigung-2.0` existiert
- [ ] GitHub-Repository verknüpft
- [ ] Vercel-Deployment funktioniert
- [ ] Navigation mit Megamenü funktioniert
- [ ] Footer mit Kontaktformular sichtbar
- [ ] Logo wird angezeigt
- [ ] CI-Farben (#012956, #109387) sind aktiv
- [ ] Startseite (Placeholder) lädt
- [ ] "Kontakt"-Button scrollt zu Footer
- [ ] Responsive Design (Mobile & Desktop)

---

## 🚀 Nächste Schritte

**Nach Abschluss von Phase 1:**
→ Weiter zu **Phase 2: Content & Design** (`03-PHASE-2-Content-und-Design.md`)

---

**Erstellt am:** 2025-11-20
**Projekt:** FIMI-Service Website Migration
**Phase:** 1 von 3
**Status:** Bereit zur Umsetzung
