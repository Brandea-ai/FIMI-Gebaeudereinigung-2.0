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
import { CheckCircle, Star, Clock, Shield, Zap, ArrowRight, AlertCircle, Sparkles, Wrench, Building2 } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Sonderleistungen() {
  const serviceData = {
    name: "Professionelle Sonderleistungen",
    description: "Spezielle Reinigungsleistungen für außergewöhnliche Anforderungen. Schnell, kompetent und zuverlässig.",
    url: "/basis/sonderleistungen",
    category: "Special Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sonderleistungen Ober- und Niederbayern - FIMI-Service Landshut"
        description="Professionelle Sonderleistungen in Ober- und Niederbayern. Spezialreinigungen für außergewöhnliche Anforderungen."
        keywords="Sonderleistungen, Spezialreinigung Ober- und Niederbayern, Notfallreinigung, Express Reinigung"
        url="/basis/sonderleistungen"
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
                Professionelle Sonderleistungen
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Spezielle Reinigungsleistungen für außergewöhnliche Anforderungen in München, Landshut, Regensburg und ganz Ober- und Niederbayern. Von Notfallreinigung bis Express-Service.
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
                src="/industrial-floor-cleaning.jpg"
                alt="Sonderleistungen Spezialreinigung"
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
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-secondary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2 text-secondary">Express-Service</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Schnelle Reaktionszeiten innerhalb 24h</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2 text-secondary">Spezialisiert</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Für besondere Anforderungen</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-secondary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2 text-secondary">Professionell</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Geschulte Spezialisten</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2 text-secondary">24/7 Verfügbar</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Auch an Wochenenden</div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ParallaxImage
                src="/warehouse-cleaning.jpg"
                alt="Express Reinigung"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6">
                Für außergewöhnliche Situationen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Wenn Standard-Reinigung nicht ausreicht, sind wir Ihr Partner für Sonderleistungen. Von Notfallreinigungen über Tatortreinigung bis zu spezialisierten Sanierungsarbeiten.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: AlertCircle, text: "Notfall-Einsätze" },
                  { icon: Sparkles, text: "Spezialreinigungen" },
                  { icon: Wrench, text: "Sanierungsarbeiten" },
                  { icon: Building2, text: "Große Projekte" }
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
                Unsere Sonderleistungen im Detail
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Von Notfallreinigung bis zur spezialisierten Sanierung - wir bieten maßgeschneiderte Lösungen für besondere Anforderungen.
              </p>
              <div className="space-y-3">
                {[
                  "Notfallreinigung 24/7",
                  "Tatortreinigung (zertifiziert)",
                  "Wasserschaden-Sanierung",
                  "Brandschadenbeseitigung",
                  "Schimmel- und Geruchsentfernung",
                  "Entrümpelung & Messie-Wohnungen",
                  "Graffiti-Entfernung",
                  "Desinfektion & Schädlingsbekämpfung",
                  "Bauschlussreinigung Express",
                  "Event-Reinigung (vor/nach Veranstaltungen)"
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
                alt="Sonderleistungen Reinigung"
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

      {/* Special Areas Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4">
                Spezialisierte Bereiche
              </h2>
              <p className="text-lg text-slate-600 text-xs sm:text-sm md:text-base max-w-3xl mx-auto">
                Unsere Spezialisten sind für die anspruchsvollsten Reinigungsaufgaben ausgebildet
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3 text-secondary">Notfall & Express</h3>
              <p className="text-slate-600 text-sm mb-4">
                Schnelle Reaktion bei Notfällen wie Wasserschäden, Bränden oder anderen Katastrophen. 24/7 erreichbar.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-secondary"/>
                  <span>2-4 Stunden Reaktionszeit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-secondary"/>
                  <span>Versicherungsabwicklung</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3 text-secondary">Sanierung</h3>
              <p className="text-slate-600 text-sm mb-4">
                Professionelle Sanierung nach Schäden. Von Wasserschaden über Brandschaden bis zur kompletten Renovierung.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-secondary"/>
                  <span>Zertifizierte Fachkräfte</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-secondary"/>
                  <span>Modernste Technologie</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3 text-secondary">Tatortreinigung</h3>
              <p className="text-slate-600 text-sm mb-4">
                Diskrete und professionelle Reinigung nach Unglücksfällen. Zertifiziert nach gesetzlichen Vorgaben.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-secondary"/>
                  <span>100% Diskretion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-secondary"/>
                  <span>Gesetzlich konform</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">
                Alles was Sie über unsere Sonderleistungen wissen müssen
              </p>
            </div>
          </RevealOnScroll>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Wie schnell können Sie bei Notfällen vor Ort sein?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Bei Notfällen sind wir innerhalb von 2-4 Stunden in München, Landshut und Regensburg vor Ort. Unsere 24/7-Notfall-Hotline ist immer erreichbar. Für entferntere Regionen in Ober- und Niederbayern beträgt die Reaktionszeit maximal 6 Stunden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Übernehmen Sie die Abwicklung mit der Versicherung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir haben langjährige Erfahrung mit Versicherungsabwicklungen. Wir erstellen detaillierte Schadensberichte, dokumentieren alle Arbeiten fotografisch und kommunizieren direkt mit Ihrer Versicherung. So wird der Prozess für Sie so einfach wie möglich.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Sind Sie für Tatortreinigung zertifiziert?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, unsere Mitarbeiter sind speziell für Tatortreinigung geschult und zertifiziert. Wir arbeiten diskret, professionell und unter Einhaltung aller gesetzlichen Vorgaben. Die Entsorgung erfolgt gemäß den Bestimmungen für biologisch kontaminierte Abfälle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Ausrüstung nutzen Sie für Sanierungsarbeiten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir nutzen professionelle Trocknungsgeräte, HEPA-Filteranlagen, Ozon-Generatoren zur Geruchsbeseitigung, Industriesauger und spezielle Messgeräte zur Feuchtigkeitskontrolle. Alle Geräte werden regelmäßig gewartet und sind auf dem neuesten Stand der Technik.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie auch Desinfektion gegen Corona/COVID-19 an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten professionelle Desinfektionsleistungen mit viruziden Mitteln an. Unsere Mitarbeiter sind für Hygiene- und Desinfektionsmaßnahmen geschult. Wir desinfizieren Büros, Praxen, Produktionsstätten und alle anderen gewerblichen Räume.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-primary/5 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Was kostet ein Notfall-Einsatz?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Die Kosten hängen von Art und Umfang des Notfalls ab. Wir erstellen vor Ort ein transparentes Angebot. Bei Versicherungsschäden rechnen wir direkt mit der Versicherung ab. Für einen Kostenvoranschlag kontaktieren Sie uns bitte telefonisch oder per E-Mail.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Notfall oder besondere Anforderung?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns sofort für ein unverbindliches Angebot. Wir sind 24/7 für Sie erreichbar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#kontakt-formular">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Jetzt Notfall-Hotline anrufen
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
