# 🔴 FORTGESCHRITTEN - Komplexe Features

Du bist jetzt **Pro-Level**! Hier bauen wir coole, komplexe Features! 🚀

---

## Was du lernst:

- ✅ useEffect Hook (für API, Events, etc.)
- ✅ Custom Hooks bauen
- ✅ Context API für State-Management
- ✅ Conditional Rendering Patterns
- ✅ Performance-Optimierung
- ✅ Erweiterte Array-Methoden

---

## Aufgabe F1: Todo-Liste mit Add/Remove

**Ziel:** Vollständige Todo-Liste mit Funktionen!

**Level:** ⭐⭐⭐⭐⭐ FORTGESCHRITTEN

**Datei:** `src/pages/TodoList.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React lernen", completed: false },
    { id: 2, text: "Router verstehen", completed: true },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <section>
      <h2>✅ Meine Todo-Liste</h2>

      <div style={{ maxWidth: "500px", margin: "30px auto" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Neue Todo..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #667eea",
            }}
          />
          <button className="btn" onClick={addTodo}>
            Hinzufügen
          </button>
        </div>

        <p
          style={{
            fontSize: "0.9em",
            color: "#666",
          }}
        >
          {completedCount} von {todos.length} erledigt
        </p>

        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: todo.completed ? "#e8f5e9" : "#f9f9f9",
                marginBottom: "10px",
                borderRadius: "5px",
                borderLeft: `4px solid ${todo.completed ? "#4caf50" : "#667eea"}`,
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#999" : "#333",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                style={{
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Was neu ist:**

- `[...todos, newTodo]` = Array Spread Operator
- `todos.filter()` = Array filtern
- `todos.map()` = Array transformieren
- `Date.now()` = Eindeutige ID

---

## Aufgabe F2: Theme Switcher (Dark Mode)

**Ziel:** Deine Page in Dark Mode verwandeln!

**Level:** ⭐⭐⭐⭐⭐ FORTGESCHRITTEN

**Datei:** `src/pages/ThemeSwitcher.jsx`

**Code:**

```jsx
import { useState } from 'react';

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Optional: Im localStorage speichern
    localStorage.setItem('darkMode', !isDarkMode);
  };

  const bgColor = isDarkMode ? '#222' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#333';
  const cardBg = isDarkMode ? '#333' : '#f0f0f0';

  return (
    <section style={{
      backgroundColor: bgColor,
      color: textColor,
      padding: '30px',
      minHeight: '80vh',
      transition: 'all 0.3s'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2>🌙 Theme Switcher</h2>
          <button
            className="btn"
            onClick={toggleTheme}
            style({
              fontSize: '1.5em',
              padding: '10px 20px'
            })
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div style={{
          backgroundColor: cardBg,
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <h3>Teste den Dark Mode</h3>
          <p>Die Website ändert Farben basierend auf deinem Theme!</p>
        </div>

        <div style={{
          backgroundColor: cardBg,
          padding: '20px',
          borderRadius: '10px'
        }}>
          <h3>Features:</h3>
          <ul>
            <li>✅ Light & Dark Mode</li>
            <li>✅ Smooth Transition</li>
            <li>✅ Speichert Preference</li>
            <li>✅ Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
```

---

## Aufgabe F3: Quiz mit Punkte-System

**Ziel:** Ein vollständiges Quiz!

**Level:** ⭐⭐⭐⭐⭐⭐ SCHWERER

**Datei:** `src/pages/AdvancedQuiz.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function AdvancedQuiz() {
  const questions = [
    {
      id: 1,
      question: "Was bedeutet JSX?",
      options: ["JavaScript XML", "Java SE X", "Just X"],
      correct: 0,
      points: 10,
    },
    {
      id: 2,
      question: "Wofür braucht man useState?",
      options: ["State verwalten", "Styling", "Texte übersetzen"],
      correct: 0,
      points: 10,
    },
    {
      id: 3,
      question: "Was ist React Router?",
      options: ["Ein CSS Framework", "Für Multiple Pages", "Für Datenbanken"],
      correct: 1,
      points: 10,
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQ];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === question.correct) {
      setScore(score + question.points);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  };

  if (finished) {
    const percentage = (score / (questions.length * 10)) * 100;
    return (
      <section>
        <h2>🎓 Quiz Fertig!</h2>
        <p style={{ fontSize: "2em" }}>Dein Score: {score} Punkte</p>
        <p style={{ fontSize: "1.2em" }}>
          Erfolgsrate: {percentage.toFixed(0)}%
        </p>
        <button className="btn" onClick={reset}>
          Nochmal spielen
        </button>
      </section>
    );
  }

  return (
    <section>
      <h2>🧠 React Quiz</h2>
      <div style={{ maxWidth: "700px", margin: "30px auto" }}>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>
              Frage {currentQ + 1} / {questions.length}
            </span>
            <span>Score: {score} Punkte</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "#ddd",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${((currentQ + 1) / questions.length) * 100}%`,
                height: "100%",
                backgroundColor: "#667eea",
                transition: "width 0.3s",
              }}
            />
          </div>
        </div>

        <h3>{question.question}</h3>

        <div style={{ marginBottom: "20px" }}>
          {question.options.map((option, i) => (
            <button
              key={i}
              disabled={answered}
              onClick={() => handleAnswer(i)}
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "2px solid #667eea",
                backgroundColor: "white",
                cursor: answered ? "not-allowed" : "pointer",
                opacity: answered ? 0.6 : 1,
                fontSize: "1em",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <button className="btn" onClick={handleNext}>
            {currentQ < questions.length - 1 ? "Weiter →" : "Fertig"}
          </button>
        )}
      </div>
    </section>
  );
}
```

---

## Aufgabe F4: Search & Filter

**Ziel:** Daten suchen und filtern!

**Level:** ⭐⭐⭐⭐⭐⭐ SCHWERER

**Datei:** `src/pages/SearchFilter.jsx`

**Code:**

```jsx
import { useState } from "react";

export default function SearchFilter() {
  const products = [
    { id: 1, name: "Laptop", category: "Tech", price: 999 },
    { id: 2, name: "Handy", category: "Tech", price: 599 },
    { id: 3, name: "Pullover", category: "Mode", price: 49 },
    { id: 4, name: "Jeans", category: "Mode", price: 69 },
    { id: 5, name: "Buch", category: "Bildung", price: 29 },
    { id: 6, name: "Kurs", category: "Bildung", price: 99 },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <section>
      <h2>🔍 Suche & Filter</h2>

      <div style={{ maxWidth: "800px", margin: "30px auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Suche nach Namen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #667eea",
              marginBottom: "15px",
              fontSize: "1em",
            }}
          />

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: "8px 15px",
                  borderRadius: "20px",
                  border: "2px solid #667eea",
                  backgroundColor: category === cat ? "#667eea" : "white",
                  color: category === cat ? "white" : "#667eea",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          {filtered.length} Ergebnis(se)
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "15px",
          }}
        >
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            >
              <h4>{product.name}</h4>
              <p style={{ fontSize: "0.9em", color: "#999" }}>
                {product.category}
              </p>
              <p
                style={{
                  fontSize: "1.2em",
                  color: "#667eea",
                  fontWeight: "bold",
                }}
              >
                €{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🎯 Zusammenfassung FORTGESCHRITTEN

**Du hast gelernt:**

- ✅ Komplexe State-Logik
- ✅ Array-Methoden (map, filter, find)
- ✅ Conditional Rendering patterns
- ✅ Form-Handling
- ✅ Performance-Patterns
- ✅ User-Interactions
- ✅ Data-Management

---

## 🏆 Du bist jetzt ein React PROFI!

**Die wichtigsten Begriffe, die du gelernt hast:**

- Components
- JSX
- Props
- State (useState)
- Hooks
- React Router
- Conditional Rendering
- Array map/filter
- Event Handling
- Forms

---

## 💪 Nächste Schritte in der echten Welt:

1. **APIs & Fetch**: Daten von Servern laden
2. **Context API**: Globaler State
3. **Redux**: Advanced State Management
4. **TypeScript**: Typsicherheit
5. **Testing**: Unit Tests schreiben
6. **Deployment**: Deine App live gehen!

---

## 📚 Weitere Lernressourcen:

- [React Docs](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [freeCodeCamp](https://freecodecamp.org)

---

**Glückwunsch! Du hast es geschafft! 🎉**

Jetzt kannst du echte React-Apps bauen! 🚀

Viel Erfolg auf deinem Weg als Web-Developer! 💻✨
