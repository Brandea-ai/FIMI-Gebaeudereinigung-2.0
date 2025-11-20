# 🎨 PHASE 2: Content & Design

## 🎯 Ziel dieser Phase

Alle Inhalte erstellen und Design umsetzen:
- 18 Dienstleistungsseiten (vollständig)
- 9 Branchenseiten (vollständig)
- Startseite (komplett)
- Kontaktseite
- Über Uns / Team
- SEO-optimierte Texte
- Hochwertige Bilder (Unsplash)
- Zick-Zack-Layouts
- Sticky-Effekte
- Marketing-Psychologie integriert

**Geschätzte Sessions:** 3-5 (wegen Token-Management)

---

## ✅ Deliverables Phase 2

1. ✅ Startseite vollständig (Hero, Problem, Lösung, Services, Trust, CTA)
2. ✅ Alle 18 Dienstleistungsseiten mit Container-Sektionen
3. ✅ Alle 9 Branchenseiten mit Container-Sektionen
4. ✅ Kontaktseite (dediziert)
5. ✅ Über Uns Seite (Team, Geschichte, Werte)
6. ✅ SEO-Texte für jede Seite
7. ✅ Unsplash-Bilder integriert
8. ✅ Responsive Design (Mobile-First)
9. ✅ Marketing-Psychologie (Social Proof, Autorität, etc.)
10. ✅ Alle Buttons funktionieren (Scroll, Navigation)

---

## 📋 Container-Konzept

### Warum Container?
**Problem:** Große Dateien = Token-Limit
**Lösung:** Jede Sektion ist eine eigene Datei

### Standard-Container pro Seite
1. **HeroContainer.tsx** - Header mit Hauptbild
2. **ProblemContainer.tsx** - Problemstellung (Schmerzpunkt)
3. **LoesungContainer.tsx** - Unsere Lösung
4. **ProcessContainer.tsx** - Ablauf (3-5 Schritte)
5. **BenefitsContainer.tsx** - Vorteile (Icon-Grid)
6. **TrustContainer.tsx** - Social Proof (Logos, Testimonials)
7. **FaqContainer.tsx** - FAQ-Sektion
8. **FinalCtaContainer.tsx** - Abschließender Call-to-Action

### Beispiel-Struktur
```
app/dienstleistungen/bueroreinigung/
├── page.tsx (importiert alle Container)
└── sections/
    ├── HeroContainer.tsx
    ├── ProblemContainer.tsx
    ├── LoesungContainer.tsx
    ├── ProcessContainer.tsx
    ├── BenefitsContainer.tsx
    ├── TrustContainer.tsx
    ├── FaqContainer.tsx
    └── FinalCtaContainer.tsx
```

---

## 🏠 Startseite (Home)

