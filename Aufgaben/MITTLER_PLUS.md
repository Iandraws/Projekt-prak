# 🔴 MITTLER+ - Bilder & Galerie

Hier lernste du mit **Bildern** zu arbeiten! Das ist wichtig für real Websites! 🖼️

---

## Was du lernst:

- ✅ Bilder in React einfügen
- ✅ Bilder mit useState anzeigen/verstecken
- ✅ Bilder mit `map()` in einer Galerie anzeigen
- ✅ Responsive Layouts mit CSS Grid

---

## Aufgabe M+1: Erstes Bild einfügen

**Ziel:** Ein Bild auf einer Page zeigen!

**Level:** ⭐⭐⭐ MITTLER+

**Datei:** `src/pages/ImagePage.jsx`

**Variante 1: Mit Emoji (Einfachste)**

```jsx
export default function ImagePage() {
  return (
    <section>
      <h2>🖼️ Meine erste Bild-Seite</h2>
      <div
        style={{
          fontSize: "200px",
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        🎨
      </div>
      <p>Das ist mein Lieblingsbild mit Emoji!</p>
    </section>
  );
}
```

**Variante 2: Mit URL-Bild**

```jsx
export default function ImagePage() {
  return (
    <section>
      <h2>🖼️ Meine erste Bild-Seite</h2>
      <img
        src="https://via.placeholder.com/400/667eea/ffffff?text=Mein+Bild"
        alt="Schönes Beispiel-Bild"
        style={{
          maxWidth: "400px",
          borderRadius: "10px",
          margin: "20px 0",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <p>Das ist ein schönes Bild von online!</p>
    </section>
  );
}
```

**Was zu tun:**

1. Neue Datei: `src/pages/ImagePage.jsx`
2. Wähle Variante 1 oder 2
3. Code kopieren
4. In `App.jsx` importieren und Route + Link hinzufügen

---

## Aufgabe M+2: Bild Anzeigen/Verstecken Button

**Ziel:** Mit onClick ein Bild anzeigen/verstecken!

**Level:** ⭐⭐⭐⭐ MITTLER+ SCHWERER

**Datei:** `src/pages/ImageToggle.jsx`

