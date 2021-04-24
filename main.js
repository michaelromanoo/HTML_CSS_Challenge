const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", responsiveMenu);

function responsiveMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
