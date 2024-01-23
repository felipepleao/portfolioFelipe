export default function menuResponsive() {
  const menu = document.querySelector("[data-menu]");
  const iconMenu = document.querySelectorAll(".iconMenu");
  const navbarList = document.querySelector(".header__navbar-list");

  function transformIcon() {
    iconMenu.forEach((icon) => {
      icon.classList.toggle("change");
    });
    navbarList.classList.toggle("active");
  }
  menu.addEventListener("click", transformIcon);
}
