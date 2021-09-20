"use strict";

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('menu__body_active');
    })
}

document.querySelectorAll('.nav__item-link').forEach(item => {
    item.addEventListener('click', event => {
        document.body.classList.remove('_lock');
        menuBody.classList.remove('menu__body_active');
    })
})
