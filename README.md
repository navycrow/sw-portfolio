# Portfolio - Hervé Gonzalez

Bienvenue sur mon portfolio en ligne : [sw-portfolio-lime.vercel.app](https://sw-portfolio-lime.vercel.app/)

Ce site présente mon parcours, mes compétences, ainsi que plusieurs projets réalisés dans le cadre de ma formation et de mes expériences personnelles.

## 🔧 Technologies utilisées

- **React.js** – Framework JavaScript pour construire l'interface utilisateur
- **Vite** – Outil de build rapide pour les projets front-end
- **Vercel** – Plateforme d’hébergement utilisée pour le déploiement
- **FormSubmit.co** – Plateforme de gestion de formulaire de contact

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

public/
├── data
│   ├── about.json
│   ├── bijouterie.png
│   ├── experiences.json
│   ├── skills.json
│   ├── socialNetworks.json
│   ├── trainings.json
│   └── works.json
├── img
│   ├── background
│   │   ├── faded_gallery-OfdOEdGYiuk-unsplash.jpg
│   │   ├── image2.png
│   │   ├── image.png
│   │   ├── pawel-czerwinski-f5ITyZ8pi5I-unsplash.jpg
│   │   ├── pawel-czerwinski-M40QnK-PXkI-unsplash.jpg
│   │   ├── pawel-czerwinski-Slf8QxaFIWw-unsplash.jpg
│   │   └── vimal-s-cPGMrfAuUSg-unsplash.jpg
│   ├── bootstrap.svg
│   ├── css3.svg
│   ├── figma.svg
│   ├── github.svg
│   ├── html5.svg
│   ├── javascript.svg
│   ├── linkedin.svg
│   ├── react.svg
│   └── wordpress.svg
└── vite.svg