'use client'
import { motion } from "framer-motion";
import { ParallaxImage, ParallaxBackground, RevealOnScroll, TiltCard, MagneticHover, ZoomOnScroll } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Users, Award, Heart, CheckCircle2 } from "lucide-react";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Über Uns - FIMI-Service | Qualität & Vertrauen"
        description="Lernen Sie FIMI-Service kennen - Ihr professioneller Business-Partner für Gebäudereinigung in Niederbayern. Erfahren Sie mehr über unsere Werte und unser engagiertes Team."
        keywords="Über uns, FIMI-Service, Gebäudereinigung Niederbayern, Team, Werte, Mission, Landshut"
        url="/ueber-uns"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                FIMI-Service: Ihr professioneller Business-Partner in Niederbayern
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Mit über 15 Jahren Erfahrung hat sich FIMI-Service zu einem zuverlässigen Partner für professionelle Gebäudereinigung und Facility Management in Niederbayern entwickelt. Unter der Leitung von Ntonalnt Tzoutzis und Ergest Qiraj bieten wir ISO 9001 & 14001 zertifizierte Reinigungslösungen für Unternehmen in Landshut, Regensburg, Freising und Umgebung. Unsere Mission: Qualität, Zuverlässigkeit und persönlicher Service für jeden Kunden.
              </p>
              <Link href="/kontakt">
                <MagneticHover><Button size="lg" className="text-lg">
                  Werden Sie Teil unserer Erfolgsgeschichte <ArrowRight className="ml-2 w-5 h-5" />
                </Button></MagneticHover>
              </Link>
            </div>
            <div className="relative">
              <ParallaxImage
                src="/ueber-uns-hero.jpg"
                alt="Das Team von FIMI-Service"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover h-[400px] lg:h-[500px]"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Werte Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <RevealOnScroll><div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Unsere Werte: Das Fundament unseres Erfolgs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Qualität, Zuverlässigkeit und Kundennähe sind für uns nicht nur Worte, sondern die Grundpfeiler unserer täglichen Arbeit. Sie sind das Versprechen, das wir jedem einzelnen Kunden geben.
            </p>
          </div></RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Qualität</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir verwenden nur die besten Materialien und modernsten Techniken, um ein makelloses Ergebnis zu garantieren. Unsere Mitarbeiter werden kontinuierlich geschult, um die höchsten Standards zu erfüllen.
              </p>
            </Card>
            
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Zuverlässigkeit</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Pünktlichkeit, Diskretion und ein fester Ansprechpartner sind für uns selbstverständlich. Sie können sich darauf verlassen, dass wir unsere Zusagen einhalten – immer.
              </p>
            </Card>
            
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Kundennähe</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir hören Ihnen zu und entwickeln individuelle Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind. Ihre Zufriedenheit ist unser größter Ansporn.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <RevealOnScroll><div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Die Zufriedenheit unserer Kunden ist der beste Beweis für unsere Qualität. Hier sind einige Stimmen von Unternehmen, die uns vertrauen.
            </p>
          </div></RevealOnScroll>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 font-serif italic text-lg">
                "Die Zusammenarbeit mit FIMI-Service ist ein echter Gewinn. Das Team ist professionell, zuverlässig und das Ergebnis immer perfekt. Wir können sie uneingeschränkt empfehlen."
              </p>
              <div>
                <div className="font-bold text-slate-900">Anna Meier</div>
                <div className="text-slate-600 text-sm">CEO, Meier AG</div>
              </div>
            </Card>

            <Card className="p-8 hover-lift hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 font-serif italic text-lg">
                "Seit wir die Reinigung unserer Büros an FIMI-Service übergeben haben, hat sich die Arbeitsatmosphäre spürbar verbessert. Ein sauberes Umfeld motiviert!"
              </p>
              <div>
                <div className="font-bold text-slate-900">Peter Schmidt</div>
                <div className="text-slate-600 text-sm">Office Manager, Schmidt & Partner</div>
              </div>
            </Card>

            <Card className="p-8 hover-lift hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 font-serif italic text-lg">
                "Die Flexibilität und die hohe Qualität der Arbeit haben uns überzeugt. FIMI-Service ist ein Partner, auf den man sich verlassen kann."
              </p>
              <div>
                <div className="font-bold text-slate-900">Maria Rossi</div>
                <div className="text-slate-600 text-sm">Inhaberin, Rossi Boutique</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Unsere Geschäftsführung
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              FIMI-Service wird von zwei erfahrenen Unternehmern geführt, die mit Leidenschaft und Engagement für höchste Qualität in der Gebäudereinigung sorgen.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 hover-lift text-center hover-tilt">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">NT</span>
              </div>
              <div className="font-bold text-slate-900 text-2xl mb-2">Ntonalnt Tzoutzis</div>
              <div className="text-primary font-semibold mb-4">Geschäftsführer</div>
              <p className="text-slate-600">
                Mit langjähriger Erfahrung im Facility Management und einem Auge für Details sorgt Ntonalnt Tzoutzis dafür, dass jedes Projekt mit höchster Präzision umgesetzt wird.
              </p>
            </Card>
            <Card className="p-8 hover-lift text-center hover-tilt">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary/70 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">EQ</span>
              </div>
              <div className="font-bold text-slate-900 text-2xl mb-2">Ergest Qiraj</div>
              <div className="text-secondary font-semibold mb-4">Geschäftsführer</div>
              <p className="text-slate-600">
                Ergest Qiraj bringt umfassende Expertise in der professionellen Gebäudereinigung mit und garantiert höchste Qualitätsstandards für alle Kunden.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für eine saubere Zukunft?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Lassen Sie uns gemeinsam für eine saubere und professionelle Umgebung sorgen. Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch und ein individuelles Angebot.
          </p>
          <Link href="/kontakt">
            <MagneticHover><Button size="lg" variant="secondary" className="text-lg">
              Jetzt Kontakt aufnehmen <ArrowRight className="ml-2 w-5 h-5" />
            </Button></MagneticHover>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
