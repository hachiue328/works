// menu

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('open');
});

closeButton.addEventListener('click', function() {
    menu.classList.remove('open');
});



//page top

const pagetop = document.querySelector('.pagetop');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 300) {
        pagetop.classList.add('pagetop-show');
    } else {
        pagetop.classList.remove('pagetop-show');
    }
});



//instyle

const upElements = document.querySelectorAll('.in');

window.addEventListener('scroll', function() {
    upElements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight * 0.8) {
            element.classList.add('instyle');
        }
    });
});
