# React Aufgaben - Anfänger Level 🎓

Alle Aufgaben zum Lernen von React, HTML, CSS und React Router!

---

## 📚 EINFACH (Aufgaben 41-46)

### Aufgabe 41: Tagline ändern ✏️

**Ziel:** Ändere den Untertitel im Header!

**Datei:** `src/App.jsx`

**Hinweis:**

```jsx
In App.jsx findest du:
<p className="tagline">Mit React Router! 🚀</p>

Ändere zu z.B. "Lerne React mit mir!" oder "Meine erste App"
```

---

### Aufgabe 42: Navbar Link-Farbe beim Hover 🎨

**Ziel:** Die Links werden beim Hover grün - ändere zu BLAU!

**Datei:** `src/App.css`

**Hinweis:**

```css
In App.css findest du:
.navbar a:hover {
  color: #28a745;
}

Ändere #28a745 zu #2196F3 (blau)
```

---

### Aufgabe 43: Header Padding ändern 📏

**Ziel:** Der Header hat viel Abstand (60px) - mach ihn kleiner auf 30px!

**Datei:** `src/App.css`

**Hinweis:**

```css
In App.css:
.header {
  padding: 60px 20px;
}

Ändere zu: padding: 30px 20px;
```

---

### Aufgabe 44: Neue Variable im State (LEICHT) 📝

**Ziel:** Füge in Home.jsx einen Willkommens-Text mit State ein!

**Datei:** `src/pages/Home.jsx`

**Hinweis:**

```jsx
In Home.jsx oben:
import { useState } from 'react';

function Home() {
  const [message, setMessage] = useState('Hallo Besucher!');
  return (
    ...
    <p>{message}</p>
    ...
  )
}
```

---

### Aufgabe 45: Button mit State 🔘

**Ziel:** Erstelle einen Button, der einen Text anzeigt/versteckt!

**Datei:** `src/pages/Toggle.jsx` (neue Datei)

**Hinweis:**

```jsx
import { useState } from "react";

export default function Toggle() {
  const [visible, setVisible] = useState(false);

  return (
    <section>
      <h2>🔘 Toggle</h2>
      <button className="btn" onClick={() => setVisible(!visible)}>
        {visible ? "Text verstecken" : "Text anzeigen"}
      </button>
      {visible && <p>🎉 Überraschung!</p>}
    </section>
  );
}
```

**Was zu tun ist:**

1. Erstelle neue Datei: `src/pages/Toggle.jsx`
2. Kopiere den Code oben
3. Importiere in `App.jsx`: `import Toggle from "./pages/Toggle";`
4. Füge Route hinzu: `<Route path="/toggle" element={<Toggle />} />`
5. Füge Link hinzu: `<Link to="/toggle">Toggle</Link>`

---

### Aufgabe 46: Input-Feld in Page 📝

**Ziel:** Erstelle eine Page mit Input zum Namen eingeben!

**Datei:** `src/pages/NameInput.jsx` (neue Datei)

**Hinweis:**

```jsx
import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <section>
      <h2>📝 Gib deinen Namen ein</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dein Name..."
      />
      <p>Hallo {name}! 👋</p>
    </section>
  );
}
```

**Was zu tun ist:**

1. Erstelle neue Datei: `src/pages/NameInput.jsx`
2. Kopiere den Code oben
3. In `App.jsx` importieren und Route + Link hinzufügen

---

## 🎯 MITTEL (Aufgaben 47-52)

### Aufgabe 47: Willkommens-Seite (Welcome) 🎉

**Ziel:** Erstelle eine extra "Welcome" Page!

**Datei:** `src/pages/Welcome.jsx` (neue Datei)

**Code zum Kopieren:**

