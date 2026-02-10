import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1>Meine Website</h1>
        <p className="tagline">Mit React Router! 🚀</p>
      </header>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2026 Meine Website. Mit React Router 🎉</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
