import "./main.scss"
import "./nav"
import "./modal"
import jump from 'jump.js'

/* Gallery LOGIC */

const currentHome = document.querySelector("#current");
const imgsHome = document.querySelectorAll(".images__image");
const opacity = 0.6;
imgsHome.forEach(img =>  img.addEventListener("click", imgClickHome));

//Set first img opacity to active
imgsHome[0].style.opacity = opacity;
function imgClickHome(e) {

    //Reset opacity
    imgsHome.forEach(imgHome => (imgHome.style.opacity = 1));

    //Change current image with clicked
   currentHome.src = e.target.src;

    //Add fade in class
   currentHome.classList.add("fade-in");

    //Remove fade in class after .3s
   setTimeout(() => currentHome.classList.remove("fade-in"),500)

   //Change opacity on clicked image

   e.target.style.opacity = opacity;
}


/* Smooth Scroll Logic */

let button = document.querySelector(".smoothBtn")
let button2 = document.querySelector(".home__arrow-down")

button.addEventListener("click", () => {
    jump("#storyone")
})
button2.addEventListener("click", () => {
    jump("#storyone")
})






























