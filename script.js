const hamburgerBtn = document.getElementById('hamburger-icon');
const menuDropdown = document.querySelector('.navbar-links-container');
const navbarLinks = document.querySelectorAll('.navbar-anchor');

const expandOrHideMenu = () => {
    menuDropdown.classList.contains('hidden') ? menuDropdown.classList.remove('hidden') : menuDropdown.classList.add('hidden');
}

hamburgerBtn.addEventListener('click', e => {
    expandOrHideMenu();
})

hamburgerBtn.addEventListener('focusout', e => {
    expandOrHideMenu();
})

navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
        menuDropdown.classList.add('hidden');
    })
})