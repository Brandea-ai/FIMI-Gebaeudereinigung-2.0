'use client'
import { useState } from "react";
import { scrollToContact } from "@/utils/scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxImage, RevealOnScroll, TiltCard, MagneticHover } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Car, ArrowRight, Shield, Clock, Award } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Tiefgaragenreinigung() {
  const serviceData = {
    name: "Professionelle Tiefgaragenreinigung",
    description: "Spezialisierte Tiefgaragenreinigung in Bayern. Gründlich, effizient und zuverlässig.",
    url: "/business/tiefgaragenreinigung",
    category: "Underground Garage Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Tiefgaragenreinigung Bayern - FIMI-Service"
        description="Professionelle Tiefgaragenreinigung in Ober- und Niederbayern. Gründliche Reinigung von Parkgaragen und Tiefgaragen."
        keywords="Tiefgaragenreinigung, Parkgarage Reinigung Bayern, Garagenreinigung München, Tiefgarage sauber Landshut"
        url="/business/tiefgaragenreinigung"
        schema={serviceSchema(serviceData)}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
                Industrielle & Spezialreinigung
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Professionelle Tiefgaragenreinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Gründliche Reinigung von Tiefgaragen und Parkdecks in München, Landshut, Regensburg und ganz Ober- und Niederbayern. Mit Spezialgeräten für optimale Sauberkeit.
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
              <ParallaxImage
                src="/warehouse-cleaning.jpg"
                alt="Professionelle Tiefgaragenreinigung"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ParallaxImage
                src="/industrial-floor-cleaning.jpg"
                alt="Garagenboden Reinigung"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6">
                Spezialisiert auf Parkhäuser & Tiefgaragen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Unsere <Link href="/business/industriereinigung" className="text-secondary hover:underline">Industriereinigung</Link> umfasst die professionelle Reinigung von Tiefgaragen, Parkhäusern und Parkdecks. Mit Hochdruckreinigern und Scheuersaugmaschinen reinigen wir effizient große Flächen.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Zertifizierte Fachkräfte" },
                  { icon: Clock, text: "Flexible Einsatzzeiten" },
                  { icon: Award, text: "Modernste Technologie" },
                  { icon: Car, text: "Alle Garagentypen" }
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6">
                Umfassende Reinigungsleistungen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Von der Bodenreinigung bis zur Wandpflege - wir bieten alle Leistungen für Ihre Tiefgarage. Unsere <Link href="/business/facility-management" className="text-secondary hover:underline">Facility Management</Link> Services sorgen für dauerhaft saubere Parkflächen.
              </p>
              <div className="space-y-3">
                {[
                  "Bodenreinigung mit Hochdruckreiniger",
                  "Ölflecken-Entfernung",
                  "Parkplatz-Markierungen reinigen",
                  "Wände und Decken",
                  "Einfahrten und Rampen",
                  "Aufzugsbereiche",
                  "Müllräume und Abstellplätze",
                  "Entwässerungsrinnen"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"/>
                    <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ParallaxImage
                src="/hallenreinigung-hero.jpg"
                alt="Tiefgarage Reinigung"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-4xl">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">
                Alles was Sie über unsere Tiefgaragenreinigung wissen müssen
              </p>
            </div>
          </RevealOnScroll>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Wie oft sollte eine Tiefgarage gereinigt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir empfehlen eine Grundreinigung 2-4 Mal pro Jahr, abhängig von der Nutzungsintensität. Hochfrequentierte Tiefgaragen in Bürogebäuden oder Einkaufszentren benötigen häufigere Reinigung als Wohnhaus-Tiefgaragen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Können Ölflecken komplett entfernt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, mit speziellen Reinigungsmitteln und Hochdruckreinigern entfernen wir auch hartnäckige Öl- und Fettflecken. Bei sehr alten Flecken kann eine vollständige Entfernung allerdings schwierig sein.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Arbeiten Sie auch nachts?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten flexible Reinigungszeiten an. Viele Tiefgaragen reinigen wir nachts oder am Wochenende, damit die Nutzer nicht gestört werden und alle Parkplätze verfügbar bleiben.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Reinigen Sie auch Parkplätze im Freien?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, unsere <Link href="/business/parkplatzreinigung" className="text-secondary hover:underline">Parkplatzreinigung</Link> umfasst sowohl Tiefgaragen als auch Parkplätze im Freien. Zusätzlich bieten wir <Link href="/basis/winterdienst" className="text-secondary hover:underline">Winterdienst</Link> für Außenparkplätze an.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Regionen bedienen Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir sind in ganz Ober- und Niederbayern tätig, inkl. München, Landshut, Regensburg, Freising, Straubing, Deggendorf, Augsburg und Nürnberg.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Bereit für professionelle Tiefgaragenreinigung?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne zu allen Reinigungsdienstleistungen in München, Landshut, Regensburg und ganz Bayern.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#kontakt-formular">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </a>
            <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 border-white text-white hover:bg-white/20" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
