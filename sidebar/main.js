// Toggle Button

const toggleSidebar = document.querySelector('.hidden');

document.querySelector('.toggle-sidebar').addEventListener('click', displaySidebar);

function displaySidebar() {
    toggleSidebar.classList.toggle('hidden')
}


// Closing Sidebar Button

const closeSidebar = document.querySelector('.hidden');

document.querySelector('.close-sidebar').addEventListener('click', displaySidebar);

function displaySidebar() {
    toggleSidebar.classList.toggle('hidden')
}