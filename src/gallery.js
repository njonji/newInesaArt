const current = document.querySelector("#current--1");
const current2 = document.querySelector("#current--2");
const current3 = document.querySelector("#current--3");
const current4 = document.querySelector("#current--4");

const imgs = document.querySelectorAll(".images__image--1");
const imgs2 = document.querySelectorAll(".images__image--2");
const imgs3 = document.querySelectorAll(".images__image--3");
const imgs4 = document.querySelectorAll(".images__image--4");


imgs.forEach(img =>  img.addEventListener("click", imgClick));
imgs2.forEach(img =>  img.addEventListener("click", imgClick2));
imgs3.forEach(img =>  img.addEventListener("click", imgClick3));
imgs4.forEach(img =>  img.addEventListener("click", imgClick4));

const opacity = 0.6;


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

function imgClick2(e) {

    //Reset opacity
    imgs2.forEach(img2 => (img2.style.opacity = 1));

    //Change current image with clicked
   current2.src = e.target.src;

    //Add fade in class
   current2.classList.add("fade-in");

    //Remove fade in class after .3s
   setTimeout(() => current2.classList.remove("fade-in"),500)

   //Change opacity on clicked image

   e.target.style.opacity = opacity;
}
function imgClick3(e) {

    //Reset opacity
    imgs3.forEach(img3 => (img3.style.opacity = 1));

    //Change current image with clicked
   current3.src = e.target.src;

    //Add fade in class
   current3.classList.add("fade-in");

    //Remove fade in class after .3s
   setTimeout(() => current3.classList.remove("fade-in"),500)

   //Change opacity on clicked image

   e.target.style.opacity = opacity;
}
function imgClick4(e) {

    //Reset opacity
    imgs4.forEach(img4 => (img4.style.opacity = 1));

    //Change current image with clicked
   current4.src = e.target.src;

    //Add fade in class
   current4.classList.add("fade-in");

    //Remove fade in class after .3s
   setTimeout(() => current4.classList.remove("fade-in"),500)

   //Change opacity on clicked image

   e.target.style.opacity = opacity;
}



/* 
 const logost = document.querySelectorAll(".preload__shop path")

 for(let i = 0; i<logost.length; i++) {
     console.log(`Ketter ${i} is ${logost[i].getTotalLength()}`)
 }
 
 */