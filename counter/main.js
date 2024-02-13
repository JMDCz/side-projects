//Increase 
document.querySelector('.increase').addEventListener('click', increase);
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.decrease').addEventListener('click', decrease);

let counter = 0

function increase() {
    //define value holder variable
    //increment a variable by 1 each time we increment
    //use variable as the innerText for .incrementValue
    counter++;
    document.querySelector('.incrementValue').innerText = counter;
}

function reset() {
    let resetValue = 0
    counter = resetValue
    document.querySelector('.incrementValue').innerText = resetValue
}

function decrease() {
    counter--;
    document.querySelector('.incrementValue').innerText = counter
}