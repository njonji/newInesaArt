var modalWrap = document.querySelector(".wrapper");
var modal = document.querySelector(".wrapper__contactForm");
var closeBtn = document.querySelector(".wrapper__contactForm--close");
var activateModal = document.querySelectorAll(".activateModal");


activateModal.forEach( btn => (btn.addEventListener("click", openModal)));
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);


function openModal() {
    modalWrap.style.display = "block";
}
function closeModal() {
    modalWrap.style.display = "none";
}
function clickOutside(e) {
    if(e.target === modalWrap) {
        modalWrap.style.display = "none";
    }
    
}