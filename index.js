document.addEventListener("DOMContentLoaded", function () {
  const salesButtons = document.querySelectorAll(
    "[sales-data-carousel-button]"
  );

  salesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[sales-data-carousel]")
        .querySelector("[sales-data-slides]");

      const activeSlide = slides.querySelector("[sales-data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      activeSlide.removeAttribute("sales-data-active");
      slides.children[newIndex].setAttribute("sales-data-active", "");
    });
  });

  const recomendedButtons = document.querySelectorAll(
    "[recomended-data-carousel-button]"
  );

  recomendedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[recomended-data-carousel]")
        .querySelector("[recomended-data-slides]");

      const activeSlide = slides.querySelector("[recomended-data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      activeSlide.removeAttribute("recomended-data-active");
      slides.children[newIndex].setAttribute("recomended-data-active", "");
    });
  });
});
