# 🔑 TOKEN-SETUP-ANLEITUNG

## ⚠️ WICHTIG: Tokens sind wie Passwörter!

**NIEMALS:**
- ❌ Tokens in Code-Dateien speichern
- ❌ Tokens in Git committen
- ❌ Tokens öffentlich teilen
- ❌ Tokens in Markdown-Dateien schreiben

**IMMER:**
- ✅ Tokens sicher generieren
- ✅ Tokens in Umgebungsvariablen speichern
- ✅ Tokens regelmäßig erneuern

---

## 🔐 1. Vercel Token generieren

### Schritt 1: Vercel Dashboard öffnen
1. Gehe zu: https://vercel.com/account/tokens
2. Logge dich mit deinem Vercel-Account ein

### Schritt 2: Neues Token erstellen
1. Klicke auf **"Create Token"**
2. Name: `FIMI-Service-Deployment`
3. Scope: **Full Access** (für vollständige Kontrolle)
4. Expiration:
   - Für Entwicklung: **No Expiration**
   - Für Produktion: **90 Tage** (empfohlen)
5. Klicke **"Create"**

### Schritt 3: Token kopieren
```
⚠️ DAS TOKEN WIRD NUR EINMAL ANGEZEIGT!

Beispiel-Format:
vercel_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz

→ Kopiere es sofort!
→ Speichere es SICHER (z.B. in einem Passwort-Manager)
```

### Schritt 4: Token als Umgebungsvariable setzen

**macOS/Linux:**
```bash
# In ~/.zshrc oder ~/.bashrc
export VERCEL_TOKEN="dein_vercel_token_hier"

# Neu laden
source ~/.zshrc
```

**Testen:**
```bash
echo $VERCEL_TOKEN
# Sollte dein Token anzeigen
```

---

## 🐙 2. GitHub Token generieren

### Schritt 1: GitHub Settings öffnen
1. Gehe zu: https://github.com/settings/tokens
2. Oder: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

### Schritt 2: Neues Token erstellen
1. Klicke **"Generate new token"** → **"Generate new token (classic)"**
2. Note: `FIMI-Service-Git-Access`
3. Expiration: **90 days** (empfohlen)
4. **Permissions auswählen:**
   - ✅ `repo` (Full control of private repositories)
     - ✅ repo:status
     - ✅ repo_deployment
     - ✅ public_repo
     - ✅ repo:invite
   - ✅ `workflow` (Update GitHub Action workflows)
   - ✅ `write:packages` (falls du Packages nutzt)
   - ✅ `delete_repo` (nur wenn nötig)

5. Klicke **"Generate token"**

### Schritt 3: Token kopieren
```
⚠️ DAS TOKEN WIRD NUR EINMAL ANGEZEIGT!

Beispiel-Format:
ghp_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890

→ Kopiere es sofort!
→ Speichere es SICHER
```

### Schritt 4: Token als Umgebungsvariable setzen

**macOS/Linux:**
```bash
# In ~/.zshrc oder ~/.bashrc
export GITHUB_TOKEN="dein_github_token_hier"

# Neu laden
source ~/.zshrc
```

**Testen:**
```bash
echo $GITHUB_TOKEN
# Sollte dein Token anzeigen
```

---

## 🤖 3. Claude Code mit Tokens verwenden

### Variante A: Tokens direkt im Terminal

**Wenn du mit mir arbeitest, sage mir:**
```
"Verwende meine Umgebungsvariablen für Vercel und GitHub"
```

**Ich werde dann automatisch:**
```bash
# Vercel Login
vercel login --token $VERCEL_TOKEN

# Git mit Token
git remote add origin https://$GITHUB_TOKEN@github.com/USERNAME/FIMI-Gebaeudereinigung-2.0.git
```

---

### Variante B: Manuelle Token-Verwendung (falls nötig)

**Vercel:**
```bash
# Login
vercel login --token DEIN_VERCEL_TOKEN_HIER

# Projekt deployen
vercel --prod --token DEIN_VERCEL_TOKEN_HIER
```

**GitHub:**
```bash
# Repository clonen
git clone https://DEIN_GITHUB_TOKEN@github.com/USERNAME/REPO.git

# Oder Remote hinzufügen
git remote add origin https://DEIN_GITHUB_TOKEN@github.com/USERNAME/REPO.git
```

---

## 📝 4. Sichere Token-Speicherung

### Option 1: Passwort-Manager (EMPFOHLEN)
- **1Password**
- **LastPass**
- **Bitwarden**

**Vorteile:**
- ✅ Verschlüsselt
- ✅ Synchronisiert über Geräte
- ✅ Auto-Fill in Browser

---

### Option 2: macOS Keychain

