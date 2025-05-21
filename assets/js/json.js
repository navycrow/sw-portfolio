/** Charge un profil au format JSON
 * 
 * @param {string} path - Chemin du fichier JSON contenant le profil
 * @returns Données
 */
export default async function loadJson(path) {
    try {
        const response = await fetch(path)
        const json = await response.json()
        return json
    }

    catch (err) {
        console.error(err)
    }
}