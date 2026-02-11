# 🎓 React Aufgaben für Fyn

Willkommen! Hier findest du alle Aufgaben zum Lernen von React, organisiert nach Schwierigkeit.

---

## 📋 Was du hier findest:

1. **ANFÄNGER** - HTML, CSS, Basics
2. **ANFÄNGER+** - State, useState
3. **MITTLER** - Multiple Pages, Forms
4. **MITTLER+** - Bilder, Gallerie, Conditionals
5. **FORTGESCHRITTEN** - Komplexe Features

---

## 📁 Datei-Struktur:

```
Aufgaben/
├── ANFAENGER.md          ← Anfänger Aufgaben
├── ANFAENGER_PLUS.md     ← Anfänger+ Aufgaben
├── MITTLER.md            ← Mittler Aufgaben
├── MITTLER_PLUS.md       ← Mittler+ (Bilder!) Aufgaben
├── FORTGESCHRITTEN.md    ← Schwerer
└── README.md             ← Diese Datei
```

---

## 🚀 So startest du:

1. Wähle dein Level aus den MDM-Dateien
2. Lies die Aufgabe ganz durch
3. Schreib den Code selbst (nicht kopieren!)
4. Test im Browser mit `npm run dev`
5. Fehler? **Perfekt!** - Sie helfen dir zu lernen!

---

## 💡 Wichtige React Konzepte:

### 1️⃣ **Components** - Bausteine

```jsx
function MyComponent() {
  return <h1>Hallo!</h1>;
}
```

### 2️⃣ **State** - Speichert Daten

```jsx
const [count, setCount] = useState(0);
```

### 3️⃣ **Props** - Daten zwischen Components

```jsx
function Welcome(props) {
  return <h1>{props.name}</h1>;
}
```

### 4️⃣ **map()** - Schleife für Arrays

```jsx
{
  items.map((item) => <div>{item}</div>);
}
```

### 5️⃣ **Conditional Rendering** - Wenn/Dann

```jsx
{
  isVisible && <p>Sichtbar!</p>;
}
{
  count > 5 ? <p>Viel!</p> : <p>Wenig!</p>;
}
```

---

## ✅ Tipps zum Erfolg:

- 📖 **Lies die Hinweise** genau durch
- 🧪 **Experimentiere** - ändere Werte!
- 🐛 **Fehler sind Lernchancen** - versteh sie, behebs einen
- 🤔 **Denk zuerst** - bevor du Code schreibst
- 🔍 **Vergleich mit der Lösung** - wenn du stuck bist
- 💬 **Frag wenn nötig** - kein Grund zu schämen!

---

## 🎯 Dein Learning Path:

1. Starte mit **ANFAENGER.md**
2. Mache 3-4 Aufgaben pro Sitzung
3. Gib nicht auf bei Fehler!
4. Wenn was nicht klappt, geh zurück und lies nochmal
5. **Celebration!** 🎉 Nach jeder Aufgabe!

---

**Viel Erfolg und Spaß mit React! 💪**

Schau in die einzelnen Dateien für deine nächsten Aufgaben!
