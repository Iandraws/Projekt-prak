# 🖼️ Aufgabe 3: Image Galerie mit map()

**Ziel:** Eine Galerie mit mehreren Bildern bauen!

**Schwierigkeit:** ⭐⭐⭐⭐ SCHWERER

**Zeit:** ~45 Minuten

**Voraussetzung:** Aufgabe 1 & 2 gemacht ✅

---

## 📖 Erklärung

Mit `map()` können wir ein Array von Bilder durchlaufen:

```jsx
const images = [
  { id: 1, url: "...", title: "Bild 1" },
  { id: 2, url: "...", title: "Bild 2" },
];

{
  images.map((image) => <img key={image.id} src={image.url} />);
}
```

**Wichtig:** `key` Attribute hilft React! 🔑

---

## 🎯 Aufgabe

Erstelle eine schöne **Responsive Bild-Galerie** mit:

- ✅ 6+ Bilder in Array
- ✅ map() zum Durchlaufen
- ✅ Grid Layout (auto-responsive)
- ✅ Schöne Styling

---

## 👣 Schritt-für-Schritt

### Schritt 1: Neue Datei

Erstelle: `src/pages/ImageGallery.jsx`

### Schritt 2: Code eingeben

**Die komplette Lösung (mit Emojis):**

```jsx
export default function ImageGallery() {
  const images = [
    { id: 1, emoji: "🌅", title: "Sonnenaufgang" },
    { id: 2, emoji: "🌴", title: "Palmen" },
    { id: 3, emoji: "🏔️", title: "Berg" },
    { id: 4, emoji: "🌊", title: "Meer" },
    { id: 5, emoji: "🌲", title: "Wald" },
    { id: 6, emoji: "🌺", title: "Blüte" },
  ];

  return (
    <section>
      <h2>🖼️ Meine Bilder-Galerie</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "30px auto",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              border: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "#667eea";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <div style={{ fontSize: "80px" }}>{image.emoji}</div>
            <p style={{ marginTop: "10px" }}>{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Alternative mit URL-Bildern:**

```jsx
export default function ImageGallery() {
  const images = [
    {
      id: 1,
      url: "https://via.placeholder.com/250/FF6B6B/ffffff?text=Bild+1",
      title: "Rot & Schön",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/250/4ECDC4/ffffff?text=Bild+2",
      title: "Türkis Traum",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/250/45B7D1/ffffff?text=Bild+3",
      title: "Blau Himmel",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/250/FFA07A/ffffff?text=Bild+4",
      title: "Orange Power",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/250/98D8C8/ffffff?text=Bild+5",
      title: "Grün Natur",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/250/F7DC6F/ffffff?text=Bild+6",
      title: "Gelb Sonne",
    },
  ];

  return (
    <section>
      <h2>🖼️ Meine Bilder-Galerie</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "30px auto",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={image.url}
              alt={image.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            <div
              style={{
                padding: "15px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h4 style={{ margin: "0" }}>{image.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### Schritt 3: In App.jsx importieren

```jsx
import ImageGallery from "./pages/ImageGallery";
```

### Schritt 4: Route & Link

```jsx
<Route path="/gallery" element={<ImageGallery />} />
<Link to="/gallery">Galerie</Link>
```

### Schritt 5: Testen! 🧪

1. Speichern
2. Link klicken
3. Alle 6 Bilder sollten in Grid angezeigt werden ✅
4. Hover-Effekt sollte funktionieren ✅

---

## 🔍 Code-Erklärung

### Array mit Daten

```jsx
const images = [
  { id: 1, emoji: "🌅", title: "Sonnenaufgang" },
  { id: 2, emoji: "🌴", title: "Palmen" },
  // ... mehr
];
```

Jedes Bild hat:

- `id` = eindeutige Kennummer
- `emoji` oder `url` = das Bild
- `title` = Beschreibung

### map() Funktion

```jsx
{
  images.map((image) => <div key={image.id}>...</div>);
}
```

- `map()` = macht Schleife durch Array
- `image` = aktuelle Element
- `key={image.id}` = Hilft React

### CSS Grid Responsive

```jsx
style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '15px'
}}
```

- `auto-fit` = Passt sich an
- `minmax(150px, 1fr)` = Min 150px, flex fill
- Wird automatisch responsive! 📱💻

### Hover-Effekt

```jsx
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'scale(1.05)';
}}
```

- `onMouseEnter` = wenn Maus über Element
- `transform: 'scale(1.05)'` = 5% größer
- Macht Galerie interaktiv! ✨

---

## 💡 Tipps

### Mehr Emojis:

```jsx
🌅 🌄 🌇 🌆 🌃 🌌 🌠
🌴 🌲 🌳 🌵 🌾 🌿 🍀
🏔️ ⛰️ 🌋 🏕️ ⛺ 🏠
🎨 🖼️ 🎭 🎪 🎬 🎤 🎧
```

### Eigene Bilder nutzen:

```jsx
const images = [
  { id: 1, url: "/pfad/zum/bild.jpg", title: "..." },
  // URL zu deinem Bild im public/ Ordner
];
```

### Noch mehr Styling:

```jsx
// Grayscale on Hover
filter: "grayscale(100%)";

// Brightness ändern
filter: "brightness(1.2)";

// Beides kombinieren
filter: "grayscale(50%) brightness(1.1)";
```

---

## ✨ Erweiterungsideen

**Leicht:**

- Mehr Bilder hinzufügen
- Andere Farben in Placeholder
- Text unter jedem Bild

**Mittler:**

- Click auf Bild = größer zeigen (Modal)
- Search/Filter Funktion
- Kategorien für Bilder

```jsx
const [category, setCategory] = useState("all");

const filtered = images.filter(
  (img) => category === "all" || img.category === category,
);
```

**Schwerer:**

- Mit useState: welches Bild ist selected
- Lightbox mit Zoom
- Pagination (Seiten)

---

## ❓ Häufige Fehler

❌ **FALSCH:**

```jsx
{
  images.map((image) => <div>{image.emoji} // Kein key!</div>);
}
```

✅ **RICHTIG:**

```jsx
{
  images.map((image) => <div key={image.id}>{image.emoji}</div>);
}
```

---

## 📋 Checklist

- [ ] Datei `src/pages/ImageGallery.jsx` erstellt
- [ ] Array mit 6+ Bildern hinzugefügt
- [ ] map() richtig implementiert
- [ ] key={id} auf jedem Element
- [ ] Grid Layout responsive
- [ ] Import in App.jsx
- [ ] Route & Link hinzugefügt
- [ ] Im Browser angeschaut
- [ ] Galerie wird angezeigt ✅
- [ ] Grid responsive (mobile testen!) ✅
- [ ] Hover-Effekte funktionieren ✅

---

## 🎓 Was du gelernt hast

✅ map() Funktion für Arrays
✅ key Attribute (WICHTIG!)
✅ CSS Grid Responsive
✅ Dynamische Properties mit `.map()`
✅ Hover-Effekte
✅ objectFit für Bilder
✅ Professionelle Galerie bauen

---

## 🏆 GRATULIERT! 🎉

Du hast alle 3 Aufgaben gemacht!

Du kannst jetzt:

- ✅ Bilder einfügen
- ✅ Interaktive Bilder mit Buttons
- ✅ Ganze Galerien bauen

**Das ist großartig!** 💪

---

## 🚀 Was kommt als nächstes?

- Lerne **useEffect** für API-Aufrufe
- Bilder von Unsplash/Pixabay laden
- Click-to-Zoom Lightbox bauen
- Infinite Scroll implementieren

---

**Viel Erfolg auf deiner React-Reise! 🚀**

Happy Coding! 💻✨
