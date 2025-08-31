# Advice Generator App

A simple app that fetches random advice using the free [Advice Slip API](https://api.adviceslip.com/advice).
Built with **HTML, CSS, and Vanilla JavaScript** — no frameworks, no bundlers.

---

## ✨ Features

* Fetches random advice from `https://api.adviceslip.com/advice`
* One-click “Get Advice” button
* Responsive, mobile-friendly design
* Lightweight (just HTML, CSS, JS)

---

## 🔗 API Reference

* **Random Advice**

  * `GET https://api.adviceslip.com/advice`
  * Example Response:

    ```json
    {
      "slip": {
        "id": 42,
        "advice": "Always double-check your work."
      }
    }
    ```

> ⚠️ **Caching note**: The Advice Slip API sometimes returns cached results.
> To avoid this, append a query string (e.g. `?_=${Date.now()}`) when fetching.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Deployment:** Works with Netlify, GitHub Pages, or any static hosting

---

## 🚀 How to Use

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/advice-generator.git
   cd advice-generator
   ```

2. Open `index.html` in your browser.
   That’s it 🎉

3. (Optional) To serve locally with a simple HTTP server:

   ```bash
   npx serve
   ```

   or use VS Code’s **Live Server** extension.

---

## 📂 Project Structure

```
advice-generator/
│── index.html    # Main HTML file
│── style.css     # Styles
│── script.js     # Fetch logic & DOM manipulation
└── README.md     # Project documentation
```

---

## 🧩 Example Code Snippet (JS)

```js
const adviceText = document.getElementById("advice");
const btn = document.getElementById("btn");

async function getAdvice() {
  const res = await fetch(`https://api.adviceslip.com/advice?_=${Date.now()}`);
  const data = await res.json();
  adviceText.textContent = `"${data.slip.advice}"`;
}

btn.addEventListener("click", getAdvice);

// load one on start
getAdvice();
```

---

## 🌐 Live Demo

You can deploy easily to **Netlify** or **GitHub Pages**.

---

Do you want me to also make a **shorter, minimal version** (like what you’d put directly on GitHub), or keep this detailed one with examples?
