import "./dark-mode.js"  // Mode sombre
import {loadProfile, ajouterPhotoTitre, ajouterAPropos, ajouterFormation, ajouterExperience} from './profile.js'  // Profil

// Fonctions

// ========= MAIN =============================================================
async function main() {
    // Charge le profil
    const profil = await loadProfile('data/profile.json')
    console.log('profil', profil)

    // Complète le profil du header et la section A propos
    const aPropos = profil.aPropos
    ajouterPhotoTitre(aPropos)
    ajouterAPropos(aPropos)

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


