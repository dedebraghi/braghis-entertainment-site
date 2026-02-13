
# Braghi's Entertainment - Official Website Guidelines (v3.0 - STUDIO IDENTITY)

## 1. Obiettivo del Sito
Il sito è la vetrina ufficiale di **Braghi's Entertainment**.
Deve comunicare professionalità, passione indie e solidità. Il gioco *Death Penalty* è il contenuto principale, ma il "contenitore" deve avere l'estetica dello Studio.

* **Primary Goal:** Presentare lo studio e reindirizzare ai canali di vendita (Steam) e community (Discord/X).
* **Struttura:** Single Page Scroll (Landing Page pulita).

---

## 2. Visual Identity & Mood
Il design deve essere minimalista e moderno, mettendo al centro il **Logo dello Studio**.

* **Mood:** Tech, Clean, Indie Professional.
* **Riferimenti:** Siti di studi indie minimal (es. Finji, Supergiant Games - layout puliti che lasciano parlare i giochi).

---

## 3. Color Palette (Studio Branding)
**IMPORTANTE PER IL PROGRAMMATORE:**
I colori di accento non devono essere inventati. Devono essere estratti direttamente dal file `Logo 1080p.png`.

```css
:root {
  /* --- STUDIO COLORS (Da campionare dal Logo) --- */
  /* Colore Primario: Prelevare il colore dominante del logo */
  --brand-primary: #FFxxxx; /* <--- SOSTITUIRE CON HEX DEL LOGO */
  
  /* Colore Secondario: Una tonalità più scura o complementare del primario */
  --brand-hover: #CCxxxx;   /* <--- SOSTITUIRE CON VERSIONE SCURA DEL LOGO */

  /* --- BACKGROUNDS (Dark Theme Professional) --- */
  --bg-body: #0a0a0a;       /* Nero quasi assoluto */
  --bg-surface: #141414;    /* Grigio molto scuro per separare le sezioni */
  
  /* --- TYPOGRAPHY --- */
  --text-main: #F0F0F0;     /* Bianco leggibile */
  --text-muted: #888888;    /* Grigio per footer e testi secondari */
  
  /* --- EXTERNAL BRANDS --- */
  --steam-blue: #66c0f4;    /* Brand color ufficiale Steam (invariato) */
}

```

---

## 4. Tipografia

Usiamo font moderni e puliti che non "litighino" con il logo dello studio.

* **Headings (Titoli):** Sans-serif geometrico, forte.
* *Font:* 'Montserrat', 'Poppins' o 'Inter' (Bold/Black weight).
* *Style:* Uppercase per dare autorità.


* **Body:** Sans-serif ad alta leggibilità.
* *Font:* 'Inter' o 'Roboto'.
* *Style:* Regular, Line-height 1.6.



---

## 5. Layout & Sezioni

### 5.1. Header (Sticky)

* **Sfondo:** Trasparente (diventa `--bg-body` allo scroll).
* **Contenuto:** * Logo "Braghi's Entertainment" a sinistra (ben visibile).
* Icone Social (X, Discord) a destra.



### 5.2. Hero Section (Il Progetto in Corso)

Lo studio presenta il suo lavoro attuale.

* **Sfondo:** Key Art di *Death Penalty* scura.
* **Overlay:** Gradiente che va dal nero (basso) al trasparente (alto) per rendere leggibile il testo.
* **Testo:**
* "CURRENTLY IN DEVELOPMENT" (Piccolo, colore `--brand-primary`).
* Logo/Titolo di *Death Penalty*.
* **CTA:** Bottone Outline "DISCOVER THE GAME" (porta alla sezione sotto) o "WISHLIST ON STEAM".



### 5.3. About The Studio

Chi c'è dietro il codice.

* **Sfondo:** `--bg-body`.
* **Testo:**
* *"Braghi's Entertainment is a solo development studio dedicated to crafting immersive worlds and moral dilemmas."*


* **Stile:** Molto pulito, testo centrato o affiancato a un dettaglio del logo.

### 5.4. Project Showcase (Death Penalty Section)

Qui il design diventa leggermente più "Noir" per adattarsi al gioco, ma mantenendo la cornice del sito studio.

* **Card/Contenitore:** Una sezione larga con screenshot e trailer.
* **Features:** Lista puntata delle caratteristiche del gioco.

### 5.5. Footer

* **Sfondo:** `--bg-surface`.
* **Elementi:** Logo Studio monocromatico (grigio), Copyright, Link Privacy, Email Contatti.

---

## 6. UI Components

### 6.1. Bottoni Studio

Per tutte le azioni generiche (es. "Iscriviti alla Newsletter", "Contattaci").

```css
.btn-studio {
  background-color: var(--brand-primary);
  color: #000000; /* O bianco, dipende dal contrasto del logo */
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 4px; /* Leggero roundness, professionale */
  border: none;
  text-transform: uppercase;
  transition: opacity 0.3s;
}

.btn-studio:hover {
  background-color: var(--brand-hover);
}

```

### 6.2. Bottone Steam

Rimane distinto perché deve essere riconoscibile dai gamer.

```css
.btn-steam {
  background-color: transparent;
  border: 2px solid var(--steam-blue);
  color: #ffffff;
  /* ... resto dello stile standard steam ... */
}

```

---

## 7. Mobile & Responsiveness

* **Navigazione:** Su mobile, le icone social nell'header devono rimanere visibili.
* **Logo:** Assicurarsi che il logo dello studio sia leggibile anche su schermi piccoli (usare il file 400x400 se il 1080p risulta troppo dettagliato/piccolo).
* **Padding:** Margini generosi (24px) laterali.

---

## 8. Asset File List

Assicurati di mettere tutti gli asset all'interno di una apposita cartella e quelli che non sono già presenti nella nostra cartella principlae generali con nano banan pro.

1. `Logo 1080p.png` (Logo principale per Desktop).
2. `Logo 400x400.png` (Logo per Mobile e Favicon).
3. `Hero_Background.jpg` (Immagine suggestiva del gioco, scura).
4. `Screenshot_01.jpg`, `Screenshot_02.jpg` (Gameplay).

```
