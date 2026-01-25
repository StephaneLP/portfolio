/////////////////////////////////////////////////////
// Paramètres : Carousel & Éléments du DOM
/////////////////////////////////////////////////////

const arrCarousel = [
    {
        url: "/assets/img/carousel/carrousel2.jpg",
        titre: "Vous êtes soucieux de l'environnement",
        SousTitre: "Énergie bas carbone - Informatique GreenIt",
    },
    {
        url: "/assets/img/carousel/carrousel1.jpg",
        titre: "Vous cherchez un espace de travail convivial",
        SousTitre: "Bureaux en open space ou privatifs",
    },
    {
        url: "/assets/img/carousel/carrousel3.jpg",
        titre: "Vous cherchez une salle de réunion",
        SousTitre: "Équipement moderne - Vidéoprojecteur",
    },
]

const period = 5000

const elCarousel = document.querySelector(".carousel")
const elBtnPrev = document.querySelector(".carousel_btnPrev")
const elBtnNext = document.querySelector(".carousel_btnNext")
const elTitle = document.querySelector(".carousel_infos-title")
const elSubTitle = document.querySelector(".carousel_infos-subtitle")
const elNav = document.querySelector(".carousel_nav")
const elNavSlideLink = "carousel_nav-slideLink"
const elNavActive = "carousel_nav-active"

/////////////////////////////////////////////////////
// Traitement JavaScript
/////////////////////////////////////////////////////

let counter = 0, max = 0, timer = null

function initCarousel() {
    counter = 0
    max = arrCarousel.length - 1

    for (let i =0; i <= max; i++) {
        elNav.appendChild(addSlideLink(elNavSlideLink + i))
        document.getElementById(elNavSlideLink + i).addEventListener("click", () => changeImage(i, "nav"))
    }

    changeImage(0, "nav")
}

function changeImage (id, mode) {
    if (mode === "nav") {
        counter = id
    }
    else {
        counter += id
        if (counter < 0) counter = max
        if (counter > max) counter = 0
    }

    const arrSliders = document.querySelectorAll("." + elNavSlideLink)
    arrSliders.forEach ((el) => {
        el.classList.remove(elNavActive)
    })

    const elSlider = document.getElementById(elNavSlideLink + counter)
    elSlider.classList.add(elNavActive)

    if (mode !== undefined) {
        clearInterval(timer)
        timer = setInterval(() => changeImage (1), period)
    }

    elCarousel.style.backgroundImage = `url(${arrCarousel[counter].url})`
    elTitle.innerHTML = arrCarousel[counter].titre
    elSubTitle.innerHTML = arrCarousel[counter].SousTitre
}

const addSlideLink = (id) => {
    let el = document.createElement("button")

    el.id = id
    el.className = elNavSlideLink

    return el
}

window.addEventListener("load", initCarousel)
elBtnPrev.addEventListener("click", () => changeImage(-1, "btn"))
elBtnNext.addEventListener("click", () => changeImage(1, "btn"))
