
window.setInterval(changeSlide, 3000);
let currentSlide = 0;

function changeSlide() {
  let slides = document.querySelectorAll(".slide");

  let lastSlide = currentSlide;
  currentSlide++;

  if (lastSlide < 0) {
    lastSlide = slides.length - 1;
  }
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides[lastSlide].classList.toggle("show");
  slides[currentSlide].classList.toggle("show");
