/* The code used was gotten from the udacity class on hamburger menu */
/* Opens  when menu icon is clicked */
var menu = document.querySelector('#menu');
var main = document.querySelector('body');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

/* when a user clicks  anywhere around the page, remove the open hamburger menu  */
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

