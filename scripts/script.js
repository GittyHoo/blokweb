var deButton = document.querySelector("nav");

function openMenu(event) {
  let deNav = document.querySelector("nav")
  deNav.classList.toggle("openMenu");
}

deButton.addEventListener("click", openMenu);
