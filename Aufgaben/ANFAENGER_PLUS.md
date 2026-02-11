# 🟡 ANFÄNGER+ - useState & State Management

Jetzt wird's interaktiv! Lernen wir **useState** - das WICHTIGSTE in React! ⚡

---

## 🔑 Was ist setState?

**State = "Zustand"** - Daten die sich ändern können!

```jsx
import { useState } from "react";

function MyComponent() {
  // state = wert, setState = funktion zum ändern
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Zähler: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
```

---

## Aufgabe B1: Einfacher Counter

**Ziel:** Dein erster useState Hook!

**Level:** ⭐⭐ ANFÄNGER+

**Aufgabe:**
Erstelle eine neue Page mit einem Counter!

**Datei:** `src/pages/Counter.jsx` (neue Datei!)

**Code:**

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>🔢 Mein Counter</h2>
      <p style={{ fontSize: "3em" }}>{count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </section>
  );
}
```

**Was zu tun:**

1. Neue Datei erstellen: `src/pages/Counter.jsx`
2. Code oben kopieren
3. In `App.jsx` importieren
4. Route + Link hinzufügen
5. Im Browser testen - Button klicken!

**Erweitere dich selbst:**

- Füg einen "-1" Button hinzu! (Hinweis: `setCount(count - 1)`)

---

## Aufgabe B2: Text Input mit State

**Ziel:** Benutzereingaben speichern!

**Level:** ⭐⭐ ANFÄNGER+

**Aufgabe:**
Der Benutzer gibt seinen Namen ein - und der wird angezeigt!

**Datei:** `src/pages/NameInput.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <section>
      <h2>👤 Gib deinen Namen ein</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dein Name..."
        style={{
          padding: "10px",
          fontSize: "1em",
          borderRadius: "5px",
          border: "2px solid #667eea",
          marginBottom: "15px",
          minWidth: "300px",
        }}
      />
      {name && <p>Hallo {name}! 👋</p>}
    </section>
  );
}
```

**Was wichtig ist:**

- `value={name}` = Input zeigt den State
- `onChange={(e) => setName(e.target.value)}` = Wenn Input ändert, Update State
- `{name && <p>...</p>}` = Nur anzeigen wenn name nicht leer ist!

---

## Aufgabe B3: Toggle (Anzeigen/Verstecken)

**Ziel:** Mit true/false etwas anzeigen/verstecken!

**Level:** ⭐⭐ ANFÄNGER+

**Aufgabe:**
Ein Button, der Text anzeigt oder versteckt!

**Datei:** `src/pages/Toggle.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function Toggle() {
  const [visible, setVisible] = useState(false);

  return (
    <section>
      <h2>👁️ Toggle Button</h2>
      <button className="btn" onClick={() => setVisible(!visible)}>
        {visible ? "👁️ Verstecken" : "👁️ Anzeigen"}
      </button>

      {visible && (
        <p style={{ marginTop: "20px", fontSize: "1.2em" }}>
          🎉 Überraschung! Ich bin jetzt sichtbar!
        </p>
      )}
    </section>
  );
}
```

**Was wichtig ist:**

- `{visible ? 'Text A' : 'Text B'}` = Wenn sichtbar "A", sonst "B"
- `setVisible(!visible)` = Umschalten zwischen true/false
- `{visible && <p>...</p>}` = Nur wenn visible = true

---

## Aufgabe B4: Mehrere Inputs (Profil)

**Ziel:** Mehrere State-Variablen kombinieren!

**Level:** ⭐⭐⭐ ANFÄNGER+ SCHWERER

**Aufgabe:**
Benutzer gibt mehrere Infos ein und sieht sein Profil!

**Datei:** `src/pages/ProfileForm.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function ProfileForm() {
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [city, setCity] = useState("");

  return (
    <section>
      <h2>👤 Mein Profil Creator</h2>

      <div style={{ maxWidth: "500px", margin: "20px auto" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Dein Alter:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="z.B. 15"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Dein Hobby:</label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            placeholder="z.B. Gaming"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Deine Stadt:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="z.B. Berlin"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
      </div>

      {age || hobby || city ? (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            margin: "20px auto",
          }}
        >
          <h3>Dein Profil:</h3>
          {age && <p>📅 Alter: {age}</p>}
          {hobby && <p>🎮 Hobby: {hobby}</p>}
          {city && <p>🏠 Stadt: {city}</p>}
        </div>
      ) : (
        <p>👆 Füll die Felder oben aus!</p>
      )}
    </section>
  );
}
```

---

## Aufgabe B5: Countdown Timer

**Ziel:** State mit Logik verbinden!

**Level:** ⭐⭐⭐ ANFÄNGER+ SCHWERER

**Aufgabe:**
Ein Counter der ab 10 runterzählt!

**Datei:** `src/pages/Countdown.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function Countdown() {
  const [count, setCount] = useState(10);
  const [finished, setFinished] = useState(false);

  const handleCountdown = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCount(10);
    setFinished(false);
  };

  return (
    <section>
      <h2>⏱️ Countdown</h2>

      <p style={{ fontSize: "4em", color: count > 3 ? "#667eea" : "#ff6b6b" }}>
        {count}
      </p>

      {!finished ? (
        <button className="btn" onClick={handleCountdown}>
          Countdown
        </button>
      ) : (
        <>
          <p style={{ fontSize: "1.5em" }}>🎉 Fertig!</p>
          <button className="btn" onClick={reset}>
            Nochmal
          </button>
        </>
      )}
    </section>
  );
}
```

---

## Aufgabe B6: Like/Unlike Button

**Ziel:** Wie/Nicht-Wie Toggle mit Emoji!

**Level:** ⭐⭐ ANFÄNGER+

**Aufgabe:**
Ein Button zum Liken/Unliken mit Zähler!

**Datei:** `src/pages/LikeButton.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <section>
      <h2>❤️ Like Button</h2>

      <button
        className="btn"
        onClick={handleLike}
        style={{
          backgroundColor: liked ? "#FF6B6B" : "#CCC",
          fontSize: "1.2em",
        }}
      >
        {liked ? "❤️ Unlike (" : "🤍 Like ("} {likes}
        {")"}
      </button>
    </section>
  );
}
```

---

## 📚 Wichtige Konzepte

### `useState` Syntax

```jsx
const [value, setValue] = useState(initialValue);

// value = aktuelle Wert
// setValue = funktion update
// initialValue = anfangswert
```

### Häufige Fehler

❌ **FALSCH:**

```jsx
setCount(count); // Keine änderung!
setCount(0); // Immer 0!
```

✅ **RICHTIG:**

```jsx
setCount(count + 1); // Erhöht um 1
setCount((prev) => prev + 1); // Auch richtig!
```

---

## ✅ Zusammenfassung

**Du hast gelernt:**

- ✅ `useState` Hook nutzen
- ✅ State Daten speichern
- ✅ State aktualisieren mit `setState`
- ✅ Conditional Rendering (`{value && ...}`)
- ✅ Ternary Operator (`? :`)
- ✅ Input-Felder mit State
- ✅ Toggle-Funktionen

---

## 🎯 Nächster Schritt

Wenn du B1-B6 gemacht hast, geh zu **MITTLER.md**!

Dort bauen wir Pages zusammen! 🌐

---

**Super gemacht! 💪**
