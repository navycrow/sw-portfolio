/** Gestion du mode sombre via un bouton
 * -------------------------------------
 * Inclure dans la page HTML : <button id="dark-mode-btn" class="icon"></button>
 * 
 */


// Récupération du bouton mode sombre
const darkModeBtn = document.getElementById('dark-mode-btn')


/** Récupère les dimensions de l'icône depuis le fichier CSS
 * 
 * @param {string} selectorText - sélecteur CSS de l'icône
 * @returns 
 */
export function getIconSizeFromCSS(selectorText) {
    const iconSize = {}

    // Lit toutes les feuilles de styles du document
    const sheets = document.styleSheets
    for (const sheet of sheets) {

        // Pour chaque feuille, récupère les règles CSS
        const rules = sheet.cssRules
        for (const rule of rules) {

            // Si la règle correspondante est trouvée,
            // récupère les propriétés demandées
            // (si plusieurs identiques, les dernières écrasent les premières)
            if (rule.selectorText === selectorText) {
                if (rule.style.width) iconSize.width = rule.style.width 
                if (rule.style.height) iconSize.height = rule.style.height
            }
        }
    }

    console.log('Icon size from CSS', iconSize.width, iconSize.height)
    return iconSize
}

const iconSize = getIconSizeFromCSS('.icon')


// Modification du style du bouton
const style = darkModeBtn.style
const defaultSize = '32px'  // Dimensions par défaut si rien dans le CSS

style.width = iconSize.width || defaultSize
style.height = iconSize.height || defaultSize
style.lineHeight = style.height  // permet d'aligner verticalement lorsque height=lineHeight
style.fontSize = style.height
style.textAlign = 'center'
style.background = 'none'
style.border = 'none'
style.cursor = 'pointer'
style.color = 'inherit'  // hérite de la couleur du parent


/** Active/Désactive le mode sombre
 * 
 * @param {boolean} darkMode - Default: true
 */
export function applyDarkMode(darkMode=true) {
    console.log('Dark mode :', darkMode, typeof darkMode)

    // Applique le mode et change l'icône du bouton
    if (darkMode) {
        document.documentElement.classList.add('dark')
        darkModeBtn.innerText = '☀︎'
    } else {
        document.documentElement.classList.remove('dark')
        darkModeBtn.innerText = '⏾'
    }
}


// Au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Récupère le mode courant depuis le localstorage, clair par défaut
    const darkMode = JSON.parse(localStorage.getItem('darkMode')) || false

    // et l'applique
    applyDarkMode(darkMode)
})


// Sur clic du bouton
darkModeBtn.addEventListener('click', () => {   
    // Récupère le mode actuel depuis la classe de l'élément racine (HTML)
    const isDark = document.documentElement.classList.contains('dark')
    
    // Inverse alors le mode et l'enregistre dans le localStorage
    const darkMode = !isDark
    localStorage.setItem('darkMode', JSON.stringify(darkMode))

    // et l'applique
    applyDarkMode(darkMode)
})
