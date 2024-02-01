//Simple Array to holder 10 colours

let colours = ["green", "red", "rgba(133,122,200)", "#F15025"];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function() {
    // get a random number between 0 -3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}