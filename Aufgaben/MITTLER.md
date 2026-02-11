# 🟠 MITTLER - Multi-Page Apps

Jetzt bauen wir richtige **Multi-Page Websites** mit React Router! 🌐

---

## Was du lernst:

- ✅ React Router verstehen
- ✅ Multiple Pages bauen
- ✅ Navigation zwischen Pages
- ✅ Props zwischen Components

---

## Aufgabe C1: Deine erste neue Page

**Ziel:** Eine neue Page hinzufügen!

**Level:** ⭐⭐⭐ MITTLER

**Datei:** `src/pages/Welcome.jsx` (neue Datei)

**Code:**

```jsx
export default function Welcome() {
  return (
    <section>
      <h2>🎉 Willkommen im React Kurs!</h2>
      <p>Das ist eine neue Seite mit eigener Route!</p>
      <p>Du lernst gerade React Router - wie cool ist das?</p>
    </section>
  );
}
```

**Was zu tun:**

1. Datei erstellen: `src/pages/Welcome.jsx`
2. Code einfügen
3. In `App.jsx` importieren:
   ```jsx
   import Welcome from "./pages/Welcome";
   ```
4. Route hinzufügen:
   ```jsx
   <Route path="/welcome" element={<Welcome />} />
   ```
5. Link in Navbar:
   ```jsx
   <Link to="/welcome">Welcome</Link>
   ```

---

## Aufgabe C2: About Page verbessern

**Ziel:** Die About Seite mit eigenen Infos füllen!

**Level:** ⭐⭐⭐ MITTLER

**Was zu tun:**
Öffne `src/pages/About.jsx` und ändere den Text!

**Beispiel:**

```jsx
export default function About() {
  return (
    <section className="about">
      <h2>📝 Über mich</h2>
      <p>Hallo! Ich bin [Dein Name]!</p>
      <p>Ich lerne React und bin begeistert davon!</p>
      <p>Mit React Router kann ich jetzt echte Web-Apps bauen.</p>
      <p>Mein Hobby ist: [Dein Hobby]</p>
      <p>Ich lebe in [Deine Stadt]</p>
    </section>
  );
}
```

---

## Aufgabe C3: Services Page mit Karten

**Ziel:** Eine schöne Services Page mit mehreren Karten!

**Level:** ⭐⭐⭐⭐ MITTLER SCHWERER

**Datei:** `src/pages/Services.jsx`

**Code:**

```jsx
export default function Services() {
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Web Design",
      desc: "Schöne, moderne Designs erstellen",
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Entwicklung",
      desc: "Funktionale React Apps bauen",
    },
    {
      id: 3,
      icon: "🔍",
      title: "Testing",
      desc: "Apps gründlich testen",
    },
    {
      id: 4,
      icon: "📱",
      title: "Mobile",
      desc: "Mobile-freundlich designen",
    },
  ];

  return (
    <section>
      <h2>💼 Meine Services</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "30px auto",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              backgroundColor: "white",
              border: "2px solid #667eea",
              borderRadius: "10px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "15px" }}>
              {service.icon}
            </div>
            <h3
              style={{
                color: "#667eea",
                marginBottom: "10px",
              }}
            >
              {service.title}
            </h3>
            <p style={{ color: "#666" }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## Aufgabe C4: Galerie Page

**Ziel:** Eine vollständige Galerie mit map()!

**Level:** ⭐⭐⭐⭐ MITTLER SCHWERER

**Datei:** `src/pages/Gallery.jsx`

**Code:**

```jsx
export default function Gallery() {
  const projects = [
    {
      id: 1,
      emoji: "🎮",
      title: "Game Projekt",
      desc: "Ein Spiel mit React",
    },
    {
      id: 2,
      emoji: "🛒",
      title: "Shop App",
      desc: "Online-Shop mit Produkten",
    },
    {
      id: 3,
      emoji: "📊",
      title: "Dashboard",
      desc: "Analytics und Daten-Visualisierung",
    },
    {
      id: 4,
      emoji: "🎵",
      title: "Musik Player",
      desc: "Musik abspielen und Playlist",
    },
    {
      id: 5,
      emoji: "📝",
      title: "Blog",
      desc: "Mein persönlicher Blog",
    },
    {
      id: 6,
      emoji: "💬",
      title: "Chat App",
      desc: "Live Chat mit anderen",
    },
  ];

  return (
    <section>
      <h2>🖼️ Meine Projekte</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "30px auto",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "80px" }}>{project.emoji}</div>
            <h3>{project.title}</h3>
            <p style={{ color: "#666" }}>{project.desc}</p>
            <button className="btn" style={{ marginTop: "10px" }}>
              Mehr Info
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## Aufgabe C5: Skills/Tech Stack

**Ziel:** Zeige deine Technologien!

**Level:** ⭐⭐⭐ MITTLER

**Datei:** `src/pages/Skills.jsx`

**Code:**

```jsx
export default function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "React", "JavaScript"],
    tools: ["VS Code", "Git", "NPM", "Chrome DevTools"],
  };

  return (
    <section>
      <h2>💻 Meine Skills</h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h3>Frontend Skills</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {skills.frontend.map((skill, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  fontSize: "0.9em",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3>Tools</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {skills.tools.map((tool, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "#4ECDC4",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  fontSize: "0.9em",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Aufgabe C6: Blog/Posts

**Ziel:** Eine Blog-Listing Seite!

**Level:** ⭐⭐⭐⭐ MITTLER SCHWERER

**Datei:** `src/pages/Blog.jsx`

**Code:**

```jsx
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Warum ich React liebe",
      date: "10. Feb 2026",
      excerpt: "React macht Web-Entwicklung so viel einfacher...",
      category: "React",
    },
    {
      id: 2,
      title: "CSS Grid verstehen",
      date: "9. Feb 2026",
      excerpt: "Ein Guide zu CSS Grid für responsive Layouts...",
      category: "CSS",
    },
    {
      id: 3,
      title: "JavaScript Tipps & Tricks",
      date: "8. Feb 2026",
      excerpt: "Nützliche JavaScript Hacks die dich schneller machen...",
      category: "JavaScript",
    },
  ];

  return (
    <section>
      <h2>📰 Mein Blog</h2>
      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "10px",
              borderLeft: "4px solid #667eea",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ margin: 0 }}>{post.title}</h3>
              <span
                style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.8em",
                }}
              >
                {post.category}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9em",
                color: "#999",
                margin: "5px 0 15px 0",
              }}
            >
              {post.date}
            </p>
            <p>{post.excerpt}</p>
            <button className="btn" style={{ fontSize: "0.9em" }}>
              Lesen →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
```

---

## 🎯 Zusammenfassung

**Du hast gelernt:**

- ✅ Neue Pages mit React Router erstellen
- ✅ Routes und Links hinzufügen
- ✅ map() für Listen nutzen
- ✅ Props verwenden
- ✅ Responsive Grid Layouts
- ✅ Professionelle Page-Strukturen

---

## 💪 Nächster Schritt

Wenn du C1-C6 gemacht hast → Geh zu **MITTLER_PLUS.md** für Bilder & Galerie!

Danach → **FORTGESCHRITTEN.md** für komplexe Features! 🚀

---

**Great Job! 💪**
