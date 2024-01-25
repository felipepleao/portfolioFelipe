export default function scrollAnimation() {
  const elements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}
