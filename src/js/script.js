// Выпадающее меню

const menu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.header__menu');
const menuCloseBtn = document.querySelector('.menu__close');

menuOpenBtn.addEventListener('click', (e) => {
        menu.classList.add('menu__open');
});

menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('menu__open');
});



// Поле поиска

const search = document.querySelector('.search');
const searchOpen = document.querySelector('.header__search');
const searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', (e) => {
        search.classList.add('search__open');
});

searchClose.addEventListener('click', (e) => {
        search.classList.remove('search__open');
});



// Слайдер

const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_left');
const next = document.querySelector('.slider__arrow_right');
const sliderNumber = document.querySelector('.slider__number');
const sliderProgress = document.querySelector('.slider__progress');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
        if (n > slides.length) {
                slideIndex = 1;
                sliderProgress.style.width = `33%`;
        }

        if (n < 1) {
                slideIndex = slides.length;
                sliderProgress.style.width = `100%`;
        }

        if (n == 1) {
                sliderProgress.style.width = `33%`;
        } else if (n == 2) {
                sliderProgress.style.width = `66%`;
        } else if (n == 3) {
                sliderProgress.style.width = `100%`; 
        }

        slides.forEach(item => item.classList.add('slider__hide'));

        slides[slideIndex - 1].classList.remove('slider__hide');

        sliderNumber.textContent = `0${slideIndex}`;
};

function plusSlides(n) {
        showSlides(slideIndex += n);
};

prev.addEventListener('click', () => {
        plusSlides(-1);
});

next.addEventListener('click', () => {
        plusSlides(1);
});