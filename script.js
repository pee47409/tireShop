
// Hamburger
function toggleHam(x) {
    x.classList.toggle("change");
    let myMenu = document.getElementById('myMenu');
    if (myMenu.className === 'menu'){
        myMenu.className += ' menu-active'
    }else {
        myMenu.className ='menu'
    }
  }
// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto Slide
setInterval(nextSlide, 5000);