```jsx
export default function Welcome() {
  return (
    <section>
      <h2>🎉 Willkommen!</h2>
      <p>Das ist die Welcome Seite</p>
      <p>Hier kannst du neue Besucher begrüßen!</p>
      <p>🚀 Los geht's mit React!</p>
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei erstellen: `src/pages/Welcome.jsx`
2. Code einfügen
3. In `App.jsx` importieren: `import Welcome from "./pages/Welcome";`
4. Route hinzufügen: `<Route path="/welcome" element={<Welcome />} />`
5. Link in Navbar: `<Link to="/welcome">Welcome</Link>`

---

### Aufgabe 48: Galerie mit Bildern 🖼️

**Ziel:** Erstelle eine Galerie-Page mit mehreren Bildern!

**Datei:** `src/pages/Gallery.jsx` (neue Datei)

**Code zum Kopieren:**

```jsx
export default function Gallery() {
  const images = [
    "🖼️ Bild 1: Landschaft",
    "🌄 Bild 2: Berg",
    "🎨 Bild 3: Abstrakt",
    "📸 Bild 4: Portrait",
  ];

  return (
    <section>
      <h2>🖼️ Meine Galerie</h2>
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            padding: "20px",
            border: "2px solid #667eea",
            margin: "10px auto",
            borderRadius: "5px",
            maxWidth: "300px",
          }}
        >
          <p style={{ fontSize: "1.2em" }}>{img}</p>
        </div>
      ))}
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/Gallery.jsx`
2. Code kopieren
3. In `App.jsx` importieren und Route + Link hinzufügen

---

### Aufgabe 49: Profil-Page mit Daten 👤

**Ziel:** Erstelle eine Profil-Seite mit strukturierten Daten!

**Datei:** `src/pages/Profile.jsx` (neue Datei)

**Code zum Kopieren:**

```jsx
export default function Profile() {
  const profile = {
    name: "Dein Name",
    age: 20,
    city: "Berlin",
    hobby: "React lernen",
    email: "deine@email.de",
  };

  return (
    <section>
      <h2>👤 Mein Profil</h2>
      <div
        style={{ textAlign: "left", maxWidth: "500px", margin: "20px auto" }}
      >
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Alter:</strong> {profile.age}
        </p>
        <p>
          <strong>Stadt:</strong> {profile.city}
        </p>
        <p>
          <strong>Hobby:</strong> {profile.hobby}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
      </div>
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/Profile.jsx`
2. Code kopieren (ändere die Werte!)
3. In `App.jsx` importieren und Route + Link hinzufügen

---

### Aufgabe 50: FAQ-Page mit Toggle ❓

**Ziel:** Erstelle eine FAQ mit ausklappbaren Antworten! (MITTLER+)

**Datei:** `src/pages/FAQ.jsx` (neue Datei)

**Code zum Kopieren:**

```jsx
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Was ist React?",
      a: "React ist eine JavaScript Bibliothek zum Erstellen von Benutzeroberflächen.",
    },
    {
      q: "Was ist React Router?",
      a: "Router ermöglicht mehrere Seiten in einer Single Page Application.",
    },
    {
      q: "Ist React schwer zu lernen?",
      a: "Nein, mit Übung und Geduld wird es einfach!",
    },
    {
      q: "Wozu braucht man useState?",
      a: "useState verwaltet den zustand (State) einer Komponente.",
    },
  ];

  return (
    <section>
      <h2>❓ FAQ</h2>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            margin: "15px auto",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            maxWidth: "600px",
          }}
        >
          <button
            className="btn"
            onClick={() => setOpenIndex(i === openIndex ? null : i)}
            style={{ width: "100%", textAlign: "left" }}
          >
            {faq.q}
          </button>
          {openIndex === i && (
            <p
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/FAQ.jsx`
2. Code kopieren
3. (Optional) Weitere Fragen hinzufügen!
4. In `App.jsx` importieren und Route + Link hinzufügen

---

### Aufgabe 51: Quiz-Page (MITTLER) 🧠

**Ziel:** Erstelle ein einfaches Quiz mit Punkten!

**Datei:** `src/pages/Quiz.jsx` (neue Datei)

**Code zum Kopieren:**

```jsx
import { useState } from "react";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleRight = () => {
    setScore(score + 1);
    setAnswered(true);
  };

  const handleWrong = () => {
    setAnswered(true);
  };

  const reset = () => {
    setScore(0);
    setAnswered(false);
  };

  return (
    <section>
      <h2>🧠 React Quiz</h2>
      <p style={{ fontSize: "1.2em" }}>
        Dein Score: <strong>{score}</strong>
      </p>

      {!answered && (
        <>
          <p>
            <strong>Frage 1: Was bedeutet JSX?</strong>
          </p>
          <button className="btn" onClick={handleRight}>
            JavaScript XML
          </button>
          <button className="btn" onClick={handleWrong}>
            Java SE X
          </button>
        </>
      )}

      {answered && (
        <>
          <p>Quiz beendet! 🎉</p>
          <button className="btn" onClick={reset}>
            Nochmal spielen
          </button>
        </>
      )}
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/Quiz.jsx`
2. Code kopieren
3. (Optional) Mehr Fragen hinzufügen!
4. In `App.jsx` importieren und Route + Link hinzufügen

---

### Aufgabe 52: Form mit mehreren Inputs 📋

**Ziel:** Erstelle ein Registrierungs-Formular!

**Datei:** `src/pages/RegisterForm.jsx` (neue Datei)

**Code zum Kopieren:**

```jsx
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password && formData.username) {
      setSubmitted(true);
      alert(`Willkommen ${formData.username}! 🎉`);
      setFormData({ email: "", password: "", username: "" });
    } else {
      alert("Bitte alle Felder ausfüllen!");
    }
  };

  return (
    <section>
      <h2>📋 Registrierung</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "20px auto" }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Benutzername:
          </label>
          <input
            type="text"
            name="username"
            placeholder="Dein Benutzername"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="deine@email.de"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Passwort:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Dein Passwort"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <button type="submit" className="btn" style={{ width: "100%" }}>
          Registrieren
        </button>
      </form>
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/RegisterForm.jsx`
2. Code kopieren
3. In `App.jsx` importieren und Route + Link hinzufügen

---

## ✅ Checklist für ALLE Aufgaben

### Schritt-für-Schritt Anleitung:

**Für jede neue Page (Aufgaben 45-52):**

1. **Datei erstellen:** `src/pages/[PageName].jsx`
2. **Code einfügen:** Den Code aus dieser Datei kopieren
3. **In App.jsx importieren:**
   ```jsx
   import PageName from "./pages/PageName";
   ```
4. **Route hinzufügen (in den Routes):**
   ```jsx
   <Route path="/path" element={<PageName />} />
   ```
5. **Link in Navbar hinzufügen:**
   ```jsx
   <Link to="/path">Link Text</Link>
   ```

---

## 🎓 Was du lernst:

- ✅ **Aufgaben 41-43:** CSS & HTML Grundlagen
- ✅ **Aufgaben 44-46:** React State (useState) Basics
- ✅ **Aufgaben 47-49:** Neue Pages mit React
- ✅ **Aufgaben 50-52:** Komplexere Features (Toggle, Forms, State)

---

## � BILDER & GALERIE (Aufgaben 53-55)

### Aufgabe 53: Bild in eine Page einbinden 🖼️

**Ziel:** Zeige ein Bild auf einer neuen Seite an!

**Datei:** `src/pages/ImagePage.jsx` (neue Datei)

**Knowledge:** Für diese Aufgabe brauchst du ein Bild. Du kannst:

- Ein Emoji nutzen (einfachste Option!)
- Ein Bild aus dem `public/` Ordner nutzen
- Eine URL von online verwenden

**Code zum Kopieren (mit Emoji):**

```jsx
export default function ImagePage() {
  return (
    <section>
      <h2>🖼️ Meine Bild-Seite</h2>
      <div
        style={{
          fontSize: "200px",
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        🎨
      </div>
      <p>Das ist mein Lieblingsbild! Schön, oder?</p>
    </section>
  );
}
```

**Code zum Kopieren (mit URL-Bild):**

```jsx
export default function ImagePage() {
  return (
    <section>
      <h2>🖼️ Meine Bild-Seite</h2>
      <img
        src="https://via.placeholder.com/400"
        alt="Schönes Bild"
        style={{
          maxWidth: "400px",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />
      <p>Das ist mein Lieblingsbild!</p>
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/ImagePage.jsx`
2. Wähle eine Variante oben
3. Code kopieren
4. In `App.jsx` importieren und Route + Link hinzufügen

---

### Aufgabe 54: Button zum Einblenden/Ausblenden (MITTLER+) 👁️

**Ziel:** Ein Button, der ein Bild zeigt/versteckt!

**Datei:** `src/pages/ImageToggle.jsx` (neue Datei)

**Was lernen wir:** useState mit Bildern nutzen

**Code zum Kopieren:**

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
        style={{ fontSize: "1.1em", padding: "15px 30px" }}
      >
        {showImage ? "👁️ Bild verstecken" : "👁️ Bild anzeigen"}
      </button>

      {showImage && (
        <div style={{ margin: "30px 0" }}>
          <div
            style={{
              fontSize: "150px",
              textAlign: "center",
            }}
          >
            🌅
          </div>
          <p>Wunderschöne Landschaft! 🎨</p>
        </div>
      )}
    </section>
  );
}
```

**Variante mit URL-Bild:**

```jsx
import { useState } from "react";

export default function ImageToggle() {
  const [showImage, setShowImage] = useState(false);

  return (
    <section>
      <h2>👁️ Bild Anzeigen/Verstecken</h2>

      <button className="btn" onClick={() => setShowImage(!showImage)}>
        {showImage ? "👁️ Bild verstecken" : "👁️ Bild anzeigen"}
      </button>

      {showImage && (
        <img
          src="https://via.placeholder.com/500"
          alt="Geheimes Bild"
          style={{
            maxWidth: "500px",
            borderRadius: "10px",
            margin: "20px auto",
            display: "block",
          }}
        />
      )}
    </section>
  );
}
```

**Was wichtig ist:**

- `{showImage && ...}` = Nur anzeigen wenn showImage true ist!
- `{!showImage ? 'Text A' : 'Text B'}` = Ternary Operator für Button-Text
- `onClick={() => setShowImage(!showImage)}` = Toggle zwischen true/false

**Was zu tun ist:**

1. Neue Datei: `src/pages/ImageToggle.jsx`
2. Code kopieren
3. In `App.jsx` importieren und Route + Link hinzufügen

---

### Aufgabe 55: Image Gallery mit map() 🖼️ (SCHWERER)

**Ziel:** Eine Galerie mit mehreren Bildern, die mit map() durchgegangen werden!

**Datei:** `src/pages/ImageGallery.jsx` (neue Datei)

**Was lernen wir:** map() um Arrays zu durchlaufen + Bilder anzeigen

**Code zum Kopieren (mit Emojis):**

```jsx
export default function ImageGallery() {
  const images = [
    { id: 1, emoji: "🌅", title: "Sonnenaufgang" },
    { id: 2, emoji: "🌴", title: "Palmen" },
    { id: 3, emoji: "🏔️", title: "Berge" },
    { id: 4, emoji: "🌊", title: "Meer" },
    { id: 5, emoji: "🌲", title: "Wald" },
    { id: 6, emoji: "🌺", title: "Blüten" },
  ];

  return (
    <section>
      <h2>🖼️ Meine Galerie</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "20px auto",
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
              ":hover": {
                transform: "scale(1.05)",
              },
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

**Code zum Kopieren (mit URL-Bildern):**

```jsx
export default function ImageGallery() {
  const images = [
    {
      id: 1,
      url: "https://via.placeholder.com/200/FF6B6B/ffffff?text=Bild+1",
      title: "Bild 1",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/200/4ECDC4/ffffff?text=Bild+2",
      title: "Bild 2",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/200/45B7D1/ffffff?text=Bild+3",
      title: "Bild 3",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/200/FFA07A/ffffff?text=Bild+4",
      title: "Bild 4",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/200/98D8C8/ffffff?text=Bild+5",
      title: "Bild 5",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/200/F7DC6F/ffffff?text=Bild+6",
      title: "Bild 6",
    },
  ];

  return (
    <section>
      <h2>🖼️ Meine Galerie</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "20px auto",
        }}
      >
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.url}
              alt={image.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
            />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {image.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Was wichtig ist:**

- `{images.map((image) => (...))}` = Für jedes Bild wird die Struktur erstellt
- `key={image.id}` = WICHTIG! Hilft React die Items zu unterscheiden
- `gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'` = Responsive Grid

**Erweiterung: Mit Click Handler (BONUS):**

```jsx
import { useState } from "react";

export default function ImageGallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    { id: 1, emoji: "🌅", title: "Sonnenaufgang" },
    // ... mehr Bilder
  ];

  return (
    <section>
      <h2>🖼️ Meine Galerie</h2>

      {selected && (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "30px",
            borderRadius: "10px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <h3>{selected.title}</h3>
          <div style={{ fontSize: "150px" }}>{selected.emoji}</div>
          <button className="btn" onClick={() => setSelected(null)}>
            Schließen
          </button>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelected(image)}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "80px" }}>{image.emoji}</div>
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Was zu tun ist:**

1. Neue Datei: `src/pages/ImageGallery.jsx`
2. Wähle eine Variante (mit Emojis oder URLs)
3. Code kopieren
4. (OPTIONAL) Die Bilder-Liste erweitern mit eigenen Bildern!
5. In `App.jsx` importieren und Route + Link hinzufügen

---

## 🎓 Was du lernst:

- ✅ **Aufgaben 41-43:** CSS & HTML Grundlagen
- ✅ **Aufgaben 44-46:** React State (useState) Basics
- ✅ **Aufgaben 47-49:** Neue Pages mit React
- ✅ **Aufgaben 50-52:** Komplexere Features (Toggle, Forms, State)
- ✅ **Aufgaben 53-55:** Bilder + map() + Gallery (WICHTIG!)

---

## �💡 Tipps zum Lernen:

1. **Schreib den Code selbst ab** - nicht kopieren!
2. **Experimentiere** - ändere Farben, Texte, etc.
3. **Fehler sind gut!** - Sie helfen dir zu lernen
4. **Frag wenn du stuck bist** - Gib deine beste Versuche!
5. **Testet im Browser** - Siehe die Änderungen live!

---

## 🚀 Viel Erfolg beim Lernen!

Viel Spaß mit React! 💪
