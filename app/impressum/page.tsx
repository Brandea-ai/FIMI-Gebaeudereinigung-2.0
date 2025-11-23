'use client'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Impressum - FIMI-Service"
        description="Rechtliche Hinweise und Impressum von FIMI-Service. Alle Informationen zu unserem Unternehmen."
        keywords="Impressum, rechtliche Hinweise, Kontakt, Adresse, UST-ID"
        url="/impressum"
      />
      <Navigation />

      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12">Impressum</h1>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Verantwortlich für den Inhalt</h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p className="font-bold text-xl text-slate-900">FIMI-Service</p>
                <p>Geschäftsführer: Ntonalnt Tzoutzis und Ergest Qiraj</p>
                <p>Kellerstr. 39</p>
                <p>84036 Landshut</p>
                <p>Deutschland</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Kontakt</h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p><strong>Telefon:</strong> <a href="tel:01747225473" className="text-primary hover:underline">0174 722 5473</a></p>
                <p><strong>E-Mail:</strong> <a href="mailto:info@fimi-service.de" className="text-primary hover:underline">info@fimi-service.de</a></p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Umsatzsteuer-Identifikationsnummer</h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p><strong>UST-ID:</strong></p>
                <p className="font-mono">DE347549925</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Haftungsausschluss</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
                <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Haftung für Links</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Urheberrechte</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschließlich <strong>FIMI-Service</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</p>
              </div>
            </Card>

            <Card className="p-8 bg-amber-50 border-l-4 border-amber-500">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-amber-900">⚠️ Wichtige Hinweise</h2>
              <div className="space-y-6 text-amber-800 leading-relaxed text-base">
                <div>
                  <p className="font-bold text-lg mb-2">ISO-Zertifizierung:</p>
                  <p>Die ISO-Zertifizierung befindet sich derzeit in Bearbeitung. Wir arbeiten aktiv an der Erfüllung aller Standards und erwarten die Zertifizierung in naher Zukunft.</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">Verwendung von KI-generierten Bildern:</p>
                  <p>Einige Bilder auf dieser Website wurden mit Unterstützung von künstlicher Intelligenz (AI) erstellt. Diese dienen ausschließlich zu Illustrations- und Marketingzwecken und repräsentieren die Qualität unserer Dienstleistungen.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Datenschutz</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p>In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                <p className="mt-4">Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary hover:underline font-semibold">Datenschutzerklärung</a>.</p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
