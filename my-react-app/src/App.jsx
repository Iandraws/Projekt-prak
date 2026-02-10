import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Meine Website</h1>
        <p className="tagline">Willkommen auf meiner Seite!</p>
      </header>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">Über mich</a>
        <a href="#contact">Kontakt</a>
      </nav>

      <section className="hero">
        <h2>Hallo! 👋</h2>
        <p>Ich lerne gerade React und HTML/CSS</p>
      </section>

      <section className="about">
        <h2>Über mich</h2>
        <p>Das ist ein Test-Website um HTML und CSS zu lernen.</p>
        <p>Hier kann ich später mehr über mich schreiben!</p>
      </section>

      <section className="contact">
        <h2>Kontakt</h2>
        <button className="btn">Email schreiben</button>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Meine Website. Alle Rechte vorbehalten.</p>
      </footer>
    </>
  );
}

export default App;
