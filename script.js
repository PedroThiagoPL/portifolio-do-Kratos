/* NavBar */

const hamburguer = document.getElementById('btn-hamburguer')
const Menu = document.getElementById('menu')

const hamburguer2 = () => {
    hamburguer.classList.toggle('active')
    menu.classList.toggle('active')
}


hamburguer.addEventListener('click', hamburguer2)

