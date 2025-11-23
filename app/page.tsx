'use client'
import { useState, useEffect } from "react";
import { scrollToContact } from "@/utils/scroll";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Star, Shield, Clock, Users, Sparkles, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationSchema } from "@/utils/schema";
import { motion } from "framer-motion";
import {
  ParallaxImage,
  ParallaxBackground,
  ZoomOnScroll,
  RevealOnScroll,
  TiltCard,
  MagneticHover
} from "@/components/PremiumParallax";
import IndustryAdvisor from "@/components/IndustryAdvisor";
import AppointmentButton from "@/components/AppointmentButton";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";

import {
  fadeInUp,
  staggerContainer,
  cardHover,
  scaleIn
} from "@/utils/animations";

export default function Home() {
  useScrollToAnchor();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Professionelle Gebäudereinigung in Ober- und Niederbayern"
        description="FIMI-Service - Ihr professioneller Business-Partner für Gebäudereinigung in Ober- und Niederbayern. Büroreinigung, Industriereinigung und Facility Management in Landshut, Regensburg, Freising und Umgebung. ISO 9001 & 14001 zertifiziert."
        keywords="Gebäudereinigung Ober- und Niederbayern, Reinigungsservice Landshut, Büroreinigung Regensburg, Industriereinigung Freising, Facility Management Bayern, Professionelle Reinigung"
        url="/"
        schema={organizationSchema}
      />
      <Navigation />

      {/* Hero Section with Advanced Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParallaxBackground
          src="/facility-management-hero.jpg"
          speed={0.5}
          overlay={true}
        />

        <div className="container relative z-10 py-24 md:py-32">
          <motion.div 
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-4 sm:mb-6"
              variants={fadeInUp}
            >
              <span className="text-primary font-semibold text-sm sm:text-base">Ihr professioneller Business-Partner in Ober- und Niederbayern</span>
            </motion.div>
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
              variants={fadeInUp}
            >
              Professionelle <span className="text-secondary">Gebäudereinigung</span> in Ober- und Niederbayern
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/95 mb-8 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              Zuverlässige Reinigungsdienste für Unternehmen in Landshut, Regensburg, Freising und Umgebung. ISO 9001 & 14001 zertifiziert mit über 15 Jahren Erfahrung.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={fadeInUp}
            >
              <a href="#kontakt-formular" className="w-full sm:w-auto">
                <MagneticHover>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 shadow-2xl hover:shadow-primary/50 transition-all"
                  >
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </MagneticHover>
              </a>
              <AppointmentButton
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-900"
              />
            </motion.div>
            
            {/* KI Industry Advisor */}
            <motion.div 
              className="mt-12 max-w-3xl"
              variants={fadeInUp}
            >
              <IndustryAdvisor />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators - WEISS */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { icon: Shield, label: "ISO 9001 & 14001", value: "Zertifiziert" },
              { icon: Clock, label: "Flexibel & Zuverlässig", value: "Auf Wunsch 24/7" },
              { icon: Users, label: "Zufriedene Kunden", value: "In Ober- und Niederbayern" },
              { icon: Award, label: "15+ Jahre", value: "Erfahrung" },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>

                  <Card className="p-8 text-center hover-lift hover-tilt hover-tilt">
                    <item.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-2">{item.value}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600">{item.label}</p>
                  </Card>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vorher/Nachher Section with Parallax Images - BLAU */}
      <section className="py-32 bg-primary/5 overflow-hidden">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Sehen Sie den Unterschied
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Unsere professionelle Reinigung verwandelt Ihre Räumlichkeiten. Erleben Sie die Qualität unserer Arbeit.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="parallax-smooth">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary mb-4">Vorher</h3>
                <ParallaxImage 
                  src="/vorher-buero-schmutzig.jpg" 
                  alt="Büro vor der Reinigung"
                  className="rounded-2xl h-[400px] lg:h-[500px]"
                  speed={0.2}
                  scale={true}
                  overlay={true}
                  overlayOpacity={0.2}
                />
                <p className="text-slate-600 mt-4">Verschmutztes Büro mit Staub und Unordnung</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="parallax-smooth">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary mb-4">Nachher</h3>
                <ParallaxImage 
                  src="/nachher-buero-sauber.jpg" 
                  alt="Büro nach der Reinigung"
                  className="rounded-2xl h-[400px] lg:h-[500px]"
                  speed={0.2}
                  scale={true}
                  overlay={true}
                  overlayOpacity={0.1}
                />
                <p className="text-slate-600 mt-4">Makelloses, professionelles Arbeitsumfeld</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Services Overview with Enhanced Cards - GRÜN */}
      <section className="py-32 bg-secondary/5">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Unsere Reinigungsdienstleistungen
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Von der professionellen Gebäudereinigung über Industriereinigung bis zum Facility Management – wir bieten maßgeschneiderte Reinigungslösungen für Ihr Unternehmen in Ober- und Niederbayern.
              </p>
            </div>
          </RevealOnScroll>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Gewerbliche Reinigung */}
            <motion.div variants={fadeInUp}>

                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Users className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-secondary">Gewerbliche Reinigung</h3>
                  <p className="text-slate-600 mb-6">
                    Professionelle Gebäudereinigung und Industriereinigung für Unternehmen in Landshut, Regensburg, Freising und ganz Ober- und Niederbayern.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Büroreinigung", "Industriereinigung", "Hallenreinigung", "Baureinigung", "Fassaden- & Fensterreinigung", "Maschinenreinigung"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/business/bueroreinigung">
                    <MagneticHover>
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </MagneticHover>
                  </Link>
                </Card>

            </motion.div>

            {/* Facility Management */}
            <motion.div variants={fadeInUp}>

                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Shield className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-secondary">Facility Management</h3>
                  <p className="text-slate-600 mb-6">
                    Umfassende Facility-Dienstleistungen für Ihre Immobilien und Betriebsgelände in Ober- und Niederbayern.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Facility Management", "Unterhaltsreinigung", "Hausmeisterservice", "Winterdienst", "Außenanlagenpflege", "Beschaffungsmanagement"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/business/facility-management">
                    <MagneticHover>
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </MagneticHover>
                  </Link>
                </Card>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service-Regionen Section - WEISS */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Unsere Service-Regionen in Ober- und Niederbayern
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Professionelle Reinigungsdienstleistungen in den wichtigsten Wirtschaftsregionen Ober- und Niederbayerns und Umgebung
              </p>
            </div>
          </RevealOnScroll>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              "Landshut",
              "München",
              "Regensburg",
              "Freising",
              "Straubing",
              "Deggendorf",
              "Augsburg",
              "Nürnberg",
            ].map((location, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="p-6 text-center hover-lift hover-tilt">
                  <h3 className="text-lg font-bold text-slate-900">{location}</h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - BLAU */}
      <section className="py-32 bg-primary/5">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Was unsere Kunden sagen
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Vertrauen Sie auf die Erfahrungen unserer zufriedenen Kunden
              </p>
            </div>
          </RevealOnScroll>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                text: "Professionell, zuverlässig und immer pünktlich. Die Reinigungsqualität ist hervorragend!",
                author: "Thomas M.",
                role: "Geschäftsführer, Landshut"
              },
              {
                text: "Seit Jahren vertrauen wir auf die exzellenten Reinigungsservices. Absolut empfehlenswert!",
                author: "Sarah K.",
                role: "Facility Managerin, Regensburg"
              },
              {
                text: "FIMI-Service überzeugt durch Qualität und Zuverlässigkeit. Unser Partner für Gebäudereinigung in Bayern.",
                author: "Michael R.",
                role: "Produktionsleiter, Freising"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                
                  <Card className="p-8 hover-lift h-full hover-tilt hover-tilt">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </Card>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Parallax Background - GRÜN */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-secondary to-secondary/90">
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Bereit für professionelle Reinigung?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8">
                Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <MagneticHover>
                    <Button size="lg" className="bg-white text-secondary text-sm sm:text-base md:text-lg px-8 shadow-2xl hover:bg-white/90">
                      Jetzt Beratung anfordern
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </MagneticHover>
                </Link>
                <AppointmentButton
                  size="lg"
                  variant="outline"
                  className="text-sm sm:text-base md:text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
