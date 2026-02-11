# 📸 Aufgabe 1: Bild in React einfügen - NUR HINTS!

**Ziel:** Dein erstes Bild auf einer React-Page anzeigen!

**Schwierigkeit:** ⭐⭐ EINFACH | **Zeit:** ~20 Minuten

---

## 📖 Was du lernen musst

- Wie man `<img>` Tags in React benutzt
- `src` und `alt` Attribute
- Inline Styles für Bilder
- Export/Return in Komponenten

---

## 🎯 Deine Aufgabe

Erstelle eine neue Page namens **ImagePage** und zeige ein Bild!

---

## 👣 Schritt-für-Schritt Hints

### Schritt 1: Neue Datei

Erstelle: `src/pages/ImagePage.jsx`

### Schritt 2: Komponente schreiben - DU MUSST CODE SCHREIBEN!

**Struktur die du brauchst:**

```
export default function ImagePage() {
  return (
    <section>
      // SCHREIB HIER DEINEN CODE!
      // Brauchst:
      // 1. <h2> mit Überschrift
      // 2. Entweder:
      //    A) <div> mit großem Emoji (fontSize: '200px')
      //    B) <img> mit src, alt, style
      // 3. <p> mit Text
    </section>
  );
}
```

**Variante A: Mit Emoji**

- Font-Size: '200px'
- TextAlign: 'center'
- Margin: '30px 0'

**Variante B: Mit Bild-URL**

- src = "https://via.placeholder.com/SIZE/FARBE/TEXTFARBE?text=NAME"
- alt = "Beschreibung"
- style mit: maxWidth, borderRadius, margin, boxShadow

### Schritt 3: Importieren in App.jsx

```
import ImagePage from "./pages/ImagePage";
```

### Schritt 4: Route hinzufügen

```
<Route path="/image" element={<ImagePage />} />
```

### Schritt 5: Link in Navbar

```
<Link to="/image">Bilder</Link>
```

### Schritt 6: Testen!

- Speichern
- Browser öffnen
- Auf Link klicken
- Bild sichtbar? ✅

---

## 💡 Wichtige Hints

### Placeholder-URL Format:

```
https://via.placeholder.com/400/FF6B6B/ffffff?text=MyImage
```

- 400 = Größe in Pixel
- FF6B6B = Farbe (Hex)
- ffffff = Text-Farbe
- text= = Inhalt

### Img-Tag ist selbst-closing:

```
<img src="..." alt="..." />
```

❌ Nicht so: `<img>...</img>`
✅ So: `<img ... />`

### Style-Objekt in React:

```
style={{
  maxWidth: '300px',
  borderRadius: '10px',
  margin: '20px auto'
}}
```

---

## ✨ Bonus - Wenn du Zeit hast

- Andere Farben probieren
- Mehrere Bilder einfügen
- Unterschiedliche Größen
- Hover-Effekte

---

## 📋 Checklist

- [ ] Datei `src/pages/ImagePage.jsx` erstellt
- [ ] Komponente selbst geschrieben
- [ ] Import in App.jsx
- [ ] Route hinzugefügt
- [ ] Link in Navbar
- [ ] Im Browser getestet
- [ ] Bild wird angezeigt ✅

---

**WICHTIG: Schreib den Code SELBST, nicht kopieren! 💪**

Wenn du fertig bist → [Aufgabe 2: Image Toggle](02_Image_Toggle.md)
