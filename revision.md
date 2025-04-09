# 🧠 Exercice Livrable : Portfolio Responsive avec Git et GitHub Pages

---

## 🔢 Objectif du projet

Réaliser un mini **portfolio personnel responsive**, incluant :
- Une grille CSS avec `grid-template-areas`
- Des **media queries** pour l'adaptation mobile
- Un **mode dark** activable avec un bouton JavaScript
- La mise en ligne via **GitHub Pages**

---

## ⚙️ Structure de projet

```text
portfolio/
├── index.html
├── style.css
├── script.js
```

Chaque champ a son **rôle** :
- `index.html` : structure du contenu (profil, projets, etc.)
- `style.css` : mise en forme et responsive
- `script.js` : activation du mode dark

---

## 🌍 Grille avec `grid-template-areas`

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
}

header {
  grid-area: header;
}

aside {
  grid-area: sidebar;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

---

## 📱 Media Queries

```css
@media (max-width: 768px) {
  .grid-container {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

---

## ✨ Mode Dark en JS

```js
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
```

---

## 📄 Git : rappel des commandes utiles

```bash
# Initialiser le repo
$ git init

# Ajouter les fichiers
$ git add .

# Commit initial
$ git commit -m "Premier commit"

# Lier au repo distant
$ git remote add origin https://github.com/utilisateur/mon-portfolio.git

# Envoyer sur GitHub
$ git push -u origin main
```

---

## 📅 Activer GitHub Pages

1. Aller dans les **Settings** du repo GitHub
2. Rubrique **Pages**
3. Source : choisir la branche `main` et le dossier `/ (root)`
4. Lien du site fourni juste en dessous (ex: `https://utilisateur.github.io/mon-portfolio/`)

---

## 💡 Conseils aux apprenants

- Soignez les balises sémantiques : `<header>`, `<main>`, `<aside>`, `<footer>`
- Ajoutez votre photo de profil, liens vers vos réseaux
- Commitez souvent avec des messages clairs !

---

## 🎮 Challenge (optionnel)

- Ajouter une animation (fade, zoom...)
- Ajouter une section "contact" en bas
- Ajouter un formulaire simple

---

Bon code ✨ et bon déploiement 🚀 !

