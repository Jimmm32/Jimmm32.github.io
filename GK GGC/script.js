const seasonImgs = document.querySelectorAll('.season-img img');
const seasonBgs = document.querySelectorAll('.season-bg');
let timer; 

let currentIndex = 0;


showSeason(currentIndex);


function showSeason(index) {

    seasonBgs.forEach(seasonBg => {
        seasonBg.style.display = 'none';
    });

    seasonBgs[index].style.display = 'block';

    currentIndex = index;

    seasonImgs.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function nextSeason() {
    currentIndex = (currentIndex === seasonBgs.length - 1) ? 0 : currentIndex + 1;
    showSeason(currentIndex);
}

function startSlider() {
    timer = setInterval(nextSeason, 3000); 
}

function stopSlider() {
    clearInterval(timer);
}

startSlider();


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("season-bg");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenuClose = document.getElementById('mobile-menu-close');
    var navbarMobile = document.querySelector('.navbar-mobile');
    var shoppe = document.getElementById('shop-button2');
    var headerWrapper = document.querySelector('.header-wrapper');
    var descriptionButton = document.getElementById('description-button');
    var contactButton = document.getElementById('contact-button');
    var aboutUsButton = document.getElementById('about-us-button');
    var aboutUsButton2 = document.getElementById('about-us-button2');
    var summer = document.getElementById('summer-update');
    var winter = document.getElementById('winter-update');
    var spring = document.getElementById('spring-update');
    var autumn = document.getElementById('autumn-update');
    var shopButton = document.getElementById('shop-button');
    var shopButton2 = document.getElementById('shop-button2');
    var winterButton = document.getElementById("winter-update");
    var summerButton = document.getElementById("summer-update");
    var autumnButton = document.getElementById("autumn-update");

    winterButton.disabled = true;
    summerButton.disabled = true;
    autumnButton.disabled = true;

    var isMenuToggled = false;

    mobileMenuToggle.addEventListener('click', function () {

        mobileMenuToggle.style.display = 'none';
        mobileMenuClose.style.display = 'block';
        navbarMobile.style.display = 'block';
        shoppe.style.display = 'block';

        headerWrapper.style.paddingBottom = '30px';
        headerWrapper.style.paddingTop = '20px';
        isMenuToggled = true;
    });

    mobileMenuClose.addEventListener('click', function () {
 
        mobileMenuToggle.style.display = 'block';
        mobileMenuClose.style.display = 'none';
        navbarMobile.style.display = 'none';
        shoppe.style.display = 'none';

        headerWrapper.style.paddingBottom = '0';
        headerWrapper.style.paddingTop = '0';
        isMenuToggled = false;
    });

    //REDIRECT OF LINKS
    descriptionButton.addEventListener('click', function () {
        window.location.href = 'new-breeds.html';
    });

    contactButton.addEventListener('click', function (){
        window.location.href = 'learnmore.html';
    });

    aboutUsButton.addEventListener('click', function() {
        window.location.href = 'learnmore.html';
    });

    aboutUsButton2.addEventListener('click', function() {
        window.location.href = 'learnmore.html';
    });

    summer.addEventListener('click', function(){
        window.location.href = 'updates.html';
    });

    winter.addEventListener('click', function(){
        window.location.href = 'updates.html';
    });

    spring.addEventListener('click', function(){
        window.location.href = 'updates.html';
    });

    autumn.addEventListener('click', function(){
        window.location.href = 'updates.html';
    });

    shopButton.addEventListener('click', function(){
        window.location.href = 'shop.html';
    });

    shopButton2.addEventListener('click', function(){
        window.location.href = 'shop.html';
    });
});





