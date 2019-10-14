
import "./nav"
import "./gallery"
import "./modal"
import jump from 'jump.js'


let button = document.querySelector("#smoothGal")


button.addEventListener("click", () => {
    jump("#rowToS")
})

