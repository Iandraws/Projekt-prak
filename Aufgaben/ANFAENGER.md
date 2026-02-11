# 🟢 ANFÄNGER - Aufgaben

HTML, CSS und die ganz Basics! Starten wir! 🚀

---

## Aufgabe A1: Überschrift ändern

**Ziel:** Lerne wie man Text in React ändert.

**Level:** ⭐ SEHR EINFACH

**Aufgabe:**
In deiner `App.jsx` findest du eine `<h1>` Überschrift.
Ändere sie von "Meine Website" zu "Willkommen im React Kurs"

**Hinweis:**

```jsx
// VORHER:
<h1>Meine Website</h1>

// NACHHER:
<h1>Willkommen im React Kurs</h1>
```

**Checklist:**

- [ ] Datei App.jsx geöffnet
- [ ] Überschrift gefunden
- [ ] Text geändert
- [ ] Im Browser angeschaut (mit `npm run dev`)

---

## Aufgabe A2: Paragraph-Text ändern

**Ziel:** Mehrere HTML-Elemente ändern.

**Level:** ⭐ SEHR EINFACH

**Aufgabe:**
Finde alle `<p>` (Paragraph) Tags und schreib eigene Texte rein!

**Hinweis:**

```jsx
<p>Alter Text</p>
// Ändere zu:
<p>Neuer Text mit eigenen Ideen!</p>
```

**Tipp:** Es gibt mehrere `<p>` Tags - ändere mindestens 3!

---

## Aufgabe A3: Farbe in CSS ändern

**Ziel:** Erste CSS Änderungen machen.

**Level:** ⭐ SEHR EINFACH

**Aufgabe:**
In `App.css` findest du `.header` Klasse.
Ändere die background-Farbe!

**Hints:**

```css
/* VORHER: */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* NACHHER: Ändere die Farben! */
.header {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e72 100%);
}
```

**Farb-Codes für Anfänger:**

- Rot: `#FF6B6B`
- Grün: `#28a745`
- Blau: `#2196F3`
- Orange: `#ff9800`
- Lila: `#9c27b0`

---

## Aufgabe A4: Button-Text ändern

**Ziel:** HTML-Attribute ändern (auch auf Buttons!)

**Level:** ⭐ SEHR EINFACH

**Aufgabe:**
Finde den Button und ändere seinen Text!

**Wo:** In einer der `.jsx` Page Dateien (z.B. Contact.jsx oder Home.jsx)

**Beispiel:**

```jsx
// VORHER:
<button>Email schreiben</button>

// NACHHER:
<button>Schreib mir eine Nachricht! 📧</button>
```

---

## Aufgabe A5: Padding/Margin ändern

**Ziel:** Layout mit CSS verändern.

**Level:** ⭐⭐ EINFACH

**Aufgabe:**
Finde im CSS die `.header` section und ändere das padding!

**Hinweis:**

```css
.header {
  padding: 60px 20px; /* Viel Abstand */
}

/* Ändere zu weniger Abstand: */
.header {
  padding: 20px 20px; /* Weniger Abstand */
}
```

**Was ist Padding?**

- Abstand INNEN um Inhalte

---

## Aufgabe A6: Farbe eines Links ändern

**Ziel:** Spezifische Elements färben.

**Level:** ⭐⭐ EINFACH

**Aufgabe:**
Ändere die Farbe der Navbar Links!

**Hinweis:**

```css
.navbar a {
  color: white; /* Weiße Farbe */
}

/* Ändere zu: */
.navbar a {
  color: #ffd700; /* Gold! */
}
```

---

## Aufgabe A7: Border hinzufügen

**Ziel:** Rahmen um Elemente machen.

**Level:** ⭐⭐ EINFACH

**Aufgabe:**
Füge der `.about` section einen farbigen Rahmen hinzu!

**Code:**

```css
.about {
  border: 3px solid #667eea; /* 3px dicker, solider, blauer Rahmen */
}
```

---

## Aufgabe A8: Font-Size ändern

**Ziel:** Text größer oder kleiner machen.

**Level:** ⭐⭐ EINFACH

**Aufgabe:**
Mach die Navbar-Links größer!

**Hinweis:**

```css
.navbar a {
  font-size: 1.1em; /* Aktuelle Größe */
}

/* Ändere zu: */
.navbar a {
  font-size: 1.5em; /* Größer! */
}
```

---

## Aufgabe A9: Text-Align ändern

**Ziel:** Text ausrichten (links, mitte, rechts).

**Level:** ⭐⭐ EINFACH

**Aufgabe:**
Der Text im Footer ist zentriert (center) - mach ihn linksbündig (left)!

**Hinweis:**

```css
.footer {
  text-align: center; /* Jetzt zentriert */
}

/* Ändere zu: */
.footer {
  text-align: left; /* Jetzt links */
}
```

**Optionen:**

- `left` = links
- `center` = zentriert
- `right` = rechts
- `justify` = Blocksatz

---

## Aufgabe A10: Border-Radius ändern

**Ziel:** Ecken abrunden.

**Level:** ⭐⭐ EINFACH

**Aufgabe:**
Mach die Ecken des `.btn` weniger gerundet!

**Hinweis:**

```css
.btn {
  border-radius: 5px; /* Leicht gerundet */
}

/* Ändere zu: */
.btn {
  border-radius: 0px; /* Ganz eckig */
}
```

**Experimente:**

- `0px` = Ganz eckig
- `5px` = Leicht gerundet
- `20px` = Sehr gerundet
- `50px` = Fast kreis-rund!

---

## ✅ Zusammenfassung

**Du hast gelernt:**

- ✅ Text in JSX ändern
- ✅ CSS Eigenschaften wie `color`, `padding`, `font-size`
- ✅ CSS Selektoren (`.class-name`)
- ✅ Farb-Codes nutzen
- ✅ Browser Dev-Tools (mit F12)

---

## 🎯 Nächster Schritt

Wenn du alle A1-A10 gemacht hast, geh zu **ANFAENGER_PLUS.md**!

Dort lernst du **useState** - das Wichtigste in React! 🚀

---

**Viel Spaß! 💪**
