let player = {
    name: "allan",
    chips: "600"
}
let cards = [];
let sum = 0;
// keeps track of the state of the game
let hasBlackJack = false;
let isAlive = false;
// added incase we need to use variable message somewhere else in the code
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");


playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,  secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }


    sumEl.textContent = "Sum: " + sum;
if (sum <= 20) {
    message = "Do you want to draw another card?"
} else if (sum === 21) {
    message = "You've got blackjack"
    hasBlackJack = true;
} else {
    message = "You're out of the game"
    isAlive = false;
}
console.log(isAlive);
messageEl.textContent = message;
}

// render the sum on the page




function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum = sum + newCard;
        cards.push(newCard);
        renderGame();
    }
}