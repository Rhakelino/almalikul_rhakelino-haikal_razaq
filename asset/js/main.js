const hamburgerMenu = document.querySelector('.hamburger-menu');
const ul = document.getElementById('main-nav');
const navItems = document.querySelectorAll('.nav-items');

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
    ul.classList.toggle('active');
})

navItems.forEach(function (e) {
    e.addEventListener('click', function () {
        hamburgerMenu.classList.remove('active');
        ul.classList.remove('active');
    })
})