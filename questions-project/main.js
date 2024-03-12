// Button Code to close Responses

const responseOne = document.querySelector('.question-one-response');
document.querySelector('.button-one').addEventListener('click', closeQuestionOne);

function closeQuestionOne() {
    responseOne.classList.toggle('hidden')
}

const responseTwo = document.querySelector('.question-two-response');
document.querySelector('.button-two').addEventListener('click', closeQuestionTwo);

function closeQuestionTwo() {
    responseTwo.classList.toggle('hidden')
}

const responseThree = document.querySelector('.question-three-response');
document.querySelector('.button-three').addEventListener('click', closeQuestionThree);

function closeQuestionThree() {
    responseThree.classList.toggle('hidden')
}