# 🖼️ Aufgabe 3: Image Galerie mit map() - NUR HINTS!

**Ziel:** Eine Galerie mit mehreren Bildern bauen!

**Schwierigkeit:** ⭐⭐⭐⭐ SCHWERER | **Zeit:** ~45 Minuten

**Voraussetzung:** Aufgabe 1 & 2 ✅

---

## 📖 Was du lernen musst

- `map()` Funktion für Arrays
- `key` Attribute (WICHTIG!)
- CSS Grid Responsive Layout
- Hover-Effekte mit onMouseEnter/Leave
- Array von Objekten mit Daten

---

## 🎯 Deine Aufgabe

Erstelle Galerie mit:

- ✅ Array mit 6+ Bilder
- ✅ map() zum durchlaufen
- ✅ Grid Layout (responsive!)
- ✅ Hover-Effekte

---

## 👣 Hints

### Schritt 1: Neue Datei

Erstelle: `src/pages/ImageGallery.jsx`

### Schritt 2: Array mit Daten

Erstelle Array mit Objekten:

```javascript
const images = [
  { id: 1, emoji: "🌅", title: "Sonnenaufgang" },
  { id: 2, emoji: "🌴", title: "Palmen" },
  { id: 3, emoji: "🏔️", title: "Berg" },
  // ... mehr
];
```

ODER mit URLs:

```javascript
const images = [
  { id: 1, url: "https://via.placeholder.com/250/FF6B6B/...", title: "Rot" },
  { id: 2, url: "https://via.placeholder.com/250/4ECDC4/...", title: "Blau" },
  // ... mehr
];
```

### Schritt 3: map() Schleife

**Struktur:**

```jsx
{
  images.map((image) => (
    <div key={image.id}>
      // Zeige image.emoji ODER image.url // Zeige image.title
    </div>
  ));
}
```

**WICHTIG:** Jedes Element braucht `key={image.id}`!

### Schritt 4: Grid Layout

```jsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '15px',
  maxWidth: '900px',
  margin: '30px auto'
}}>
  {images.map(...)}
</div>
```

Das macht sich automatisch responsive! 📱

### Schritt 5: Hover-Effekt

```jsx
<div
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  // Bild hier
</div>
```

### Schritt 6: In App.jsx

- Import
- Route
- Link

### Schritt 7: Testen!

- Alle 6 Bilder sichtbar?
- Responsive auf mobile?
- Hover-Effekt funktioniert?

---

## 💡 Wichtige Konzepte

### map() Funktion:

```jsx
{
  array.map((item) => <div key={item.id}>{item.name}</div>);
}
```

### Key Attribute (SUPER WICHTIG):

```jsx
key={image.id}  // ✅ Richtig - eindeutig
key={index}     // ⚠️ Problematisch
// kein key     // ❌ Error in Console
```

### CSS Grid Responsive:

```
gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
```

- `auto-fit` = passt sich an
- `minmax(150px, 1fr)` = flexibel

### Style ändern mit onMouseEnter:

```jsx
e.currentTarget.style.transform = "scale(1.05)";
```

---

## ✨ Erweiterungsideen

**Leicht:**

- Mehr Bilder hinzufügen
- Andere Farben
- Andere Emojis

**Mittler:**

- onClick = welches Bild größer zeigen
- Filter/Kategorien
- Search-Funktion

**Schwerer:**

- Lightbox/Modal
- Pagination (Seiten)
- Infinite Scroll

---

## 📋 Checklist

- [ ] Datei erstellt
- [ ] Array mit 6+ Bildern
- [ ] map() implementiert
- [ ] key={image.id} auf jedem Element
- [ ] CSS Grid mit auto-fit
- [ ] Hover-Effekte
- [ ] Import/Route/Link
- [ ] Im Browser angeschaut
- [ ] Galerie responsive ✅
- [ ] Alle Bilder sichtbar ✅

---

## ❌ Häufige Fehler

```jsx
// FALSCH - kein key
{
  images.map((img) => <div>{img.title}</div>);
}

// RICHTIG - mit key
{
  images.map((img) => <div key={img.id}>{img.title}</div>);
}
```

---

**WICHTIG: Code SELBST schreiben! 💪**

✅ **Du bist fertig mit allen 3 Aufgaben!**

**Glückwunsch! 🎉**
