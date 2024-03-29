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



// Выпадающий список статей

const articleBtnLoadAll = document.querySelector('.articles__button');
const articlesBlock = document.querySelector('.articles__block');

articleBtnLoadAll.addEventListener('click', () => {
        if (articlesBlock.classList.contains('articles__show')) {
                articlesBlock.classList.remove('articles__show');
                articleBtnLoadAll.textContent = `ЗАГРУЗИТЬ ЕЩЕ`;
        } else if (!articlesBlock.classList.contains('articles__show')) {
                articlesBlock.classList.add('articles__show');
                articleBtnLoadAll.textContent = `СКРЫТЬ`;
        }
});

// Выпадающий список колонки экспертов

const columnBtnLoadAll = document.querySelector('.column__button');
const columnBlock = document.querySelector('.column__block');

columnBtnLoadAll.addEventListener('click', () => {
        if (columnBlock.classList.contains('column__show')) {
                columnBlock.classList.remove('column__show');
                columnBtnLoadAll.textContent = `ЗАГРУЗИТЬ ЕЩЕ`;
        } else if (!columnBlock.classList.contains('column__show')) {
                columnBlock.classList.add('column__show');
                columnBtnLoadAll.textContent = `СКРЫТЬ`;
        }
});

// Выпадающий список вопросов

const questBtnLoadAll = document.querySelector('.quest__button');
const questBlock = document.querySelector('.quest__block');

questBtnLoadAll.addEventListener('click', () => {
        if (questBlock.classList.contains('quest__show')) {
                questBlock.classList.remove('quest__show');
                questBtnLoadAll.textContent = `ДРУГИЕ ВОПРОСЫ`;
        } else if (!questBlock.classList.contains('quest__show')) {
                questBlock.classList.add('quest__show');
                questBtnLoadAll.textContent = `СКРЫТЬ`;
        }
});

