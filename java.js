console.log("hello")

var hamburgerMenu = document.querySelector(".hamburger");

function hamburgerOpen(){
    let Hamburger = document.querySelector("nav");
    Hamburger.classList.toggle("hamburgerOpen");
}

hamburgerMenu.addEventListener("click", hamburgerOpen);