// Button Code to close Responses

const responseOne = document.querySelector('.question-one-response');
document.querySelector('.button-one').addEventListener('click', closeQuestionOne);

function closeQuestionOne() {
    responseOne.classList.toggle('hidden')
}