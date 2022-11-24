'use strict';


let brandDark = document.querySelector('.brandDark');
let headerTabs = document.querySelector('.headerTabs');
let menuClose = document.querySelector('.menuClose');

function toggleMenu(){
    brandDark.classList.toggle('hidden');
}

headerTabs.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);