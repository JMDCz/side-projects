// Storing Modal into variable
const modalInterface = document.querySelector('.main-modal-interface');

// Button to toggle Modal display
const toggleModalButton = document.querySelector('.open-modal');

toggleModalButton.addEventListener('click', toggleModal)

function toggleModal() {
    modalInterface.classList.toggle('hidden')
}