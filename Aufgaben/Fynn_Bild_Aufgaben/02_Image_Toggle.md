# 👁️ Aufgabe 2: Bild Anzeigen/Verstecken mit Button

**Ziel:** Mit einem Button ein Bild anzeigen oder verstecken!

**Schwierigkeit:** ⭐⭐⭐ MITTLER

**Zeit:** ~30 Minuten

**Voraussetzung:** Aufgabe 1 gemacht ✅

---

## 📖 Erklärung

Wir nutzen **useState** um zu speichern, ob das Bild sichtbar ist:

```jsx
const [visible, setVisible] = useState(false);

// false = versteckt
// true = sichtbar
```

Dann können wir **conditional rendering** nutzen:

```jsx
{visible && <img ... />}  // Nur wenn visible = true
```

---

## 🎯 Aufgabe

Erstelle eine neue Page mit:

- ✅ Button zum Anzeigen/Verstecken
- ✅ Ein Bild das toggled
- ✅ Button-Text ändert sich

---

## 👣 Schritt-für-Schritt

### Schritt 1: Neue Datei

Erstelle: `src/pages/ImageToggle.jsx`

### Schritt 2: Code eingeben

**Die komplette Lösung:**

```jsx
import { useState } from "react";

export default function ImageToggle() {
  const [showImage, setShowImage] = useState(false);

  return (
    <section>
      <h2>👁️ Bild Anzeigen/Verstecken</h2>

      <button
        className="btn"
        onClick={() => setShowImage(!showImage)}
        style={{ fontSize: "1.1em", marginBottom: "20px" }}
      >
        {showImage ? "👁️ Verstecken" : "👁️ Anzeigen"}
      </button>

      {showImage && (
        <div style={{ margin: "20px 0" }}>
          <img
            src="https://via.placeholder.com/500/FF6B6B/ffffff?text=Geheimes+Bild"
            alt="Überraschungs-Bild"
            style={{
              maxWidth: "500px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "block",
              margin: "20px auto",
            }}
          />
          <p style={{ textAlign: "center" }}>🎉 Überraschung!</p>
        </div>
      )}
    </section>
  );
}
```

### Schritt 3: In App.jsx importieren

```jsx
import ImageToggle from "./pages/ImageToggle";
```

### Schritt 4: Route hinzufügen

```jsx
<Route path="/imagetoggle" element={<ImageToggle />} />
```

### Schritt 5: Link in Navbar

```jsx
<Link to="/imagetoggle">Image Toggle</Link>
```

### Schritt 6: Testen! 🧪

1. Speichern
2. Auf Link klicken
3. Button klicken → Bild erscheint ✅
4. Button nochmal klicken → Bild verschwindet ✅

---

## 🔍 Code-Erklärung

### useState Hook

```jsx
const [showImage, setShowImage] = useState(false);
```

- `showImage` = aktuelle Wert (false = versteckt)
- `setShowImage` = Funktion um zu ändern
- `useState(false)` = Anfangswert

### onClick Handler

```jsx
onClick={() => setShowImage(!showImage)}
```

- `!showImage` = umgekehrten Wert
- Also: true wird false, false wird true = **Toggle**

### Ternary Operator

```jsx
{
  showImage ? "👁️ Verstecken" : "👁️ Anzeigen";
}
```

- Wenn `showImage = true` → "Verstecken"
- Wenn `showImage = false` → "Anzeigen"

### Conditional Rendering

```jsx
{showImage && <img ... />}
```

- Nur wenn `showImage = true` wird `<img>` angezeigt
- Wenn `showImage = false` → nichts wird gerendert

---

## 💡 Tipps

### Verschiedene Button-Texte:

```jsx
{
  showImage ? "✅ Versteckt" : "❌ Angezeigt";
}
{
  showImage ? "🔒 Sperren" : "🔓 Öffnen";
}
{
  showImage ? "⬇️ Runter" : "⬆️ Rauf";
}
```

### Verschiedene Bilder:

```jsx
const imageUrl = showImage
  ? "https://via.placeholder.com/500/FF6B6B/ffffff?text=Bild+1"
  : "https://via.placeholder.com/500/4ECDC4/ffffff?text=Bild+2";
```

### Mit CSS-Animation:

```jsx
style={{
  transition: 'opacity 0.3s',
  opacity: showImage ? 1 : 0
}}
```

---

## ❓ Häufige Fehler

❌ **FALSCH:**

```jsx
onClick={() => setShowImage(true)}  // Nur true, kein toggle!
onClick={setShowImage(!showImage)}  // Fehler!
{visible ? <img /> : null}         // Unnötig
```

✅ **RICHTIG:**

```jsx
onClick={() => setShowImage(!showImage)}  // Toggle!
{visible && <img />}                      // Kurz & clean
```

---

## ✨ Erweiterungsideen

**Leicht:**

- Andere Button-Emojis
- Text unter/über dem Bild
- Icon-Buttons

**Mittler:**

- 2 verschiedene Bilder (je nach State)
- Button mit Hover-Effekt
- Counter wie oft angeklickt

```jsx
const [count, setCount] = useState(0);

onClick={() => {
  setShowImage(!showImage);
  setCount(count + 1);
}}

<p>Angeklickt: {count}x</p>
```

**Schwerer:**

- Fade-In/Out Animation
- Mit useEffect arbeiten
- Multiple Images mit verschiedenen States

---

## 📋 Checklist

- [ ] Datei `src/pages/ImageToggle.jsx` erstellt
- [ ] Code korrekt eingefügt
- [ ] Import in `App.jsx` hinzugefügt
- [ ] Route hinzugefügt
- [ ] Link in Navbar hinzugefügt
- [ ] Im Browser getestet
- [ ] Button toggle funktioniert ✅
- [ ] Bild wird angezeigt/versteckt ✅
- [ ] Button-Text ändert sich ✅

---

## 🎓 Was du gelernt hast

✅ useState Hook nutzen
✅ Toggle-Funktion mit `!`
✅ Conditional Rendering `{condition && element}`
✅ onClick Handler
✅ Ternary Operator `? :`
✅ State aktualisieren

---

## 🚀 Nächster Schritt

Wenn diese Aufgabe gemacht:

👉 Geh zu [Aufgabe 3: Image Galerie](03_Image_Galerie.md)

Dort lernst du mehrere Bilder mit `map()` anzuzeigen! 🖼️

---

**Fantastisch! 💪**
