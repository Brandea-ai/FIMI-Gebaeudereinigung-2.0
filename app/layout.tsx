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
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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
