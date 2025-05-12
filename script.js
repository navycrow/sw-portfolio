class Profile {
    constructor(path) {
        this.path = path
        this.load()
    }

    load() {  // Charge le profil
        fetch(this.path)
            // Récupère la réponse, la convertie en JSON
            .then(response => response.json())

            // Crée les paires clé/valeur dans l'objet
            .then(data => {
                const entries = Object.entries(data)
                entries.forEach(([key, value]) => {
                    this[key] = value
                })
            })

            // Traite l'erreur le cas échéant
            .catch(err => console.error(err))
    }
}

const herve = new Profile('profile.json')
console.log(herve.presentation)








class Formation {
    constructor(titre, annee) {
        this.titre = titre
        this.annee = annee
    }

    afficher() {
        const section = document.getElementById('formations')
        section.innerHTML += `
            <h2>${this.titre}</h2>
            <p>${this.annee}</p>
            `
    }
}


class Experience {
    constructor(poste, etablissement, fonctions, periode) {
        this.poste = poste
        this.etablissement = etablissement
        this.fonctions = fonctions
        this.periode = periode
    }

    afficher() {
        const section = document.getElementById('experiences')
        section.innerHTML += `
            <h2>${this.poste}</h2>
            <p>${this.etablissement}</p>
            <p>${this.fonctions.join('\n')}</p>
            <p>${this.periode}</p>
            `
    }
}

// ========= MAIN =============================================================
// Récupère les données du profil dans le fichier.json
// fetch('profile.json')
//     .then(response => response.json())  // Attention : Si utilisation d'accolades, return obligatoire
//     .then(data => {

//         data.formations.forEach(formation => {
//             new Formation(formation.titre, formation.annee).afficher()
//         })

//         data.experiences.forEach(experience => {
//             new Experience(experience.poste, experience.etablissement, experience.fonctions, experience.periode).afficher()
//         });
//     })
//     .catch(err => console.error(err))


// const formations = profile.formations
// console.log(formations)
