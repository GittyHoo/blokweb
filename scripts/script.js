var deButton = document.querySelector("nav");

deButton.addEventListener("click", openMenu);

function openMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("openMenu");
}
