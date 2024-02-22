//Button Event Listener

const dropdownLinks = document.getElementById('dropdown')

document.querySelector('.nav-button').addEventListener('click', showDropdown);

function showDropdown() {
    dropdownLinks.classList.toggle('hidden')
}