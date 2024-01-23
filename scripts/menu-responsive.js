export default function menuResponsive() {
  const menu = document.querySelector("[data-menu]");
  const iconMenu = document.querySelectorAll(".iconMenu");
  const navbarList = document.querySelector(".header__navbar-list");
  const navbarLinks = document.querySelectorAll(".header__navbar-list li");


  function transformIcon() {
    iconMenu.forEach((icon) => {
      icon.classList.toggle("change");
    });
    navbarList.classList.toggle("active");
  }

  navbarLinks.forEach((link) => {
    link.addEventListener("click", transformIcon);
  });

  menu.addEventListener("click", transformIcon);
}
