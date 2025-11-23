'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const businessServices = [
    { title: "Büroreinigung", href: "/business/bueroreinigung" },
    { title: "Unterhaltsreinigung", href: "/basis/unterhaltsreinigung" },
    { title: "Baureinigung", href: "/business/baureinigung" },
    { title: "Hallenreinigung", href: "/business/hallenreinigung" },
    { title: "Parkplatzreinigung", href: "/business/parkplatzreinigung" },
    { title: "Fensterreinigung", href: "/business/fensterreinigung" },
    { title: "Industriereinigung", href: "/business/industriereinigung" },
    { title: "Maschinenreinigung", href: "/business/maschinenreinigung" },
    { title: "Fassadenreinigung", href: "/business/fassadenreinigung" },
    { title: "Tiefgaragenreinigung", href: "/business/tiefgaragenreinigung" },
    { title: "Außenanlagenpflege", href: "/business/aussenanlagen" },
    { title: "Sonderleistungen", href: "/basis/sonderleistungen" }
  ];

  const facilityServices = [
    { title: "Facility Management", href: "/business/facility-management" },
    { title: "Hausmeisterservice", href: "/basis/hausmeisterservice" },
    { title: "Winterdienst", href: "/basis/winterdienst" },
    { title: "Beschaffungsmanagement", href: "/basis/beschaffung" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/98 backdrop-blur-sm"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer relative h-16 md:h-20 w-40 md:w-48">
              <Image src="/logo.png" alt="FIMI-Service" fill className="object-contain object-left" priority />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('leistungen')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="text-foreground hover:text-secondary transition-smooth font-medium"
                onClick={() => setActiveDropdown(activeDropdown === 'leistungen' ? null : 'leistungen')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === 'leistungen' ? null : 'leistungen');
                  } else if (e.key === 'Escape') {
                    setActiveDropdown(null);
                  }
                }}
                aria-expanded={activeDropdown === 'leistungen'}
                aria-haspopup="true"
              >
                Leistungen
              </button>
              {activeDropdown === 'leistungen' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[700px]">
                  <div className="bg-white rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-bold text-secondary mb-4 uppercase tracking-wide">Gewerbliche Reinigung</h3>
                        <div className="space-y-2">
                          {businessServices.map((service, index) => (
                            <Link key={index} href={service.href}>
                              <div className="px-3 py-2 hover:bg-secondary/10 hover:text-secondary rounded-md transition-smooth cursor-pointer text-sm">
                                {service.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-secondary mb-4 uppercase tracking-wide">Facility Management</h3>
                        <div className="space-y-2">
                          {facilityServices.map((service, index) => (
                            <Link key={index} href={service.href}>
                              <div className="px-3 py-2 hover:bg-secondary/10 hover:text-secondary rounded-md transition-smooth cursor-pointer text-sm">
                                {service.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/ueber-uns" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Über uns
            </Link>
            <Link href="/referenzen" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Referenzen
            </Link>
            <Link href="/blog" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Blog
            </Link>
            <Link href="/kontakt">
              <Button>Kontakt aufnehmen</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="container py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-secondary transition-smooth">Home</div>
            </Link>
            <div>
              <div className="py-2 font-semibold text-foreground">Gewerbliche Reinigung</div>
              <div className="pl-4 space-y-2">
                {businessServices.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-secondary transition-smooth text-sm">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="py-2 font-semibold text-foreground">Facility Management</div>
              <div className="pl-4 space-y-2">
                {facilityServices.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-secondary transition-smooth text-sm">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-secondary transition-smooth">Über uns</div>
            </Link>
            <Link href="/referenzen" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-secondary transition-smooth">Referenzen</div>
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-secondary transition-smooth">Blog</div>
            </Link>
            <Link href="/kontakt" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Kontakt aufnehmen</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
