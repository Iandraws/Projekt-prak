# 📸 Aufgabe 1: Bild in React einfügen

**Ziel:** Dein erstes Bild auf einer React-Page anzeigen!

**Schwierigkeit:** ⭐⭐ EINFACH

**Zeit:** ~20 Minuten

---

## 📖 Erklärung

In React kannst du Bilder mit dem HTML `<img>` Tag einfügen:

```jsx
<img src="pfad-zum-bild.jpg" alt="Beschreibung" />
```

Das Besondere:

- `src` = Pfad zum Bild (URL oder lokal)
- `alt` = Text wenn Bild nicht lädt (wichtig!)
- Kein schließender Tag (selbst-closing)!

---

## 🎯 Aufgabe

Erstelle eine neue Page "ImagePage" und zeige ein Bild an!

---

## 👣 Schritt-für-Schritt

### Schritt 1: Neue Datei erstellen

Erstelle eine neue Datei:

```
src/pages/ImagePage.jsx
```

### Schritt 2: Code einfügen

**Variante A: Mit Emoji (Einfachste)**

```jsx
export default function ImagePage() {
  return (
    <section>
      <h2>🖼️ Meine Bilder-Seite</h2>
      <div
        style={{
          fontSize: "200px",
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        🎨
      </div>
      <p>Das ist mein erstes Bild - ein Emoji!</p>
    </section>
  );
}
```

**Variante B: Mit Online-Bild (Empfohlen)**

```jsx
export default function ImagePage() {
  return (
    <section>
      <h2>🖼️ Meine Bilder-Seite</h2>
      <img
        src="https://via.placeholder.com/400/667eea/ffffff?text=Mein+erstes+Bild"
        alt="Ein schönes Placeholder-Bild"
        style={{
          maxWidth: "400px",
          borderRadius: "10px",
          margin: "20px 0",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <p>Das ist mein erstes Bild mit React!</p>
    </section>
  );
}
```

### Schritt 3: In App.jsx importieren

Öffne `src/App.jsx` und füge oben hinzu:

```jsx
import ImagePage from "./pages/ImagePage";
```

### Schritt 4: Route hinzufügen

In den `<Routes>` Tags von `App.jsx`:

```jsx
<Route path="/image" element={<ImagePage />} />
```

### Schritt 5: Link zur Navbar

In der `<nav>` von `App.jsx`:

```jsx
<Link to="/image">Bilder</Link>
```

### Schritt 6: Testen!

1. Speichern
2. Browser öffnen (http://localhost:5173)
3. Auf "Bilder" Link klicken
4. Bild sollte angezeigt werden! ✅

---

## 💡 Tipps

### Bild-Quellen:

**Kostenlose Bilder-Websites:**

- https://via.placeholder.com - Placeholder (was wir nutzen)
- https://unsplash.com - Schöne Bilder
- https://pixabay.com - Kostenlos
- https://picsum.photos - Random Bilder

**Placeholder Format:**

```
https://via.placeholder.com/400/FARBE/TEXTFARBE?text=TEXT
```

Beispiele:

- `https://via.placeholder.com/400/FF6B6B/ffffff?text=Rot`
- `https://via.placeholder.com/400/4ECDC4/ffffff?text=Blau`

### CSS Tipps:

```css
/* Größe begrenzen */
maxWidth: '400px'

/* Ecken abrunden */
borderRadius: '10px'

/* Schatten hinzufügen */
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'

/* Zentrieren */
margin: '20px auto'
display: 'block'
```

---

## ❓ Häufige Fehler

❌ **FALSCH:**

```jsx
<img src={image}>  // Kein schließender Tag!
<img src="path">   // Kein alt Text!
```

✅ **RICHTIG:**

```jsx
<img src="path" alt="Beschreibung" />
```

---

## ✨ Erweiterungsideen

**Leicht:**

- Mehrere Bilder mit unterschiedlichen Größen
- Bilder mit verschiedenen Border-Radius
- Text unter jedem Bild

**Mittler:**

- 3-4 Bilder in einer Reihe (mit CSS)
- Ändere die Bilderquellen
- Füge Hover-Effekte hinzu

```css
transition: 'all 0.3s'
':hover': {
  transform: "scale(1.1)";
}
```

---

## 📋 Checklist

- [ ] Neue Datei `src/pages/ImagePage.jsx` erstellt
- [ ] Code eingefügt (Variante A oder B)
- [ ] In `App.jsx` importiert
- [ ] Route hinzugefügt
- [ ] Link in Navbar hinzugefügt
- [ ] Im Browser getestet
- [ ] Bild wird angezeigt ✅

---

## 🎓 Was du gelernt hast

✅ Bilder mit `<img>` Tag einfügen
✅ src und alt Attribute
✅ Inline Styles für Bilder
✅ CSS Styling in React

---

## 🚀 Nächster Schritt

Wenn du diese Aufgabe gemacht hast:

👉 Geh zu [Aufgabe 2: Image Toggle](02_Image_Toggle.md)

Dort lernst du, den Button zu drücken und das Bild anzuzeigen/zu verstecken! 👁️

---

**Viel Erfolg! 💪**
