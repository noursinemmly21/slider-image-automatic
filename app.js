let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const maxSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

function updateSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
        slide.style.display = 'block';
    } else {
        slide.style.display = 'none';
    }
  });
  
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % maxSlides;
 
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
  updateSlide();
}

function dotClick() {
  const dotIndex = Array.from(dots).indexOf(this);
  currentSlide = dotIndex;
  updateSlide();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
dots.forEach(dot => dot.addEventListener('click', dotClick));

updateSlide();
setInterval(nextSlide, 5000);
