// Toggle Button

const toggleSidebar = document.querySelector('.hidden');

document.querySelector('.toggle-sidebar').addEventListener('click', displaySidebar);

function displaySidebar() {
    toggleSidebar.classList.toggle('hidden')
}


// Closing Sidebar Button