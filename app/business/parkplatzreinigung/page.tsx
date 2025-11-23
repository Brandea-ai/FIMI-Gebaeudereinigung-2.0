'use client'
import { motion } from "framer-motion";
import { ParallaxImage, RevealOnScroll } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle, Car, ArrowRight, Shield, Clock, Award, Truck } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Parkplatzreinigung() {
  const serviceData = {
    name: "Professionelle Parkplatzreinigung",
    description: "Spezialisierte Parkplatzreinigung in Bayern. Sauber, professionell und zuverlässig.",
    url: "/business/parkplatzreinigung",
    category: "Parking Lot Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Parkplatzreinigung Bayern - FIMI-Service"
        description="Professionelle Parkplatzreinigung in Ober- und Niederbayern. Gründliche Reinigung von Parkplätzen und Parkflächen."
        keywords="Parkplatzreinigung, Parkplatz reinigen Bayern, Parkfläche München, Parkplatz sauber Landshut"
        url="/business/parkplatzreinigung"
        schema={serviceSchema(serviceData)}
      />
      <Navigation />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
                Gewerbliche Objektreinigung
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Professionelle Parkplatzreinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Gründliche Reinigung von Parkplätzen, Parkflächen und Zufahrten in München, Landshut, Regensburg und ganz Ober- und Niederbayern. Mit Kehrmaschinen für optimale Sauberkeit.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#kontakt-formular">
                  <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </a>
                <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8" />
              </div>
            </div>
            <div className="relative">
              <ParallaxImage src="/warehouse-cleaning.jpg" alt="Professionelle Parkplatzreinigung" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" speed={0.2} scale={true} overlay={true} overlayOpacity={0.15} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ParallaxImage src="/industrial-floor-cleaning.jpg" alt="Parkplatz Reinigung" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" speed={0.2} scale={true} overlay={true} overlayOpacity={0.15} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6">
                Spezialisiert auf Parkflächen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Unsere professionelle Parkplatzreinigung umfasst die gründliche Reinigung von Kundenparkplätzen, Mitarbeiterparkplätzen und öffentlichen Parkflächen. Mit modernen Kehrmaschinen reinigen wir effizient große Flächen.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Zertifizierte Fachkräfte" },
                  { icon: Clock, text: "Flexible Einsatzzeiten" },
                  { icon: Award, text: "Modernste Technologie" },
                  { icon: Truck, text: "Große Flächen" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6">
                Umfassende Reinigungsleistungen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Von der Grundreinigung bis zur regelmäßigen Pflege - wir bieten alle Leistungen für Ihre Parkflächen.
              </p>
              <div className="space-y-3">
                {[
                  "Kehren mit Kehrmaschinen",
                  "Ölflecken-Entfernung",
                  "Parkplatz-Markierungen reinigen",
                  "Einfahrten und Zufahrten",
                  "Laub- und Müllentfernung",
                  "Hochdruckreinigung",
                  "Grünstreifen-Pflege",
                  "Winterdienst"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"/>
                    <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ParallaxImage src="/hallenreinigung-hero.jpg" alt="Parkplatz Reinigung" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" speed={0.2} scale={true} overlay={true} overlayOpacity={0.15} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container max-w-4xl">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">
                Alles was Sie über unsere Parkplatzreinigung wissen müssen
              </p>
            </div>
          </RevealOnScroll>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Wie oft sollte ein Parkplatz gereinigt werden?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir empfehlen wöchentliche Reinigung für stark frequentierte Parkplätze. Weniger genutzte Flächen können auch 14-tägig oder monatlich gereinigt werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Können Sie auch nachts reinigen?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten flexible Reinigungszeiten. Viele Parkplätze reinigen wir nachts, damit tagsüber alle Stellplätze verfügbar sind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Bieten Sie auch Winterdienst an?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, unser <Link href="/basis/winterdienst" className="text-secondary hover:underline">Winterdienst</Link> umfasst Schneeräumung und Streudienst für Parkplätze.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Bereit für professionelle Parkplatzreinigung?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot für Ihre Parkflächen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#kontakt-formular">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </a>
            <AppointmentButton size="lg" variant="outline" className="border-white text-white hover:bg-white/20" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
