/** Profil
 * 
 */


/** Charge un profil au format JSON
 * 
 * @param {string} path - Chemin du fichier JSON contenant le profil
 * @returns Données
 */
export async function loadProfile(path) {
    try {
        const response = await fetch(path)
        const json = await response.json()
        return json
    }

    catch (err) {
        console.error(err)
    }
}

export function ajouterProfil(aPropos) {   
    const profil = document.getElementById('profil')
    profil.innerHTML = `
        <img class="photo" src="${aPropos.photo}" alt="${aPropos.prenom} ${aPropos.nom}" style="border-radius: 50%; width=25%;"/>    
    `
}

/** Ajoute une section A propos
 * 
 * @param {string} prenom - Prénom
 * @param {string} nom - Nom
 * @param {string} photo - Chemin de la photo
 * @param {string} poste - Poste occupée
 * @param {string} presentation - Présentation
 */
export function ajouterAPropos(prenom, nom, photo, poste, presentation) {
    const section = document.getElementById('a-propos')
    section.innerHTML += `
        <img src="${photo}" alt="photo" style="border-radius: 50%; width=50%;"/>
        <h3>${prenom} ${nom}</h3>
        <p>${poste}</p>
        <p>${presentation}</p>
    `
}


export function ajouterFormation(formation) {
    const section = document.getElementById('formations')
    section.innerHTML += `
        <div class="formation">
            <h3>${formation.titre}</h3>
            <p>${formation.annee}</p>
        </div>
    `
}


export function ajouterExperience(experience) {
    const section = document.getElementById('experiences-pro')
    section.innerHTML += `
        <div class="experience">
            <h3>${experience.poste}</h3>
            <p>${experience.etablissement}</p>
            <ul>
                ${experience.fonctions.map(fonction => `<li>${fonction}</li>`).join('')}
            </ul>
            <p>${experience.periode}</p>
        </div>
    `
}

