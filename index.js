const breakWidth = 768
const classNav = ".bandeau_nav"
const classBurgerButton = ".bandeau_burger"
const classBackButton = ".bandeau_nav-back-button"

const elBurger = document.querySelector(classBurgerButton)
const elBack = document.querySelector(classBackButton)

window.addEventListener("resize", () => listenWidth(classNav, breakWidth))
elBurger.addEventListener("click", () => displayMenu(classNav, "flex"))
elBack.addEventListener("click", () => displayMenu(classNav, "none"))

function displayMenu (className, mode) {
    document.querySelector(className).style.display = mode
}

function listenWidth (className, breakWidth) {
    if (window.innerWidth > breakWidth) displayMenu (className, "")
}
