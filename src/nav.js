
const nav = document.querySelector("#navbar");
const whitenav = document.querySelector("#whitenavbar");

/* QUERYS FOR XS DEVICE NAV */

const secondToggler = document.querySelector(".navigation__button")
const secondBarOne = document.querySelector(".secondbar1")
const secondBarTwo = document.querySelector(".secondbar2")
const secondBarTre = document.querySelector(".secondbar3")

const secondaryNav = document.querySelector(".navigation")
const secondaryNavBcg = document.querySelector(".navigation__background")
const secondaryNavNavEl = document.querySelector(".navigation__nav")

/* QUERYS FOR XS DEVICE NAV END */


window.onscroll = function() {
    if(window.scrollY >= 150) {
       nav.classList.add("nodisplay") 
       whitenav.classList.remove("nodisplay")
       whitenav.classList.add("fromTop")
    }  else {
        nav.classList.remove("nodisplay") 
        whitenav.classList.remove("fromTop")
        whitenav.classList.add("nodisplay")
    }
} 


 /*  OPENING AND CLOSING NAV ELEMENT AND CHANGING TOGGLE ICON */

 secondToggler.addEventListener("click", e => {
    secondBarOne.classList.toggle("change1")
    secondBarTwo.classList.toggle("change2")
    secondBarTre.classList.toggle("change3")

    secondaryNavBcg.classList.toggle("navigation__background--onClick")
    secondaryNavNavEl.classList.toggle("navigation__nav--onClick")
})

/*  SHOWING NAV ON SCREEN */
function stickyNav() {
  if(window.scrollY >= 150) {
    secondaryNav.classList.add("showSecondNav")
    nav.classList.add("nodisplayXS") 
  } else {
    secondaryNav.classList.remove("showSecondNav")
    nav.classList.remove("nodisplayXS") 
    
  }
}

/* CLOSING NAV AFTER CLICKING ON ANY LINK OR WINDOW */

window.addEventListener("click", e=> {
  if(e.target.tagName === "NAV" || e.target.tagName === "A") {
    secondaryNavBcg.classList.remove("navigation__background--onClick")
    secondaryNavNavEl.classList.remove("navigation__nav--onClick")
    secondBarOne.classList.remove("change1")
    secondBarTwo.classList.remove("change2")
    secondBarTre.classList.remove("change3")
  }
})
window.addEventListener("scroll", stickyNav);
/* SECOND NAVIGATION LOGIC  END*/