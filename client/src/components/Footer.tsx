'use client'

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    acceptPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          acceptPrivacy: false
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="kontakt-formular" className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Kontaktformular Section */}
      <div className="bg-gradient-to-r from-secondary/10 to-secondary/20/50 dark:from-primary/20 dark:to-primary/90/10 py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                Jetzt <span className="text-secondary">Kontakt aufnehmen</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400">
                Fordern Sie ein unverbindliches Angebot an – wir melden uns innerhalb von 24 Stunden
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 lg:p-8 border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="ihre@email.de"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="0174 722 5473"
                  />
                </div>

                {/* Service - Gruppiert nach Kategorien */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Gewünschte Leistung
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">Bitte wählen...</option>
                    
                    <optgroup label="Premium Services">
                      <option value="Privatjet Reinigung">Privatjet Reinigung</option>
                      <option value="Yacht Reinigung">Yacht Reinigung</option>
                      <option value="Private Housekeeping">Private Housekeeping</option>
                      <option value="Luxusimmobilien">Luxusimmobilien</option>
                    </optgroup>
                    
                    <optgroup label="B2B Lösungen">
                      <option value="Büroreinigung">Büroreinigung</option>
                      <option value="Industriereinigung">Industriereinigung</option>
                      <option value="Fassadenreinigung">Fassadenreinigung</option>
                      <option value="Fensterreinigung">Fensterreinigung</option>
                      <option value="Hallenreinigung">Hallenreinigung</option>
                      <option value="Maschinenreinigung">Maschinenreinigung</option>
                      <option value="Baureinigung">Baureinigung</option>
                      <option value="Außenanlagen">Außenanlagen</option>
                      <option value="Facility Management">Facility Management</option>
                    </optgroup>
                    
                    <optgroup label="Business Services">
                      <option value="Business Büroreinigung">Business Büroreinigung</option>
                      <option value="Business Industriereinigung">Business Industriereinigung</option>
                      <option value="Business Fassadenreinigung">Business Fassadenreinigung</option>
                      <option value="Business Fensterreinigung">Business Fensterreinigung</option>
                      <option value="Business Hallenreinigung">Business Hallenreinigung</option>
                      <option value="Business Maschinenreinigung">Business Maschinenreinigung</option>
                      <option value="Business Baureinigung">Business Baureinigung</option>
                      <option value="Business Außenanlagen">Business Außenanlagen</option>
                      <option value="Business Facility Management">Business Facility Management</option>
                    </optgroup>
                    
                    <optgroup label="Basis Services">
                      <option value="Unterhaltsreinigung">Unterhaltsreinigung</option>
                      <option value="Hausmeisterservice">Hausmeisterservice</option>
                      <option value="Winterdienst">Winterdienst</option>
                      <option value="Beschaffung">Beschaffung</option>
                      <option value="Sonderleistungen">Sonderleistungen</option>
                    </optgroup>
                    
                    <optgroup label="Sonstiges">
                      <option value="Beratung">Beratung</option>
                      <option value="Andere">Andere</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Nachricht */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>

              {/* Datenschutz Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                    required
                    className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ich habe die{" "}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary/70 hover:underline font-medium"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  * Pflichtfelder
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-3.5 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                  <p className="text-sm text-green-700 dark:text-green-400">
                    ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-secondary/10 dark:bg-primary/20/20 border border-secondary/30 dark:border-primary/90 rounded-md">
                  <p className="text-sm text-primary/90 dark:text-primary/70">
                    ✗ Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-slate-900 text-white">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div>
              <div className="relative h-32 w-64 mb-6">
                <Image src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png" alt="FIMI-Service" fill className="object-contain object-left" />
              </div>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Ihr professioneller Business-Partner für Gebäudereinigung in Ober- und Niederbayern. Qualität, Zuverlässigkeit und Präzision seit über 15 Jahren.
              </p>
              <div className="space-y-3">
                <Link href="/ueber-uns"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Über Uns</div></Link>
                <Link href="/kontakt"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Kontakt</div></Link>
                <Link href="/referenzen"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Referenzen</div></Link>
                <Link href="/blog"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Blog</div></Link>
              </div>
            </div>

            {/* KATEGORIE 1: GEWERBLICHE OBJEKTREINIGUNG */}
            <div>
              <h3 className="font-bold text-xl mb-5 text-secondary">Gewerbliche Objektreinigung</h3>
              <div className="space-y-3">
                <Link href="/business/bueroreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Büroreinigung</div></Link>
                <Link href="/basis/unterhaltsreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Unterhaltsreinigung</div></Link>
                <Link href="/business/baureinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Baureinigung</div></Link>
                <Link href="/business/hallenreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Hallenreinigung</div></Link>
                <Link href="/business/parkplatzreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Parkplatzreinigung</div></Link>
                <Link href="/business/fensterreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Fensterreinigung</div></Link>
              </div>
            </div>

            {/* KATEGORIE 2: INDUSTRIELLE & SPEZIALREINIGUNG */}
            <div>
              <h3 className="font-bold text-xl mb-5 text-secondary">Industrielle & Spezialreinigung</h3>
              <div className="space-y-3">
                <Link href="/business/industriereinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Industriereinigung</div></Link>
                <Link href="/business/maschinenreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Maschinenreinigung</div></Link>
                <Link href="/business/fassadenreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Fassadenreinigung</div></Link>
                <Link href="/business/tiefgaragenreinigung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Tiefgaragenreinigung</div></Link>
                <Link href="/business/aussenanlagen"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Außenanlagenpflege</div></Link>
                <Link href="/basis/sonderleistungen"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Sonderleistungen</div></Link>
              </div>
            </div>

            {/* KATEGORIE 3: FACILITY MANAGEMENT & SERVICES */}
            <div>
              <h3 className="font-bold text-xl mb-5 text-secondary">Facility Management & Services</h3>
              <div className="space-y-3">
                <Link href="/business/facility-management"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Facility Management</div></Link>
                <Link href="/basis/hausmeisterservice"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Hausmeisterservice</div></Link>
                <Link href="/basis/winterdienst"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Winterdienst</div></Link>
                <Link href="/basis/beschaffung"><div className="text-slate-300 hover:text-secondary transition-smooth cursor-pointer text-base font-medium">Beschaffungsmanagement</div></Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Service-Regionen</h3>
              <div className="space-y-2 mb-6">
                <div className="text-slate-400 text-sm">Landshut</div>
                <div className="text-slate-400 text-sm">Regensburg</div>
                <div className="text-slate-400 text-sm">Freising</div>
                <div className="text-slate-400 text-sm">Straubing</div>
                <div className="text-slate-400 text-sm">Deggendorf</div>
                <div className="text-slate-400 text-sm">Augsburg</div>
                <div className="text-slate-400 text-sm">Nürnberg</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <div>
                © {currentYear} FIMI-Service | Ntonalnt Tzoutzis & Ergest Qiraj. Alle Rechte vorbehalten.
              </div>
              <div className="flex gap-6">
                <Link href="/impressum"><span className="hover:text-white transition-smooth cursor-pointer">Impressum</span></Link>
                <Link href="/datenschutz"><span className="hover:text-white transition-smooth cursor-pointer">Datenschutz</span></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}
