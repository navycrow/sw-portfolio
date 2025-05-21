/** Profil
 * 
 */

import loadJson from "./json.js"

// Charge le profil
export const profil = await loadJson('data/profile.json')
console.log('profil', profil)


export function ajouterPhotoTitre(aPropos) {
    const photo = document.getElementById('photo')
    photo.src = aPropos.photo
    photo.alt = `${aPropos.prenom} ${aPropos.nom}`
    photo.style.borderRadius = '50%'

    const titre = document.getElementById('titre')
    titre.innerHTML = `
        <h3>${aPropos.prenom} ${aPropos.nom}</h3>
        <p>${aPropos.poste}</p>  
    `
}

/** Ajoute une section A propos
 * 
 * @param {object} aPropos - section aPropos
 */
export function ajouterAPropos(aPropos) {
    const section = document.getElementById('a-propos')
    section.innerHTML += `
        <img src="${aPropos.photo}" alt="${aPropos.prenom} ${aPropos.nom}" style="border-radius: 50%; width: 50%"/>
        <h3>${aPropos.prenom} ${aPropos.nom}</h3>
        <h4>${aPropos.poste}</h4>
        <p>${aPropos.presentation}</p>
        <p>Suivez-moi</p>
        <div class="social-networks"> 
            <a href="${aPropos.linkedin}">
                <img src="assets/img/linkedin/linkedin-black.png" width="25" />
            </a>
            <a href="${aPropos.github}">
                <img src="assets/img/github/github-mark-black.png" width="25" />
            </a>        
        </div>
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