### Task 1: Hero-Sektion
```typescript
// app/sections/HeroSection.tsx
'use client'

import Image from 'next/image'

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('kontakt-footer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero-bg.jpg"
          alt="Professionelle Gebäudereinigung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy/90 to-fimi-navy/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Professionelle Gebäudereinigung in Landshut
          </h1>
          <p className="text-2xl mb-8 text-white/90">
            Ihr zuverlässiger Partner für gewerbliche Reinigungslösungen.
            Von Büroreinigung bis Facility Management – alles aus einer Hand.
          </p>

          <div className="flex gap-4">
            <button
              onClick={scrollToContact}
              className="bg-fimi-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-fimi-navy transition"
            >
              Jetzt Angebot anfordern
            </button>
            <a
              href="tel:01747225473"
              className="bg-white text-fimi-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-fimi-turquoise hover:text-white transition"
            >
              01747225473
            </a>
          </div>

          {/* Trust-Badges */}
          <div className="mt-12 flex gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-fimi-turquoise text-2xl">✓</span>
              <span>15+ Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fimi-turquoise text-2xl">✓</span>
              <span>Zertifiziert & Versichert</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fimi-turquoise text-2xl">✓</span>
              <span>24/7 Erreichbarkeit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Unsplash-Bild:**
- Suche: "office cleaning professional"
- Download: 4K (3840x2160)
- Speichern: `/public/home/hero-bg.jpg`

---

### Task 2: Services-Übersicht (Zick-Zack-Layout)
```typescript
// app/sections/ServicesOverview.tsx
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Büroreinigung',
    description: 'Professionelle Reinigung für Büros und Verwaltungsgebäude. Täglich, wöchentlich oder nach Bedarf.',
    image: '/home/bueroreinigung.jpg',
    link: '/dienstleistungen/bueroreinigung',
  },
  {
    title: 'Industriereinigung',
    description: 'Spezialisierte Reinigung für Produktionshallen, Maschinen und industrielle Anlagen.',
    image: '/home/industriereinigung.jpg',
    link: '/dienstleistungen/industriereinigung',
  },
  {
    title: 'Facility Management',
    description: 'Ganzheitliche Betreuung Ihrer Immobilie – von Reinigung bis Hausmeisterservice.',
    image: '/home/facility-management.jpg',
    link: '/dienstleistungen/facility-management',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-fimi-navy mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600">
            Maßgeschneiderte Reinigungslösungen für Ihr Unternehmen
          </p>
        </div>

        {/* Zick-Zack-Layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Bild */}
              <div className="lg:w-1/2">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h3 className="text-4xl font-bold text-fimi-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block bg-fimi-turquoise text-white px-6 py-3 rounded-lg font-bold hover:bg-fimi-navy transition"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Unsplash-Bilder:**
- Büroreinigung: "modern office clean"
- Industriereinigung: "industrial cleaning factory"
- Facility Management: "building management"

---

### Task 3: Trust-Sektion (Social Proof)
```typescript
// app/sections/TrustSection.tsx
import Image from 'next/image'

const stats = [
  { number: '15+', label: 'Jahre Erfahrung' },
  { number: '500+', label: 'Zufriedene Kunden' },
  { number: '24/7', label: 'Erreichbarkeit' },
  { number: '100%', label: 'Qualitätsgarantie' },
]

const certifications = [
  'ISO 9001 Zertifiziert',
  'Umweltfreundliche Reinigungsmittel',
  'Vollständig versichert',
  'Geschultes Fachpersonal',
]

export default function TrustSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-6xl font-bold text-fimi-turquoise mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Zertifikate */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-fimi-navy mb-8">
            Ihre Sicherheit ist unsere Priorität
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-fimi-turquoise text-4xl mb-4">✓</div>
              <p className="font-semibold text-fimi-navy">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 🧹 Dienstleistungsseiten (18 Seiten)

### Beispiel: Büroreinigung

**Task 4: Büroreinigung - page.tsx**
```typescript
// app/dienstleistungen/bueroreinigung/page.tsx
import Header from '@/components/navigation/Header'
import Footer from '@/components/footer/Footer'
import HeroContainer from './sections/HeroContainer'
import ProblemContainer from './sections/ProblemContainer'
import LoesungContainer from './sections/LoesungContainer'
import ProcessContainer from './sections/ProcessContainer'
import BenefitsContainer from './sections/BenefitsContainer'
import TrustContainer from './sections/TrustContainer'
import FaqContainer from './sections/FaqContainer'
import FinalCtaContainer from './sections/FinalCtaContainer'

export const metadata = {
  title: 'Büroreinigung Landshut | FIMI-Service',
  description: 'Professionelle Büroreinigung in Landshut. Täglich, wöchentlich oder nach Bedarf. Jetzt Angebot anfordern!',
}

export default function BueroreinigungPage() {
  return (
    <>
      <Header />
      <main>
        <HeroContainer />
        <ProblemContainer />
        <LoesungContainer />
        <ProcessContainer />
        <BenefitsContainer />
        <TrustContainer />
        <FaqContainer />
        <FinalCtaContainer />
      </main>
      <Footer />
    </>
  )
}
```

---

**Task 5: HeroContainer**
```typescript
// app/dienstleistungen/bueroreinigung/sections/HeroContainer.tsx
'use client'

import Image from 'next/image'

export default function HeroContainer() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/dienstleistungen/bueroreinigung/hero.jpg"
          alt="Professionelle Büroreinigung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-fimi-navy/70" />
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-6xl font-bold mb-6">
          Professionelle Büroreinigung in Landshut
        </h1>
        <p className="text-2xl mb-8 max-w-2xl">
          Saubere Büros für produktive Mitarbeiter. Täglich, wöchentlich oder nach Bedarf –
          wir passen uns Ihren Anforderungen an.
        </p>
        <button
          onClick={() => document.getElementById('kontakt-footer')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-fimi-turquoise px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-fimi-navy transition"
        >
          Jetzt Angebot anfordern
        </button>
      </div>
    </section>
  )
}
```

---

**Task 6: ProblemContainer (Psychologie: Schmerzpunkt)**
```typescript
// app/dienstleistungen/bueroreinigung/sections/ProblemContainer.tsx
export default function ProblemContainer() {
  const problems = [
    {
      icon: '😷',
      title: 'Unprofessionelle Reinigung',
      description: 'Halbherzige Reinigung führt zu Hygieneproblemen und Krankheitsausfällen.',
    },
    {
      icon: '⏰',
      title: 'Zeitaufwand & Koordination',
      description: 'Eigenes Personal bindet Ressourcen, die Ihr Kerngeschäft braucht.',
    },
    {
      icon: '💰',
      title: 'Versteckte Kosten',
      description: 'Günstig-Anbieter sparen an Qualität – das zahlt sich langfristig nicht aus.',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-fimi-navy mb-4">
            Kennen Sie diese Herausforderungen?
          </h2>
          <p className="text-xl text-gray-600">
            Viele Unternehmen kämpfen mit denselben Problemen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-fimi-navy mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

**Task 7: LoesungContainer (Psychologie: Problem → Lösung)**
```typescript
// app/dienstleistungen/bueroreinigung/sections/LoesungContainer.tsx
import Image from 'next/image'

export default function LoesungContainer() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Bild */}
          <div className="lg:w-1/2">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dienstleistungen/bueroreinigung/loesung.jpg"
                alt="FIMI-Service Büroreinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-fimi-navy mb-6">
              Unsere Lösung: Maßgeschneiderte Büroreinigung
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Bei FIMI-Service erhalten Sie mehr als nur Reinigung – Sie erhalten einen Partner,
              der Ihre Anforderungen versteht und flexible Lösungen bietet.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-fimi-turquoise text-2xl">✓</span>
                <div>
                  <strong className="text-fimi-navy">Individueller Reinigungsplan:</strong>
                  <span className="text-gray-600"> Täglich, wöchentlich oder nach Bedarf</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fimi-turquoise text-2xl">✓</span>
                <div>
                  <strong className="text-fimi-navy">Geschultes Fachpersonal:</strong>
                  <span className="text-gray-600"> Zuverlässig, diskret und professionell</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fimi-turquoise text-2xl">✓</span>
                <div>
                  <strong className="text-fimi-navy">Umweltfreundliche Reinigungsmittel:</strong>
                  <span className="text-gray-600"> Für Ihre Gesundheit und die Umwelt</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fimi-turquoise text-2xl">✓</span>
                <div>
                  <strong className="text-fimi-navy">Transparente Preise:</strong>
                  <span className="text-gray-600"> Keine versteckten Kosten</span>
                </div>
              </li>
            </ul>

            <button
              onClick={() => document.getElementById('kontakt-footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-fimi-turquoise text-white px-8 py-4 rounded-lg font-bold hover:bg-fimi-navy transition"
            >
              Jetzt unverbindlich anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### Weitere Container (für alle 18 Dienstleistungen wiederholen)

**ProcessContainer:** Ablauf (3-5 Schritte)
**BenefitsContainer:** Vorteile (Icon-Grid)
**TrustContainer:** Testimonials, Logos
**FaqContainer:** Häufige Fragen
**FinalCtaContainer:** Letzter Call-to-Action

---

## 🏢 Branchenseiten (9 Seiten)

Gleiche Container-Struktur wie Dienstleistungen, aber fokussiert auf Branche:

### Beispiel: Büro & Verwaltung
```
app/branchen/buero-verwaltung/
├── page.tsx
└── sections/
    ├── HeroContainer.tsx
    ├── ProblemContainer.tsx (branchenspezifisch)
    ├── LoesungContainer.tsx (branchenspezifisch)
    ├── ServicesContainer.tsx (welche Services passen)
    ├── CaseStudyContainer.tsx (Erfolgsgeschichte)
    ├── TrustContainer.tsx
    ├── FaqContainer.tsx
    └── FinalCtaContainer.tsx
```

---

## 📞 Kontaktseite (dediziert)

**Task 8: app/kontakt/page.tsx**
```typescript
// app/kontakt/page.tsx
import Header from '@/components/navigation/Header'
import Footer from '@/components/footer/Footer'
import ContactForm from '@/components/footer/ContactForm'

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-fimi-navy mb-4 text-center">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Wir freuen uns auf Ihre Anfrage und erstellen Ihnen ein unverbindliches Angebot.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Kontaktinfos */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-fimi-navy mb-6">
                  Kontaktdaten
                </h2>

                <div className="space-y-4">
                  <div>
                    <strong className="text-fimi-navy">Adresse:</strong>
                    <p className="text-gray-600">
                      FIMI-Service<br />
                      Kellerstr. 39<br />
                      84036 Landshut
                    </p>
                  </div>

                  <div>
                    <strong className="text-fimi-navy">Telefon:</strong>
                    <p className="text-gray-600">
                      <a href="tel:01747225473" className="hover:text-fimi-turquoise">
                        01747225473
                      </a>
                    </p>
                  </div>

                  <div>
                    <strong className="text-fimi-navy">E-Mail:</strong>
                    <p className="text-gray-600">
                      <a href="mailto:info@fimi-service.de" className="hover:text-fimi-turquoise">
                        info@fimi-service.de
                      </a>
                    </p>
                  </div>

                  <div>
                    <strong className="text-fimi-navy">Öffnungszeiten:</strong>
                    <p className="text-gray-600">
                      Mo-Fr: 8:00 - 18:00 Uhr<br />
                      Sa: 9:00 - 14:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* Kontaktformular */}
              <div className="bg-fimi-navy p-8 rounded-xl shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

---

## 🎯 Token-Management-Workflow

### Session-Planung

**Session 1:** Startseite (3-4 Container)
**Session 2:** Büroreinigung (8 Container)
**Session 3:** Unterhaltsreinigung + Baureinigung (je 8 Container)
**Session 4:** 3 weitere Dienstleistungen
**Session 5:** 3 weitere Dienstleistungen
...und so weiter

**Regel:** Max. 3 komplette Container pro Session

---

## ✅ Abnahme-Kriterien Phase 2

- [ ] Startseite vollständig (Hero, Services, Trust, etc.)
- [ ] Alle 18 Dienstleistungsseiten vollständig
- [ ] Alle 9 Branchenseiten vollständig
- [ ] Kontaktseite funktioniert
- [ ] Über Uns Seite erstellt
- [ ] Alle Seiten responsive (Mobile & Desktop)
- [ ] SEO-Texte auf allen Seiten
- [ ] Unsplash-Bilder integriert (min. 3 pro Seite)
- [ ] Zick-Zack-Layouts funktionieren
- [ ] Alle "Kontakt"-Buttons scrollen zu Footer
- [ ] Marketing-Psychologie sichtbar (Social Proof, etc.)

---

## 🚀 Nächste Schritte

**Nach Abschluss von Phase 2:**
→ Weiter zu **Phase 3: SEO & Finalisierung** (`04-PHASE-3-SEO-und-Finalisierung.md`)

---

**Erstellt am:** 2025-11-20
**Projekt:** FIMI-Service Website Migration
**Phase:** 2 von 3
**Status:** Bereit zur Umsetzung
