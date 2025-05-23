# Portfolio - Hervé Gonzalez

Bienvenue sur mon portfolio en ligne : [sw-portfolio-lime.vercel.app](https://sw-portfolio-lime.vercel.app/)

Ce site présente mon parcours, mes compétences, ainsi que plusieurs projets réalisés dans le cadre de ma formation et de mes expériences personnelles.

## 🔧 Technologies utilisées

- **React.js** – Framework JavaScript pour construire l'interface utilisateur
- **Vite** – Outil de build rapide pour les projets front-end
- **Vercel** – Plateforme d’hébergement utilisée pour le déploiement

## 🧭 Contenu du portfolio

- **A propos de moi** : Introduction et présentation rapide
- **Mes Compétences** : Technologies et outils que je maîtrise
- **Mes réalisations** : Détail des projets réalisés avec liens vers les dépôts GitHub
- **Mes expériences professionnelles** : Mon parcours professionnel, les postes occupés
- **Etudes et formations** : Mon parcours d'études et mes formations professionnelles
- **Contact** : Moyens de me contacter (formulaire)

## 🚀 Mise en ligne

Le site est hébergé sur Vercel et est automatiquement mis à jour depuis le dépôt GitHub à chaque modification de la branche principale.

## 🗂️ Structure du projet
```plaintext
src/
├── App.jsx # Composant principal de l'application
├── App.css # Styles globaux
├── main.jsx # Point d'entrée React (ReactDOM)
│
├── assets/ # Fichiers statiques
│ ├── img/ # Images utilisées sur le site
│ └── react.svg
│
├── components/ # Composants réutilisables
│ ├── BurgerBtn.jsx # Bouton de menu responsive
│ ├── BurgerBtn.css
│ ├── DarkModeBtn.jsx # Bouton pour activer le mode sombre
│ ├── Footer.jsx # Pied de page
│ ├── Header.jsx # En-tête du site (avec navigation)
│ ├── Header.css
│ ├── SocialNetworks.jsx # Icônes/lien vers les réseaux sociaux
│ └── SocialNetworks.css
│
└── pages/ # Pages principales du site
├── About.jsx # Présentation personnelle
├── About.css
├── Contact.jsx # Page de contact
├── Contact.css
├── Experiences.jsx # Expériences professionnelles
├── Skills.jsx # Compétences techniques
├── Trainings.jsx # Formations
├── Works.jsx # Réalisations / projets
└── Works.css