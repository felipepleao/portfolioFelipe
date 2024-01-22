const menu = document.querySelector("[data-menu]");
const iconMenu = document.querySelectorAll(".iconMenu");
const icon3 = document.querySelector(".icon3");

function transformIcon() {
  iconMenu.forEach((icon) => {
    icon.classList.toggle("change");
  });

  icon3.style.width = "30px";
}

menu.addEventListener("click", transformIcon);