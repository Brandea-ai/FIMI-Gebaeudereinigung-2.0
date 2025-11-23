import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ChatbotProvider } from '@/contexts/ChatbotContext'
import CookieConsent from '@/components/CookieConsent'
import AIChatbot from '@/components/AIChatbot'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fimi-service.de'),
  title: {
    default: 'FIMI-Service - Ihr professioneller Business-Partner für Gebäudereinigung in Niederbayern',
    template: '%s | FIMI-Service'
  },
  description: 'Professionelle Gebäudereinigung, Industriereinigung und Facility Management in Niederbayern. ISO 9001 & 14001 zertifiziert. Über 15 Jahre Erfahrung. Ihr zuverlässiger Partner für gewerbliche Reinigungslösungen in Landshut, Regensburg, Freising und Umgebung.',
  keywords: [
    'Gebäudereinigung Niederbayern',
    'Reinigungsservice Landshut',
    'Büroreinigung Regensburg',
    'Industriereinigung',
    'Facility Management',
    'Landshut',
    'Regensburg',
    'Freising',
    'Straubing',
    'Deggendorf',
    'FIMI-Service'
  ],
  authors: [{ name: 'FIMI-Service' }],
  creator: 'FIMI-Service',
  publisher: 'FIMI-Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de',
    siteName: 'FIMI-Service',
    title: 'FIMI-Service - Professionelle Gebäudereinigung in Niederbayern',
    description: 'Ihr professioneller Business-Partner für ISO-zertifizierte Gebäudereinigung und Facility Management in Niederbayern',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FIMI-Service Gebäudereinigung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIMI-Service - Professionelle Gebäudereinigung in Niederbayern',
    description: 'Professionelle Gebäudereinigung in Niederbayern - Landshut, Regensburg, Freising',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Später hinzufügen
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://fimi-service.de/#organization",
    "name": "FIMI-Service",
    "legalName": "FIMI-Service Gebäudereinigung",
    "url": "https://fimi-service.de",
    "logo": "https://fimi-service.de/logo.png",
    "image": "https://fimi-service.de/og-image.jpg",
    "description": "Professionelle Gebäudereinigung, Industriereinigung und Facility Management in Niederbayern. ISO 9001 & 14001 zertifiziert. Über 15 Jahre Erfahrung.",
    "foundingDate": "2008",
    "email": "info@fimi-service.de",
    "telephone": "+49-174-722-5473",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kellerstr. 39",
      "addressLocality": "Landshut",
      "postalCode": "84036",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.5379,
      "longitude": 12.1495
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Landshut"
      },
      {
        "@type": "City",
        "name": "Regensburg"
      },
      {
        "@type": "City",
        "name": "Freising"
      },
      {
        "@type": "City",
        "name": "Straubing"
      },
      {
        "@type": "City",
        "name": "Deggendorf"
      }
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fimi-service",
      "https://www.instagram.com/fimi-service"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Reinigungsdienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Büroreinigung",
            "description": "Professionelle Reinigung von Büroräumen und Geschäftsgebäuden"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industriereinigung",
            "description": "Spezialisierte Reinigung für Industrieanlagen und Produktionsstätten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facility Management",
            "description": "Ganzheitliches Gebäudemanagement und Dienstleistungskoordination"
          }
        }
      ]
    }
  };

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider defaultTheme="light">
            <ChatbotProvider>
              <TooltipProvider>
                <Toaster />
                <CookieConsent />
                <AIChatbot />
                {children}
              </TooltipProvider>
            </ChatbotProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
