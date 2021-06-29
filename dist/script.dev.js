"use strict";

var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu-list');
hamburger.addEventListener('click', function () {
  menu.classList.toggle('show');
});