**Token speichern:**
```bash
# Vercel Token
security add-generic-password \
  -a "$USER" \
  -s "vercel_token" \
  -w "DEIN_VERCEL_TOKEN_HIER"

# GitHub Token
security add-generic-password \
  -a "$USER" \
  -s "github_token" \
  -w "DEIN_GITHUB_TOKEN_HIER"
```

**Token abrufen:**
```bash
# Vercel Token
security find-generic-password -a "$USER" -s "vercel_token" -w

# GitHub Token
security find-generic-password -a "$USER" -s "github_token" -w
```

---

### Option 3: `.env` Datei (NUR FÜR LOKALE ENTWICKLUNG)

**WICHTIG:**
- ✅ Nur lokal verwenden
- ✅ NIEMALS in Git committen
- ✅ Zu `.gitignore` hinzufügen

**Erstelle `.env.local`:**
```bash
# FIMI-Service Tokens
VERCEL_TOKEN=dein_vercel_token_hier
GITHUB_TOKEN=dein_github_token_hier
```

**Zu `.gitignore` hinzufügen:**
```bash
echo ".env.local" >> .gitignore
```

---

## 🔄 5. Workflow mit Claude Code

### Wenn du Tokens hast:

**Du sagst:**
```
"Ich habe die Tokens als Umgebungsvariablen gesetzt.
Starte Phase 1 und verwende $VERCEL_TOKEN und $GITHUB_TOKEN."
```

**Ich mache:**
```bash
# 1. Vercel Login
vercel login --token $VERCEL_TOKEN

# 2. Git Repository erstellen
gh auth login --with-token <<< $GITHUB_TOKEN
gh repo create FIMI-Gebaeudereinigung-2.0 --public

# 3. Vercel Projekt verknüpfen
vercel link

# 4. Deployment
vercel --prod
```

---

### Wenn du KEINE Tokens hast:

**Du sagst:**
```
"Ich habe noch keine Tokens. Führe mich durch den Prozess."
```

**Ich führe dich Schritt für Schritt durch:**
1. Token generieren (mit dieser Anleitung)
2. Token setzen
3. Workflow starten

---

## ✅ 6. Checkliste: Token-Setup

**Vor dem Start:**
- [ ] Vercel-Account existiert (https://vercel.com/signup)
- [ ] GitHub-Account existiert (https://github.com/signup)
- [ ] Vercel Token generiert
- [ ] GitHub Token generiert
- [ ] Tokens sicher gespeichert (Passwort-Manager)
- [ ] Tokens als Umgebungsvariablen gesetzt
- [ ] Tokens getestet (`echo $VERCEL_TOKEN`)

---

## 🔒 7. Sicherheits-Tipps

### Token-Sicherheit:
1. **Niemals in Git committen**
   ```bash
   # .gitignore überprüfen
   cat .gitignore | grep ".env"
   ```

2. **Regelmäßig erneuern**
   - GitHub: Alle 90 Tage
   - Vercel: Bei Bedarf

3. **Bei Leak sofort widerrufen**
   - GitHub: https://github.com/settings/tokens
   - Vercel: https://vercel.com/account/tokens
   - Klicke auf "Revoke" und erstelle neues Token

4. **Minimale Permissions**
   - Nur die nötigen Rechte vergeben
   - Nicht "Full Access" wenn nicht nötig

---

## 🆘 8. Troubleshooting

### Problem: "Token invalid" oder "Unauthorized"

**Lösung:**
1. Token erneut generieren
2. Überprüfen ob Umgebungsvariable gesetzt ist:
   ```bash
   echo $VERCEL_TOKEN
   echo $GITHUB_TOKEN
   ```
3. Terminal neu starten (damit neue Variablen geladen werden)

---

### Problem: "Token expired"

**Lösung:**
1. Altes Token in GitHub/Vercel löschen
2. Neues Token generieren
3. Umgebungsvariable aktualisieren

---

### Problem: "Permission denied"

**Lösung:**
1. GitHub Token: Überprüfe Permissions (repo, workflow)
2. Vercel Token: Muss "Full Access" haben für Deployments

---

## 📞 9. Hast du bereits Tokens?

### JA - Ich habe Tokens:
```
Sage mir: "Ich habe die Tokens gesetzt. Starte Phase 1."
```

### NEIN - Ich brauche Hilfe:
```
Sage mir: "Ich brauche Hilfe beim Token-Setup."
Ich führe dich Schritt für Schritt durch!
```

---

## 🎯 10. Nächste Schritte

**Nach Token-Setup:**
1. ✅ Tokens generiert & gespeichert
2. ✅ Umgebungsvariablen gesetzt
3. ✅ Tokens getestet

**Dann:**
→ Sage mir: "Starte Phase 1 mit meinen Tokens"
→ Ich kümmere mich um den Rest!

---

**Erstellt am:** 2025-11-20
**Projekt:** FIMI-Service Website Migration
**Zweck:** Sichere Token-Verwaltung für Vercel & GitHub
**Version:** 1.0
