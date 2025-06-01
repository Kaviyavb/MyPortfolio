// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js for animated text
    var typed = new Typed("#animated-text", {
        strings: ["Competitive Programmer", "Software Developer", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
        showCursor: false
    });
});
// JavaScript for Animated Progress Circles
document.querySelectorAll('.progress-circle').forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.background = `conic-gradient(rgb(163, 134, 220) 0% ${percent}%, #0a1b3d ${percent}% 100%)`;
});
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.querySelector('.prev-slide').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
});

document.querySelector('.next-slide').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
});

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}