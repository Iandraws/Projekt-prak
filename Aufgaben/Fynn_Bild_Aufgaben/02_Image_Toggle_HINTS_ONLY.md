# 👁️ Aufgabe 2: Bild Anzeigen/Verstecken - NUR HINTS!

**Ziel:** Mit Button Bild anzeigen oder verstecken!

**Schwierigkeit:** ⭐⭐⭐ MITTLER | **Zeit:** ~30 Minuten

**Voraussetzung:** Aufgabe 1 ✅

---

## 📖 Was du lernen musst

- `useState` Hook nutzen
- Toggle mit `!` (umgekehrter Wert)
- Conditional Rendering `{condition && element}`
- onClick Handler
- Ternary Operator `? :`

---

## 🎯 Deine Aufgabe

Erstelle Page "ImageToggle" mit:

- ✅ Button zum Anzeigen/Verstecken
- ✅ Bild das toggled
- ✅ Button-Text ändert sich

---

## 👣 Hints

### Schritt 1: Neue Datei

Erstelle: `src/pages/ImageToggle.jsx`

### Schritt 2: Import + State

Du brauchst:

- Import von `useState` von 'react'
- Ein State mit Name wie `showImage` oder `isVisible`
- Anfangswert: `false` (versteckt)

```
import { useState } from 'react';

export default function ImageToggle() {
  const [showImage, setShowImage] = useState(false);

  return (
    <section>
      // DEIN CODE
    </section>
  );
}
```

### Schritt 3: Button mit onClick

```
<button
  onClick={() => setShowImage(!showImage)}
>
  // Button-Text ändert sich mit Ternary:
  // {showImage ? 'Verstecken' : 'Anzeigen'}
</button>
```

**Wichtig:** `!showImage` = umgekehrter Wert!

### Schritt 4: Conditional Rendering

```
{showImage && (
  <img src="..." alt="..." style={{...}} />
)}
```

Das Bild wird NUR gezeigt wenn `showImage === true`!

### Schritt 5: In App.jsx

- Import hinzufügen
- Route hinzufügen
- Link hinzufügen

### Schritt 6: Testen!

- Button klicken → Bild erscheint
- Nochmal klicken → verschwindet

---

## 💡 Wichtige Konzepte

### setState ist eine Funktion:

```
const [visible, setVisible] = useState(false);

// richtig:
setVisible(true)
setVisible(!visible)

// falsch:
visible = true  ❌
visible = !visible ❌
```

### Ternary Operator:

```
{condition ? 'wenn true' : 'wenn false'}
```

### Conditional Rendering:

```
{condition && <element />}
```

---

## ✨ Erweiterte Ideen

**Leicht:**

- Andere Button-Texte
- Text unter Bild
- Andere Emojis

**Mittler:**

- 2 verschiedene Bilder (je nach State)
- Counter wie oft geklickt
- Mit Fade-Animation

```
style={{ transition: 'opacity 0.3s', opacity: showImage ? 1 : 0 }}
```

---

## 📋 Checklist

- [ ] Datei erstellt
- [ ] useState importiert und verwendet
- [ ] State hat Anfangswert false
- [ ] Button mit onClick
- [ ] Ternary Operator für Text
- [ ] Conditional Rendering für Bild
- [ ] Import/Route/Link in App.jsx
- [ ] Im Browser getestet
- [ ] Toggle funktioniert ✅

---

**WICHTIG: Schreib selbst! 💪**

Nächster Schritt → [Aufgabe 3: Image Galerie](03_Image_Galerie.md)