**Code:**

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
        style={{ fontSize: "1.1em" }}
      >
        {showImage ? "👁️ Verstecken" : "👁️ Anzeigen"}
      </button>

      {showImage && (
        <div style={{ margin: "30px 0" }}>
          <img
            src="https://via.placeholder.com/500/FF6B6B/ffffff?text=Geheimes+Bild"
            alt="Surprise Bild"
            style={{
              maxWidth: "500px",
              borderRadius: "10px",
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

**Was wichtig ist:**

- `{showImage && <img ... />}` = Nur wenn True anzeigen!
- `onClick={() => setShowImage(!showImage)}` = Toggle True/False
- `maxWidth: '500px'` = Responsive (passt sich an!)

---

## Aufgabe M+3: Kleine Galerie (Emoji)

**Ziel:** Mehrere Bilder/Emojis mit `map()` anzeigen!

**Level:** ⭐⭐⭐⭐ MITTLER+

**Datei:** `src/pages/EmojiGallery.jsx`

**Code:**

```jsx
export default function EmojiGallery() {
  const emojis = [
    { id: 1, emoji: "🌅", name: "Sonnenaufgang" },
    { id: 2, emoji: "🌴", name: "Palmen" },
    { id: 3, emoji: "🏔️", name: "Berg" },
    { id: 4, emoji: "🌊", name: "Meer" },
    { id: 5, emoji: "🌲", name: "Wald" },
    { id: 6, emoji: "🌺", name: "Blüte" },
  ];

  return (
    <section>
      <h2>🖼️ Emoji Galerie</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "30px auto",
        }}
      >
        {emojis.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              border: "2px solid transparent",
            }}
          >
            <div style={{ fontSize: "80px" }}>{item.emoji}</div>
            <p style={{ marginTop: "10px" }}>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Was wichtig ist:**

- `emojis.map((item) => (...))` = Für jeden Emoji wird diese Struktur erstellt!
- `key={item.id}` = SUPER WICHTIG! Hilft React zu verstehen
- `gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'` = Responsive Grid!

**Erweitere dich selbst:**

- Füg mehr Emojis hinzu!
- Ändere die Farben bei Hover!

---

## Aufgabe M+4: Bild-Galerie mit URLs

**Ziel:** Eine richtige Bild-Galerie!

**Level:** ⭐⭐⭐⭐⭐ MITTLER+ SCHWERER

**Datei:** `src/pages/ImageGallery.jsx`

**Code:**

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
      title: "Blau Innovation",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/250/FFA07A/ffffff?text=Bild+4",
      title: "Orange Energie",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/250/98D8C8/ffffff?text=Bild+5",
      title: "Grün Natur",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/250/F7DC6F/ffffff?text=Bild+6",
      title: "Gelb Freude",
    },
  ];

  return (
    <section>
      <h2>🖼️ Bild-Galerie</h2>

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
              }}
            />
            <div style={{ padding: "15px", backgroundColor: "#f9f9f9" }}>
              <h4 style={{ margin: "0 0 5px 0" }}>{image.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Was neu ist:**

- `height: '200px'` + `objectFit: 'cover'` = Kongruente Bildgröße!
- Responsive Grid passt sich an!
- Schöner Box-Shadow für Tiefe!

---

## Aufgabe M+5: Galerie mit Click Zoom (BONUS)

**Ziel:** Klick auf Bild = Größer anzeigen!

**Level:** ⭐⭐⭐⭐⭐⭐ SCHWERER

**Datei:** `src/pages/ZoomGallery.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function ZoomGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://via.placeholder.com/250/FF6B6B/ffffff?text=Natur+1",
      title: "Landschaft 1",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/250/4ECDC4/ffffff?text=Natur+2",
      title: "Landschaft 2",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/250/45B7D1/ffffff?text=Natur+3",
      title: "Landschaft 3",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/250/FFA07A/ffffff?text=Natur+4",
      title: "Landschaft 4",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/250/98D8C8/ffffff?text=Natur+5",
      title: "Landschaft 5",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/250/F7DC6F/ffffff?text=Natur+6",
      title: "Landschaft 6",
    },
  ];

  return (
    <section>
      <h2>🖼️ Klickbare Galerie</h2>

      {/* Selected Image (Zoom View) */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "10px",
              }}
            />
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "none",
                borderRadius: "5px",
                padding: "10px 15px",
                cursor: "pointer",
                fontSize: "1.2em",
              }}
              onClick={() => setSelectedImage(null)}
            >
              ✕ Schließen
            </button>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "30px auto",
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            onClick={() => setSelectedImage(image)}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.3s",
              ":hover": { transform: "scale(1.05)" },
            }}
          />
        ))}
      </div>
    </section>
  );
}
```

**Was neu ist:**

- `position: 'fixed'` = Overlay über ganze Seite
- `zIndex: 1000` = Kommt nach vorne!
- Click on Image öffnet Zoom
- ✕ Button zum Schließen

---

## 📸 Bilderquellen

**Free Bilder online:**

- https://unsplash.com - Kostenlose HD Bilder
- https://pixabay.com - Kostenlose Bilder
- https://via.placeholder.com - Placeholder Bilder (was wir nutzen)
- https://picsum.photos - Random Bilder

**Emojis:**

- 🌅 🌴 🏔️ 🌊 🌲 🌺 🌻 🌸 🌷 🌹
- 🎨 🖼️ 📸 📷 🎭 🎪 🎬
- ❤️ 💚 💙 💛 🧡

---

## 🎯 Zusammenfassung

**Du hast gelernt:**

- ✅ Bilder mit `<img>` einfügen
- ✅ Bilder mit CSS responsive machen
- ✅ map() für Galerien nutzen
- ✅ CSS Grid für Layouts
- ✅ Click Handler auf Bilder
- ✅ Modal/Overlay Fenster bauen
- ✅ State mit Bildern verwalten

---

## 💪 Nächster Schritt

Gratuliert! Du bist jetzt auf FORTGESCHRITTEN Level!

Geh zu **FORTGESCHRITTEN.md** für noch spannendere Aufgaben! 🚀

---

**Super gemacht! 🎉**
