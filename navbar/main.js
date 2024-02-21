//Button Event Listener

const dropdownLinks = document.querySelector('hidden')

document.querySelector('.nav-button'),addEventListener('click', showDropdown);

function showDropdown() {
    dropdownLinks.classList.toggle('hidden')
}