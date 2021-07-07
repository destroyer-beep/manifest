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
