const btn = document.getElementById('burger-menu')
const menu = document.getElementById('menu')

export function toggleMenu() {
    const menu = document.getElementById('menu')

}




btn.addEventListener('click', (e) => {
    const isVisible = menu.checkVisibility()
    console.log('Menu visible', isVisible, '=>', !isVisible);

    if (isVisible) {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})


menu.addEventListener('click', (e) => {
    menu.style.display = 'none'
})

document.addEventListener('click', (e) => {
    console.log(menu, e.target)
    
})