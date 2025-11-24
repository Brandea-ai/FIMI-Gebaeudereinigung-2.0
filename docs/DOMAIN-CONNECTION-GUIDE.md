# Domain-Verknüpfung Guide: fimi-service.de → Vercel

**Ziel:** Domain fimi-service.de mit Vercel-Deployment verbinden
**Zeitaufwand:** 15-30 Minuten (+ 24-48h DNS-Propagierung)
**Schwierigkeit:** Mittel
**Kosten:** Kostenlos (bei Vercel Free/Hobby Plan)

---

## Übersicht

### Was Sie brauchen:
- ✅ Vercel-Account (vercel.com)
- ✅ Domain fimi-service.de (registriert bei Domain-Provider)
- ✅ Zugriff auf DNS-Einstellungen der Domain
- ✅ FIMI-Service Projekt auf Vercel deployed

### Was passiert:
1. Domain zu Vercel-Projekt hinzufügen
2. DNS-Einträge bei Domain-Provider setzen
3. SSL-Zertifikat automatisch erstellen (Let's Encrypt)
4. fimi-service.de zeigt auf Ihre Website

---

## Schritt 1: Vercel-Projekt vorbereiten

### 1.1 Bei Vercel einloggen

1. Gehen Sie zu: **https://vercel.com**
2. Login mit GitHub/GitLab/Bitbucket Account
3. Dashboard öffnet sich

### 1.2 Projekt auswählen

1. Finden Sie Ihr Projekt: **"FIMI-Gebaeudereinigung-2.0"** (oder wie benannt)
2. Klicken Sie auf das Projekt
3. Sie sehen die aktuelle Deployment-URL:
   ```
   https://fimi-service-[hash].vercel.app
   ```

### 1.3 Settings öffnen

1. Oben rechts: **"Settings"** klicken
2. Linkes Menü: **"Domains"** wählen

---

## Schritt 2: Domain zu Vercel hinzufügen

### 2.1 Domain eingeben

1. Im "Domains" Tab
2. Input-Feld: **"Add Domain"**
3. Eingeben: `fimi-service.de`
4. Klicken Sie: **"Add"**

### 2.2 Domain-Typ wählen

Vercel fragt: "How is this domain owned?"

**Option A: Primary Domain** (EMPFOHLEN)
- Dies ist Ihre Haupt-Domain
- **Wählen Sie diese Option**

**Option B: Redirect**
- Nur für Weiterleitungen
- Nicht wählen!

### 2.3 DNS-Konfiguration anzeigen

Vercel zeigt Ihnen jetzt die benötigten DNS-Einträge:

**Für Apex Domain (fimi-service.de):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Für www Subdomain (www.fimi-service.de):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**WICHTIG:** Kopieren Sie diese Werte oder lassen Sie das Fenster offen!

---

## Schritt 3: DNS-Einträge setzen

### 3.1 Domain-Provider identifizieren

Wo wurde Ihre Domain registriert?
- IONOS (1&1)
- Strato
- Namecheap
- GoDaddy
- Google Domains
- etc.

### 3.2 DNS-Management öffnen

#### Bei IONOS:
1. Login: https://www.ionos.de
2. Domains & SSL
3. Domain wählen: fimi-service.de
4. DNS → **"DNS-Einstellungen verwalten"**

#### Bei Strato:
1. Login: https://www.strato.de
2. Domainverwaltung
3. Domain: fimi-service.de → **"Verwalten"**
4. **"DNS-Einstellungen"**

#### Bei Namecheap:
1. Login: https://namecheap.com
2. Domain List
3. Domain: fimi-service.de → **"Manage"**
4. Advanced DNS Tab

#### Bei Google Domains:
1. Login: https://domains.google.com
2. Domain wählen
3. DNS → **"Manage custom records"**

### 3.3 A-Record hinzufügen (Apex Domain)

Erstellen Sie einen neuen DNS-Eintrag:

| Feld | Wert |
|------|------|
| **Type** | A |
| **Host/Name** | @ (oder leer, oder fimi-service.de) |
| **Value/Points to** | `76.76.21.21` |
| **TTL** | 3600 (oder Auto) |

**WICHTIG:**
- Löschen Sie ALLE existierenden A-Records für @
- Es sollte NUR der Vercel A-Record existieren

**Beispiel (IONOS):**
```
Typ: A
Host: @
Wert: 76.76.21.21
TTL: 3600
```

Klicken Sie: **"Speichern"** oder **"Add Record"**

### 3.4 CNAME-Record hinzufügen (www Subdomain)

Erstellen Sie einen zweiten DNS-Eintrag:

| Feld | Wert |
|------|------|
| **Type** | CNAME |
| **Host/Name** | www |
| **Value/Points to** | `cname.vercel-dns.com` |
| **TTL** | 3600 (oder Auto) |

**WICHTIG:**
- Löschen Sie existierende CNAME-Records für www
- CNAME-Wert OHNE Punkt am Ende!

**Beispiel (IONOS):**
```
Typ: CNAME
Host: www
Wert: cname.vercel-dns.com
TTL: 3600
```

Klicken Sie: **"Speichern"**

### 3.5 Alte Einträge entfernen (falls vorhanden)

⚠️ **Konflikte vermeiden:**

Löschen Sie (falls vorhanden):
- Alte A-Records für @ (außer Vercel)
- Alte AAAA-Records für @ (IPv6)
- Alte CNAME-Records für www (außer Vercel)
- Parking-Page Redirects

**Behalten Sie:**
- MX-Records (E-Mail)
- TXT-Records (z.B. Google Verification)
- Andere Subdomains (z.B. mail.fimi-service.de)

---

## Schritt 4: DNS-Propagierung abwarten

### 4.1 Wartezeit

⏰ **Typische Dauer:**
- Minimum: 5-10 Minuten
- Normal: 1-2 Stunden
- Maximum: 24-48 Stunden

### 4.2 Status prüfen

**In Vercel:**
1. Settings → Domains
2. Neben Ihrer Domain sehen Sie:
   - ⏳ **"Pending"** - DNS noch nicht propagiert
   - ⚠️ **"Invalid Configuration"** - DNS-Fehler
   - ✅ **"Valid Configuration"** - Erfolgreich!

**Mit DNS-Checker:**
1. Gehen Sie zu: https://dnschecker.org
2. Eingeben: `fimi-service.de`
3. Type wählen: **A**
4. Prüfen Sie ob `76.76.21.21` weltweit sichtbar

**Mit Terminal (macOS/Linux):**
```bash
dig fimi-service.de
# Sollte 76.76.21.21 zeigen

dig www.fimi-service.de
# Sollte cname.vercel-dns.com zeigen
```

**Mit Command Prompt (Windows):**
```cmd
nslookup fimi-service.de
# Sollte 76.76.21.21 zeigen
```

### 4.3 Bei Problemen

**"Invalid Configuration" nach 24h:**
1. DNS-Einträge nochmal prüfen
2. A-Record korrekt? `76.76.21.21`
3. Alte Einträge gelöscht?
4. TTL abgelaufen? (Warten Sie TTL-Zeit)

**Kontakt Vercel Support:**
- https://vercel.com/support
- Kostenlos auch für Free Plan

---

## Schritt 5: SSL-Zertifikat (automatisch)

### 5.1 Automatische Erstellung

✅ Vercel erstellt automatisch ein **kostenloses SSL-Zertifikat** (Let's Encrypt)

Sobald DNS propagiert ist:
1. Vercel erkennt die Domain
2. Let's Encrypt Zertifikat wird angefordert
3. HTTPS wird automatisch aktiviert
4. HTTP → HTTPS Redirect aktiv

**Dauer:** 1-5 Minuten nach DNS-Propagierung

### 5.2 Status prüfen

**In Vercel:**
1. Settings → Domains
2. Neben Domain: **🔒 SSL Certificate**
   - ✅ **"Active"** - HTTPS funktioniert
   - ⏳ **"Pending"** - Wird erstellt
   - ❌ **"Failed"** - DNS-Problem

**Im Browser:**
1. Öffnen Sie: https://fimi-service.de
2. Adresszeile sollte Schloss-Symbol 🔒 zeigen
3. Klicken auf Schloss → **"Zertifikat"**
4. Ausgestellt von: **Let's Encrypt**

### 5.3 HTTPS erzwingen

Vercel leitet automatisch HTTP → HTTPS um.

**Zusätzliche Sicherheit (bereits konfiguriert):**
- HSTS Header in `next.config.js` ✅
- Erzwingt HTTPS für 1 Jahr

---

## Schritt 6: www → Apex Redirect konfigurieren

### 6.1 Redirect-Regel (optional)

Entscheiden Sie:
- **Option A:** www.fimi-service.de → fimi-service.de (EMPFOHLEN)
- **Option B:** fimi-service.de → www.fimi-service.de

**Empfehlung:** Option A (ohne www als Haupt-Domain)

### 6.2 In Vercel konfigurieren

**Automatisch (Vercel macht das):**
Wenn Sie `fimi-service.de` als Primary Domain gesetzt haben:
- ✅ www.fimi-service.de leitet zu fimi-service.de um

**Manuell (falls nötig):**
1. Settings → Domains
2. www.fimi-service.de → **"Edit"**
3. Redirect to: `fimi-service.de`
4. Speichern

### 6.3 Testen

```bash
# Test Redirect
curl -I https://www.fimi-service.de
# Sollte zeigen:
# HTTP/2 308
# Location: https://fimi-service.de
```

---

## Schritt 7: Finale Tests

### 7.1 Domain erreichbar

**Testen Sie alle Varianten:**
```
✅ https://fimi-service.de
✅ https://www.fimi-service.de (sollte → fimi-service.de redirecten)
✅ http://fimi-service.de (sollte → https:// upgraden)
✅ http://www.fimi-service.de (sollte → https://fimi-service.de)
```

### 7.2 SSL-Check

Tools nutzen:
- https://www.ssllabs.com/ssltest/
- Domain eingeben: `fimi-service.de`
- **Ziel-Score: A oder A+**

Vercel sollte standardmäßig A/A+ erreichen.

### 7.3 Alle Seiten testen

Navigieren Sie durch:
- ✅ Homepage: https://fimi-service.de
- ✅ Services: https://fimi-service.de/business/bueroreinigung
- ✅ Blog: https://fimi-service.de/blog
- ✅ Kontakt: https://fimi-service.de/kontakt
- ✅ Impressum: https://fimi-service.de/impressum

### 7.4 Mobile testen

1. Öffnen Sie auf Smartphone
2. Oder Chrome DevTools → Mobile View
3. Navigation testen
4. Formulare testen

---

## Schritt 8: Deployment-Einstellungen

### 8.1 Production Branch

**In Vercel:**
1. Settings → Git
2. Production Branch: **main** (oder master)
3. Speichern

✅ **Bedeutung:**
- Git Push zu `main` → Automatisches Deployment
- Domain fimi-service.de zeigt auf `main` Branch

### 8.2 Preview Deployments

**Automatisch aktiv:**
- Pull Request → Preview URL erstellt
- Feature Branch → Preview URL
- Beispiel: `feature-xyz-abc123.vercel.app`

**Vorteil:**
- Änderungen testen BEVOR sie live gehen
- Team kann reviewen

### 8.3 Environment Variables

Falls Sie API-Keys oder Secrets haben:

1. Settings → Environment Variables
2. Key-Value Paare hinzufügen
3. **Production** auswählen
4. Speichern

**Beispiel:**
```
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=[secret]
```

**WICHTIG:**
- Nie Secrets in Code committen!
- Nur in Vercel Environment Variables

---

## Schritt 9: Monitoring Setup

### 9.1 Analytics (Vercel)

**Vercel Analytics aktivieren (optional):**
1. Projekt → Analytics Tab
2. **"Enable Analytics"**
3. Free: 100k Events/Monat

**Zeigt:**
- Page Views
- Unique Visitors
- Top Pages
- Real User Monitoring (RUM)

### 9.2 Speed Insights

**Vercel Speed Insights (optional):**
1. Projekt → Speed Insights
2. **"Enable"**

**Zeigt:**
- Core Web Vitals
- Real Performance Daten
- LCP, FID, CLS Scores

### 9.3 Externe Monitoring

**Empfohlene Tools:**
- **Google Analytics:** Traffic & User Behavior
- **Google Search Console:** SEO & Indexierung
- **UptimeRobot:** Uptime-Monitoring (kostenlos)

---

## Troubleshooting

### Problem: "Domain could not be added"

**Ursache:** Domain bereits in anderem Vercel-Projekt

**Lösung:**
1. Andere Projekte prüfen
2. Domain dort entfernen
3. Erneut zu FIMI-Projekt hinzufügen

---

### Problem: DNS propagiert nicht

**Checklist:**
- [ ] A-Record korrekt? `76.76.21.21`
- [ ] CNAME korrekt? `cname.vercel-dns.com`
- [ ] Alte Einträge gelöscht?
- [ ] TTL abgelaufen? (Warte TTL-Zeit)
- [ ] DNS-Provider speichert Änderungen?

**Test:**
```bash
dig fimi-service.de @8.8.8.8
# Prüft gegen Google DNS
```

Sollte `76.76.21.21` zeigen.

---

### Problem: SSL-Zertifikat schlägt fehl

**Ursachen:**
1. **DNS nicht korrekt:** Warten bis A-Record propagiert
2. **CAA Record blockiert:** Prüfen ob CAA-Record Let's Encrypt erlaubt
3. **Firewall:** Vercel kann Domain nicht erreichen

**CAA Record prüfen:**
```bash
dig CAA fimi-service.de
```

**Falls CAA vorhanden**, sollte er Let's Encrypt erlauben:
```
fimi-service.de. CAA 0 issue "letsencrypt.org"
```

**Lösung:**
- CAA Record hinzufügen (letsencrypt.org)
- ODER CAA Record komplett löschen (erlaubt alle CAs)

---

### Problem: "This site can't provide a secure connection"

**Ursache:** SSL noch nicht aktiv

**Lösung:**
1. Warten bis DNS propagiert (24-48h)
2. In Vercel prüfen: Domains → SSL Status
3. Falls "Failed": Support kontaktieren

---

### Problem: Website zeigt alte Version

**Ursache:** Browser-Cache oder CDN-Cache

**Lösung:**
```
Hard Refresh:
- Windows: Ctrl + Shift + R
- Mac: Cmd + Shift + R
```

**Cache löschen:**
1. Browser-Einstellungen
2. Browserdaten löschen
3. Cache leeren
4. Seite neu laden

**Vercel Cache löschen:**
1. Vercel Dashboard
2. Deployment → **"..."** Menu
3. **"Redeploy"**
4. ✓ "Use existing Build Cache" DEAKTIVIEREN

---

## Checkliste: Domain Go-Live

### Pre-Go-Live:
- [ ] Vercel-Projekt deployed und funktioniert
- [ ] Domain registriert und Zugriff auf DNS
- [ ] Alle Content-Checks abgeschlossen (siehe PRE-LAUNCH-CHECKLIST.md)
- [ ] Impressum mit korrekter USt-ID ✅
- [ ] E-Mail-Adresse info@fimi-service.de aktiv

### Domain-Setup:
- [ ] Domain zu Vercel hinzugefügt
- [ ] A-Record gesetzt (76.76.21.21)
- [ ] CNAME-Record gesetzt (cname.vercel-dns.com)
- [ ] Alte DNS-Einträge entfernt
- [ ] DNS propagiert (24-48h)

### Vercel-Konfiguration:
- [ ] Domain-Status: "Valid Configuration" ✅
- [ ] SSL-Status: "Active" 🔒
- [ ] www → apex Redirect aktiv
- [ ] HTTP → HTTPS Redirect aktiv
- [ ] Production Branch: main

### Testing:
- [ ] https://fimi-service.de erreichbar
- [ ] https://www.fimi-service.de redirect funktioniert
- [ ] Alle Seiten laden korrekt
- [ ] SSL-Zertifikat gültig (Schloss-Symbol)
- [ ] Mobile funktioniert
- [ ] Formulare funktionieren

### Post-Go-Live:
- [ ] Google Search Console setup (siehe GOOGLE-SEARCH-CONSOLE-GUIDE.md)
- [ ] Sitemap eingereicht
- [ ] Analytics aktiviert (optional)
- [ ] UptimeRobot Monitoring (optional)
- [ ] Team/Kunde informiert

---

## Wichtige URLs nach Go-Live

### Ihre Website:
- **Production:** https://fimi-service.de
- **Vercel Dashboard:** https://vercel.com/[username]/fimi-gebaeudereinigung-2-0

### Monitoring:
- **Vercel Analytics:** Vercel Dashboard → Analytics Tab
- **Google Search Console:** https://search.google.com/search-console
- **SSL Check:** https://www.ssllabs.com/ssltest/analyze.html?d=fimi-service.de

### Tools:
- **DNS Checker:** https://dnschecker.org
- **PageSpeed:** https://pagespeed.web.dev/?url=https://fimi-service.de

---

## Kosten-Übersicht

### Vercel Hosting:
- **Free Plan:** ✅ Kostenlos
  - 100 GB Bandwidth/Monat
  - Unlimited Deployments
  - SSL inklusive
  - Analytics: 100k Events (optional)

- **Pro Plan:** $20/Monat (falls mehr Traffic)
  - 1 TB Bandwidth
  - Advanced Analytics
  - Team Collaboration

### Domain:
- **Registrierung:** ~10-15€/Jahr (bei IONOS, Strato, etc.)
- **Erneuerung:** Jährlich
- **SSL:** ✅ Kostenlos via Let's Encrypt

### Gesamt (Free Plan):
**~10-15€/Jahr** (nur Domain-Kosten)

---

## Support-Kontakte

### Vercel:
- **Dokumentation:** https://vercel.com/docs
- **Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

### Domain-Provider:
- **IONOS Support:** https://www.ionos.de/hilfe
- **Strato Support:** https://www.strato.de/service
- **Namecheap:** https://www.namecheap.com/support

### Next.js:
- **Docs:** https://nextjs.org/docs
- **Discord:** https://nextjs.org/discord

---

## Zusammenfassung

### Was Sie gemacht haben:
1. ✅ Domain zu Vercel hinzugefügt
2. ✅ DNS-Einträge bei Provider gesetzt
3. ✅ SSL-Zertifikat automatisch erstellt
4. ✅ Domain funktioniert mit HTTPS

### Timeline:
- **Tag 1 (0-2h):** Domain-Setup & DNS-Einträge
- **Tag 1-2 (2-48h):** DNS-Propagierung
- **Tag 2:** SSL aktiviert, Website live!
- **Woche 1:** Google beginnt mit Indexierung

### Nächste Schritte:
1. Google Search Console einrichten
2. Sitemap einreichen
3. Analytics aktivieren (optional)
4. First Monitoring prüfen

🎉 **Herzlichen Glückwunsch - Ihre Website ist live!**

---

**Erstellt am:** 23. November 2025
**Für:** FIMI-Service (fimi-service.de)
**Version:** 1.0
**Geschätzte Dauer:** 30 Min Setup + 24-48h DNS
