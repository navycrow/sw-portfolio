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


export function loadProfile2(path) {
    fetch(path)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}


