const btn = document.getElementById('burger-menu')
const menu = document.getElementById('menu')


// Evénement sur clic d'un élément du document
document.addEventListener('click', (e) => {
    console.log('Elément cliqué', e.target)
    console.log('Menu burger visible :', btn.checkVisibility())

    // Si c'est le menu burger qui est cliqué, affiche/masque le menu suivant l'état actuel
    if (e.target === btn) {

        const isVisible = menu.checkVisibility()
        console.log('Menu visible', isVisible, '=>', !isVisible);

        if (isVisible) {
            menu.style.display = 'none'
        } else {
            menu.style.display = 'block'
        }
    }

    // Si c'est un autre élément de la page, masque le menu
    else if (btn.checkVisibility()) {
        menu.style.display = 'none'
    }

})

// Evement sur redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    console.log('La fenêtre a été redimensionnée');

    // Si le menu-burger n'est présent, on masque le menu sinon on l'affiche
    if (btn.checkVisibility()) {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
});