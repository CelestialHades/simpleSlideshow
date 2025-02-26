// 1. Get DOM elements
const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByClassName('slide');

// 2. Initialize slideshow state
let currentSlide = 0;
let intervalId = null;

// 3. Function to show a specific slide
function showSlide(index) {
  // 4. Ensure index stays within bounds
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  
  // 5. Update active slide
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  slides[index].classList.add('active');
  currentSlide = index;
}

// 6. Function to go to the next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// 7. Function to go to the previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// 8. Auto-advance slideshow
function startSlideshow() {
  intervalId = setInterval(nextSlide, 3000); // Every 3 seconds
}

// 9. Stop slideshow (for manual control)
function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
}

// 10. Event listeners for manual control
slideshow.addEventListener('mouseover', stopSlideshow);
slideshow.addEventListener('mouseout', startSlideshow);

// 11. Start the slideshow on load
startSlideshow();
showSlide(currentSlide);