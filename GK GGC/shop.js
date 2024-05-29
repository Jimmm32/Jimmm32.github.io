function navigateTo(section) {
    window.location.href = `index.html#${section}`;
}

function addClickListener(element, section) {
    element.addEventListener('click', function() {
        navigateTo(section);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenuClose = document.getElementById('mobile-menu-close');
    var navbarMobile = document.getElementById('blocked');
    var shopButton = document.getElementById('shop-button2');
    var headerWrapper = document.querySelector('.header-wrapper');
    var goBackButton = document.getElementById('go-back');
    var goBackButton2 = document.getElementById('go-back2');
    var homeLink = document.getElementById('homes');
    var aboutLink = document.getElementById('abouts');
    var seasonLink = document.getElementById('seasons');
    var breedsLink = document.getElementById('breedss');
    var contactLink = document.getElementById('contacts');
    var homeLink2 = document.getElementById('homes2');
    var aboutLink2 = document.getElementById('abouts2');
    var seasonLink2 = document.getElementById('seasons2');
    var breedsLink2 = document.getElementById('breedss2');
    var contactLink2 = document.getElementById('contacts2');

    var isMenuToggled = false;

    mobileMenuToggle.addEventListener('click', function () {
        
        mobileMenuToggle.style.display = 'none';
        mobileMenuClose.style.display = 'block';
        navbarMobile.style.display = 'block';
        shopButton.style.display = 'block';

        headerWrapper.style.paddingBottom = '30px';
        headerWrapper.style.paddingTop = '20px';
        isMenuToggled = true;
    });

    mobileMenuClose.addEventListener('click', function () {

        mobileMenuToggle.style.display = 'block';
        mobileMenuClose.style.display = 'none';
        navbarMobile.style.display = 'none';
        shopButton.style.display = 'none';

        headerWrapper.style.paddingBottom = '0';
        headerWrapper.style.paddingTop = '0';
        isMenuToggled = false;
    });

    addClickListener(goBackButton, 'home');
    addClickListener(goBackButton2, 'home');
    addClickListener(homeLink, 'home');
    addClickListener(aboutLink, 'about-us');
    addClickListener(seasonLink, 'season');
    addClickListener(breedsLink, 'new-breeds');
    addClickListener(contactLink, 'contact-us');
    addClickListener(homeLink2, 'home');
    addClickListener(aboutLink2, 'about-us');
    addClickListener(seasonLink2, 'season');
    addClickListener(breedsLink2, 'new-breeds');
    addClickListener(contactLink2, 'contact-us');
});


// JavaScript for slider carousel
const slider = document.getElementById('slider');
const carousel = document.getElementById('vi-banner-carousel');
const slides = carousel.querySelectorAll('.fit-unit');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

// Function to move to the next slide
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
}

// Function to move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlidePosition();
}

// Function to update slide position
function updateSlidePosition() {
  const newPosition = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
}

// Event listeners for next and previous buttons
slider.addEventListener('click', (event) => {
  if (event.target.classList.contains('next')) {
    nextSlide();
  } else if (event.target.classList.contains('prev')) {
    prevSlide();
  }
});


