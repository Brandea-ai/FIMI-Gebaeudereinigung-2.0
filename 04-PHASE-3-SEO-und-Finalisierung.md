# 🚀 PHASE 3: SEO & Finalisierung

## 🎯 Ziel dieser Phase

Website für Google optimieren und produktionsreif machen:
- Meta-Tags für alle Seiten
- Schema Markup (Structured Data)
- Stadt-Integration (SEO Best Practice)
- Sitemap.xml & robots.txt
- Performance-Optimierung (Core Web Vitals)
- Accessibility (WCAG 2.1)
- Testing (Desktop/Mobile)
- Launch-Checkliste

**Geschätzte Sessions:** 1-2

---

## ✅ Deliverables Phase 3

1. ✅ Meta-Tags (Title, Description, Keywords) für alle Seiten
2. ✅ Schema Markup (LocalBusiness, Service, FAQ)
3. ✅ Städte SEO-optimiert integriert (keine Landing Pages!)
4. ✅ Sitemap.xml automatisch generiert
5. ✅ Robots.txt konfiguriert
6. ✅ Google Lighthouse Score >90
7. ✅ Core Web Vitals optimiert
8. ✅ Accessibility (WCAG 2.1 AA)
9. ✅ Mobile & Desktop getestet
10. ✅ Production-Deployment erfolgreich

---

## 🔍 SEO: Meta-Tags

### Task 1: Metadata für alle Seiten

**Beispiel: Büroreinigung**
```typescript
// app/dienstleistungen/bueroreinigung/page.tsx
export const metadata = {
  title: 'Büroreinigung Landshut | Professionelle Reinigung für Büros | FIMI-Service',
  description: 'Professionelle Büroreinigung in Landshut, Regensburg & Umgebung. Täglich, wöchentlich oder nach Bedarf. Zertifiziert, zuverlässig & umweltfreundlich. Jetzt Angebot anfordern!',
  keywords: 'Büroreinigung Landshut, Büroreinigung Regensburg, Unterhaltsreinigung Büro, Gewerbliche Reinigung, FIMI-Service',
  openGraph: {
    title: 'Büroreinigung Landshut | FIMI-Service',
    description: 'Professionelle Büroreinigung in Landshut & Umgebung. Jetzt Angebot anfordern!',
    url: 'https://fimi-service.de/dienstleistungen/bueroreinigung',
    siteName: 'FIMI-Service',
    images: [
      {
        url: '/dienstleistungen/bueroreinigung/hero.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Büroreinigung Landshut | FIMI-Service',
    description: 'Professionelle Büroreinigung in Landshut & Umgebung.',
    images: ['/dienstleistungen/bueroreinigung/hero.jpg'],
  },
}
```

**Wiederhole für alle 18 Dienstleistungen + 9 Branchen + Hauptseiten**

---

## 📊 Schema Markup (Structured Data)

### Task 2: LocalBusiness Schema

**Datei:** `app/components/shared/SchemaMarkup.tsx`
```typescript
// components/shared/SchemaMarkup.tsx
export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FIMI-Service',
    image: 'https://fimi-service.de/FIMI-LOGO/logo.png',
    '@id': 'https://fimi-service.de',
    url: 'https://fimi-service.de',
    telephone: '01747225473',
    email: 'info@fimi-service.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kellerstr. 39',
      addressLocality: 'Landshut',
      postalCode: '84036',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.5371,
      longitude: 12.1503,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/fimiservice',
      'https://www.linkedin.com/company/fimi-service',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Landshut',
      },
      {
        '@type': 'City',
        name: 'Regensburg',
      },
      {
        '@type': 'City',
        name: 'Freising',
      },
      {
        '@type': 'City',
        name: 'Straubing',
      },
      {
        '@type': 'City',
        name: 'Deggendorf',
      },
      {
        '@type': 'City',
        name: 'Augsburg',
      },
      {
        '@type': 'City',
        name: 'Nürnberg',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**In Layout integrieren:**
```typescript
// app/layout.tsx
import SchemaMarkup from '@/components/shared/SchemaMarkup'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <SchemaMarkup />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

