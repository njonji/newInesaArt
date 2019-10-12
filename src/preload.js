const logo = document.querySelectorAll("#preload-logo path");
const preloader = document.querySelector("#preloader");
const linkovi = document.querySelectorAll(".stopme");


window.onload = function() {
    if(!sessionStorage.getItem("dontLoad") == null) {
        preloader.classList.add("preloader--hidden");
        console.log("hhheeh")
    }
}

