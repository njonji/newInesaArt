
import "./nav"
import "./modal"
import jump from 'jump.js'


let button = document.querySelector("#smoothStory")


button.addEventListener("click", () => {
    jump(".information__prvi")
})
