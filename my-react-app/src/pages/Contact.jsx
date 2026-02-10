export default function Contact() {
  return (
    <section className="contact">
      <h2>📞 Kontakt</h2>
      <p>Gerne kannst du mich kontaktieren!</p>
      <button
        className="btn"
        onClick={() => alert("Danke für deine Nachricht!")}
      >
        Nachricht senden
      </button>
    </section>
  );
}
