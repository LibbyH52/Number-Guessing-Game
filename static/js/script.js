/* jslint browser */

const numberButton = document.querySelector('.number-button');
let tooLow = document.querySelector('div.low');
let tooHigh = document.querySelector('div.high');
let randomNumber = Math.floor(Math.random() * 100);
let info = document.querySelector('.info');
let userNumber = 0;

/*Function to inform user if guess is to high or too low comparing it  randomNumber*/
const inputNumber = () => {
    userNumber = parseInt(document.querySelector('#number').value);
    if(isNaN(userNumber)){
        document.querySelector('#number').value = '';
        alert('Please enter a valid number');
    } else {
        let item = document.createElement("li");
        let userGuess = '';
        item.classList.add('list-item');
        if  (userNumber < 1 || userNumber > 100) {
            alert(`${userNumber} is not allowed. Please enter a whole between 0 and 100`); 
        } else if (userNumber < randomNumber) {
            info.textContent = `${userNumber} is too low`;
            tooLow.appendChild(item);
        } else if (userNumber > randomNumber) {
            info.textContent = `${userNumber} is too high`;
            tooHigh.appendChild(item);
        } else if (userNumber === randomNumber){
            alert(`Well done. The number was ${userNumber}`);
            window.location.reload();
        }
        item.textContent = userNumber;
    }
   /*Clears input field*/  
    document.querySelector('#number').value = '';
};

/*Function to allow user to continue inputting numbers until guess is correct*/
const checkNumber = () => {
    randomNumber = Math.floor(Math.random() * 100);
    while (userNumber !== randomNumber) {
        inputNumber;
    }
};

numberButton.addEventListener('click', inputNumber);