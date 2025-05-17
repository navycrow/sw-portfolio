import "./dark-mode.js"

// Fonctions

/** Charge un profil au format JSON
 * 
 * @param {string} path - Chemin du fichier JSON contenant le profil
 * @returns Données
 */
async function loadProfile(path) {
    try {
        const response = await fetch(path)
        // console.log(response)
        const json = await response.json()
        // console.log(json)
        return json
    }

    catch (err) {
        console.error(err)
    }
}


// ============================================================================
function ajouterAPropos(prenom, nom, photo, poste, presentation) {
    const section = document.getElementById('a-propos')
    section.innerHTML += `
        <img src="${photo}" alt="photo">
        <h3>${prenom} ${nom}</h3>
        <p>${poste}</p>
        <p>${presentation}</p>
    `
}

function ajouterFormation(formation) {
    const section = document.getElementById('formations')
    section.innerHTML += `
        <div class="formation">
            <h3>${formation.titre}</h3>
            <p>${formation.annee}</p>
        </div>
    `
}

function ajouterExperience(experience) {
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





// ========= MAIN =============================================================
async function main() {
    // Charge le profil
    const profil = await loadProfile('data/profile.json')
    console.log(profil)

    // Complète la section A propos
    const aPropos = profil.aPropos
    ajouterAPropos(aPropos.prenom, aPropos.nom, aPropos.photo, aPropos.poste, aPropos.presentation)

    // Complète la section Formations
    const formations = profil.formations
    formations.forEach(formation => {
        ajouterFormation(formation)
    });

    // Complète la section Expérience
    const experiences = profil.experiences
    experiences.forEach(experience => {
        ajouterExperience(experience)
    });    



}

main()

const darklightBtn = document.getElementById('darklight-btn')
darklightBtn.addEventListener('click', (e) => {
    document.getElementById('dark-icon').classList.toggle('hidden')
    document.getElementById('light-icon').classList.toggle('hidden')
    document.body.classList.toggle('dark')
    
})

