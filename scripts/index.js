const menu = document.querySelector("[data-menu]");
const iconMenu = document.querySelectorAll(".iconMenu");
const icon3 = document.querySelector(".icon3");
const navbarList = document.querySelector(".header__navbar-list")

function transformIcon() {
  iconMenu.forEach((icon) => {
    icon.classList.toggle("change");
  });

  icon3.style.width = "30px";
  navbarList.classList.toggle("active")
}

menu.addEventListener("click", transformIcon);