### Task 3: Service Schema (pro Dienstleistung)

**Beispiel: Büroreinigung**
```typescript
// app/dienstleistungen/bueroreinigung/sections/ServiceSchema.tsx
export default function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Büroreinigung',
    provider: {
      '@type': 'LocalBusiness',
      name: 'FIMI-Service',
      telephone: '01747225473',
      email: 'info@fimi-service.de',
    },
    areaServed: [
      { '@type': 'City', name: 'Landshut' },
      { '@type': 'City', name: 'Regensburg' },
      { '@type': 'City', name: 'Freising' },
      { '@type': 'City', name: 'Straubing' },
      { '@type': 'City', name: 'Deggendorf' },
      { '@type': 'City', name: 'Augsburg' },
      { '@type': 'City', name: 'Nürnberg' },
    ],
    description: 'Professionelle Büroreinigung für Unternehmen in Landshut und Umgebung.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**In page.tsx integrieren:**
```typescript
// app/dienstleistungen/bueroreinigung/page.tsx
import ServiceSchema from './sections/ServiceSchema'

export default function BueroreinigungPage() {
  return (
    <>
      <ServiceSchema />
      <Header />
      {/* ... */}
    </>
  )
}
```

---

### Task 4: FAQ Schema

**Beispiel: FAQ-Schema für Büroreinigung**
```typescript
// app/dienstleistungen/bueroreinigung/sections/FaqSchema.tsx
export default function FaqSchema() {
  const faqs = [
    {
      question: 'Wie oft sollte eine Büroreinigung durchgeführt werden?',
      answer: 'Das hängt von der Nutzung ab. Wir empfehlen täglich für stark frequentierte Büros, wöchentlich für kleinere Büros.',
    },
    {
      question: 'Welche Reinigungsmittel verwenden Sie?',
      answer: 'Wir verwenden ausschließlich umweltfreundliche Reinigungsmittel, die für Mensch und Umwelt unbedenklich sind.',
    },
    // ... weitere FAQs
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## 🏙️ Stadt-Integration (SEO Best Practice)

### Task 5: Städte NICHT als Landing Pages

**Falsch (Alt):**
```
/stadt/zuerich
/stadt/luzern
/stadt/zug
```

**Richtig (Neu):**
```
Städte werden in Seiten integriert:
- Schema Markup (areaServed)
- SEO-Texte (z.B. "Wir bieten Büroreinigung in Landshut, Regensburg, Freising...")
- Lokalisierte Meta-Descriptions
```

### Beispiel: Stadt-Integration in Büroreinigung

**In HeroContainer.tsx:**
```typescript
<h1 className="text-6xl font-bold mb-6">
  Professionelle Büroreinigung in Landshut, Regensburg & Umgebung
</h1>
```

**In LoesungContainer.tsx:**
```typescript
<p className="text-lg text-gray-600 mb-6">
  FIMI-Service bietet professionelle Büroreinigung in Landshut, Regensburg, Freising,
  Straubing, Deggendorf, Augsburg und Nürnberg. Wir sind Ihr lokaler Partner für
  saubere und hygienische Büroräume.
</p>
```

**In Metadata:**
```typescript
export const metadata = {
  title: 'Büroreinigung Landshut, Regensburg, Freising | FIMI-Service',
  description: 'Professionelle Büroreinigung in Landshut, Regensburg, Freising, Straubing, Deggendorf, Augsburg & Nürnberg. Zuverlässig, zertifiziert, umweltfreundlich.',
}
```

---

## 🗺️ Sitemap & Robots.txt

### Task 6: Sitemap.xml (automatisch)

**Datei:** `app/sitemap.ts`
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fimi-service.de'

  const dienstleistungen = [
    'bueroreinigung',
    'unterhaltsreinigung',
    'baureinigung',
    'hallenreinigung',
    'parkplatzreinigung',
    'fensterreinigung',
    'industriereinigung',
    'maschinenreinigung',
    'fassadenreinigung',
    'tiefgaragenreinigung',
    'aussenanlagenpflege',
    'sonderleistungen',
    'facility-management',
    'hausmeisterservice',
    'winterdienst',
    'beschaffungsmanagement',
  ]

  const branchen = [
    'buero-verwaltung',
    'gesundheit',
    'hotellerie-gastro',
    'bildung',
    'handel-einkaufszentren',
    'industrie-produktion',
    'logistik-automotive',
    'immobilienverwaltungen',
    'oeffentliche-hand',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...dienstleistungen.map((slug) => ({
      url: `${baseUrl}/dienstleistungen/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...branchen.map((slug) => ({
      url: `${baseUrl}/branchen/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]
}
```

---

### Task 7: Robots.txt

**Datei:** `app/robots.ts`
```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://fimi-service.de/sitemap.xml',
  }
}
```

---

## ⚡ Performance-Optimierung

### Task 8: Core Web Vitals

**1. Image-Optimierung**
```typescript
// Alle Images mit next/image optimieren
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="..."
  width={1920}
  height={1080}
  priority // für Hero-Bilder
  quality={85} // Kompromiss zwischen Qualität & Größe
  placeholder="blur" // für bessere UX
/>
```

**2. Font-Optimierung**
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

**3. Lazy Loading für Container**
```typescript
// Nur Hero sofort laden, Rest lazy
import dynamic from 'next/dynamic'

const ProblemContainer = dynamic(() => import('./sections/ProblemContainer'))
const LoesungContainer = dynamic(() => import('./sections/LoesungContainer'))
```

---

### Task 9: Google Lighthouse-Optimierung

**Ziel:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: 100

**Checklist:**
- ✅ Bilder optimiert (WebP, richtige Größen)
- ✅ Fonts optimiert (preload, display: swap)
- ✅ Lazy Loading für Bilder & Components
- ✅ Minimiertes CSS/JS
- ✅ Keine blockierenden Ressourcen
- ✅ Cache-Headers konfiguriert

**Test:**
```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://fimi-service.de --view
```

---

## ♿ Accessibility (WCAG 2.1)

### Task 10: Accessibility-Checkliste

**1. Semantisches HTML**
```typescript
// Richtig
<header>
  <nav>
    <ul>
      <li><a href="...">Link</a></li>
    </ul>
  </nav>
</header>

// Falsch
<div>
  <div>
    <div onClick="...">Link</div>
  </div>
</div>
```

**2. Alt-Texte für alle Bilder**
```typescript
<Image
  src="/hero.jpg"
  alt="Professionelle Büroreinigung - Mitarbeiter reinigt Büro"
  // NICHT: alt="hero.jpg" oder alt=""
/>
```

**3. Kontraste prüfen**
```
Navy Blau (#012956) auf Weiß: ✅ Kontrast > 4.5:1
Türkis Grün (#109387) auf Weiß: ✅ Kontrast > 4.5:1
```

**4. Keyboard-Navigation**
```typescript
// Alle interaktiven Elemente müssen fokussierbar sein
<button className="focus:outline-2 focus:outline-fimi-turquoise">
  Klick mich
</button>
```

**5. ARIA-Labels**
```typescript
<button
  aria-label="Kontaktformular öffnen"
  onClick={() => scrollToContact()}
>
  Kontakt
</button>
```

---

## 🧪 Testing

### Task 11: Cross-Browser-Testing

**Browser:**
- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Firefox
- ✅ Edge

**Devices:**
- ✅ iPhone 12/13/14 (iOS Safari)
- ✅ Samsung Galaxy S21/S22 (Chrome)
- ✅ iPad (Safari)
- ✅ Desktop 1920x1080
- ✅ Desktop 2560x1440

---

### Task 12: Functionality-Testing

**Checklist:**
- [ ] Navigation funktioniert (alle Links)
- [ ] Megamenü öffnet/schließt korrekt
- [ ] "Kontakt"-Button scrollt zu Footer
- [ ] "Kontaktieren Sie uns jetzt" öffnet Kontaktseite
- [ ] Kontaktformular sendet Daten
- [ ] Bilder laden korrekt
- [ ] Responsive Design funktioniert
- [ ] Keine Console-Errors
- [ ] Page Speed < 3 Sekunden

---

## 🚀 Launch-Checkliste

### Task 13: Pre-Launch

**1. Inhalte überprüfen**
- [ ] Alle Kundendaten korrekt (Adresse, Telefon, E-Mail, UST-ID)
- [ ] Alle 18 Dienstleistungen vollständig
- [ ] Alle 9 Branchen vollständig
- [ ] Startseite vollständig
- [ ] Kontaktseite funktioniert
- [ ] Rechtliche Seiten (Impressum, Datenschutz, AGB)

**2. SEO überprüfen**
- [ ] Meta-Tags auf allen Seiten
- [ ] Schema Markup funktioniert (mit Google Rich Results Test)
- [ ] Sitemap.xml erreichbar unter /sitemap.xml
- [ ] Robots.txt erreichbar unter /robots.txt
- [ ] Google Search Console eingerichtet
- [ ] Google Analytics (optional)

**3. Performance überprüfen**
- [ ] Lighthouse Score >90
- [ ] Core Web Vitals optimiert
- [ ] Bilder optimiert
- [ ] Fonts optimiert

**4. Accessibility überprüfen**
- [ ] Kontraste ausreichend
- [ ] Alt-Texte vorhanden
- [ ] Keyboard-Navigation funktioniert
- [ ] Screen Reader kompatibel

**5. Technik überprüfen**
- [ ] SSL-Zertifikat aktiv (HTTPS)
- [ ] Domain korrekt verknüpft
- [ ] E-Mail-Versand funktioniert (Kontaktformular)
- [ ] Backup-Strategie
- [ ] Vercel-Deployment läuft

---

### Task 14: Google Search Console

**1. Property hinzufügen**
```
https://search.google.com/search-console
→ Property hinzufügen: fimi-service.de
→ Verifizierung via DNS oder HTML-Tag
```

**2. Sitemap einreichen**
```
https://fimi-service.de/sitemap.xml
```

**3. URL-Inspektion**
```
Prüfe, ob wichtige Seiten indexiert werden:
- Startseite
- Top 5 Dienstleistungen
- Kontaktseite
```

---

### Task 15: Production-Deployment

**Vercel:**
```bash
# Finaler Push zu main
git add .
git commit -m "feat: Phase 3 complete - SEO, Performance, Accessibility optimized"
git push origin main

# Vercel deployed automatisch
# Production-URL: https://fimi-service.de
```

**Domain verknüpfen:**
```
Vercel Dashboard → Project Settings → Domains
→ fimi-service.de hinzufügen
→ DNS-Einträge konfigurieren (A, CNAME)
```

---

## ✅ Abnahme-Kriterien Phase 3

- [ ] Alle Seiten haben Meta-Tags
- [ ] Schema Markup auf allen relevanten Seiten
- [ ] Städte SEO-optimiert integriert (keine Landing Pages)
- [ ] Sitemap.xml funktioniert
- [ ] Robots.txt funktioniert
- [ ] Google Lighthouse Score >90
- [ ] Core Web Vitals optimiert
- [ ] Accessibility WCAG 2.1 AA
- [ ] Cross-Browser getestet
- [ ] Functionality getestet
- [ ] Google Search Console eingerichtet
- [ ] Production-Deployment erfolgreich
- [ ] Domain verknüpft (fimi-service.de)
- [ ] SSL aktiv

---

## 🎉 Launch!

**Gratulation! Die Website ist live:**

1. ✅ Alle Inhalte vollständig
2. ✅ SEO-optimiert für Google
3. ✅ Performance optimiert
4. ✅ Accessibility-konform
5. ✅ Production-ready

**Nächste Schritte:**
- 📊 Google Analytics einrichten (optional)
- 📈 Monitoring (Uptime, Performance)
- 🔄 Regelmäßige Updates (Content, Bilder)
- 🎯 SEO-Monitoring (Rankings, Traffic)

---

**Erstellt am:** 2025-11-20
**Projekt:** FIMI-Service Website Migration
**Phase:** 3 von 3
**Status:** Launch-Ready! 🚀
