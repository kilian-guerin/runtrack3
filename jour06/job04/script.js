'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    var nav = document.querySelector('nav');
    var burger = document.querySelector('.fa-solid');

    burger.addEventListener('click',showHideMenu)

    function showHideMenu(){
       nav.classList.toggle('active')
    //    nav.style.style.color = "red"

    }

})