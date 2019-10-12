const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".images__image");
const opacity = 0.6;


imgs.forEach(img =>  img.addEventListener("click", imgClick));

//Set first img opacity to active
imgs[0].style.opacity = opacity;

function imgClick(e) {

    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current image with clicked
   current.src = e.target.src;

    //Add fade in class
   current.classList.add("fade-in");

    //Remove fade in class after .3s
   setTimeout(() => current.classList.remove("fade-in"),500)

   //Change opacity on clicked image

   e.target.style.opacity = opacity;
}