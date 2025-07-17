const slider = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let idx = 0;
let intervalId = null;
const totalImages = images.length;

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

function showNext() {
    idx = (idx + 1) % totalImages;
    slider.style.transform = `translateX(-${idx * 400}px)`;
}

function showPrev() {
    idx = (idx - 1 + totalImages) % totalImages;
    slider.style.transform = `translateX(-${idx * 400}px)`;
}

function startSlider() {
  if (!intervalId) {
    intervalId = setInterval(showNext, 1500); 
  }
}

function stopSlider() {
  clearInterval(intervalId);
  intervalId = null;
}

nextBtn.addEventListener("click", () => {
  stopSlider();
  showNext();
});

prevBtn.addEventListener("click", () => {
  stopSlider();
  showPrev();
});

playBtn.addEventListener("click", startSlider);
pauseBtn.addEventListener("click", stopSlider);

window.onload = function () {
    startSlider();
}