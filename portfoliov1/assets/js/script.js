import "./dark-mode.js"  // Mode sombre
import "./burger-menu.js"  // Menu burger
// import loadJson from "./json.js"
import { profil, ajouterPhotoTitre, ajouterAPropos, ajouterFormation, ajouterExperience} from './profile.js'  // Profil

// Fonctions

// ========= MAIN =============================================================
async function main() {
    // Charge le profil
    // const profil = await loadJson('data/profile.json')
    // console.log('profil', profil)

    // Complète le profil du header et la section A propos
    const aPropos = profil.aPropos
    ajouterPhotoTitre(aPropos)

    const url = new URL(location)
    console.log(url)

    // Complète la section A propos
    if (url.pathname.endsWith('index.html')) ajouterAPropos(aPropos)


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


