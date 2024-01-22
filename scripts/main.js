const hamb = document.querySelector(".hamb");
const ul = document.querySelector('.list');

hamb.addEventListener("click", () => {
  ul.classList.toggle("active");
});
