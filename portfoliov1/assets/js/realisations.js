import "./dark-mode.js"  // Mode sombre
import "./burger-menu.js"  // Menu burger
import "./profile.js"
import { loadJson } from "./json.js"

// Fonctions

// ========= MAIN =============================================================
async function main() {
    // Charge le profil
    const realisations = await loadJson('data/realisations.json')
    console.log('realisations', realisations)



}

main()

