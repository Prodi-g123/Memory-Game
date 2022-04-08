const cardArray = [
    {
        name: 'fries',
        image: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        image: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        image: './images/hotdog.png',
    },
    {
        name: 'ice-cream',
        image: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        image: './images/milkshake.png',
    },
    {
        name: 'pizza',
        image: './images/pizza.png',
    },
    {
        name: 'fries',
        image: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        image: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        image: './images/hotdog.png',
    },
    {
        name: 'ice-cream',
        image: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        image: './images/milkshake.png',
    },
    {
        name: 'pizza',
        image: './images/pizza.png',
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let chosenCard = [];
let chosenCardId =[];
const wonCards = [];

const createBoard = () =>{
    for(let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img');
       card.setAttribute('src','./images/blank.png');
       card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard);
       gridDisplay.appendChild(card);
    }
}

createBoard();

//check for a match after 500 milliseconds
function checkMatch(){

    const card = document.querySelectorAll('#grid img');

    if(chosenCard[0] == chosenCard[1]){
        alert('You found a match!');
        card[chosenCardId[0]].setAttribute('src', './images/white.png');
        card[chosenCardId[1]].setAttribute('src', './images/white.png');
        card[chosenCardId[0]].removeEventListener('click', flipCard);
        card[chosenCardId[1]].removeEventListener('click', flipCard);
        wonCards.push(chosenCard);
    }
    chosenCard = [];
    chosenCardId = []; 
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    chosenCard.push(cardArray[cardId].name);
    chosenCardId.push(cardId);

    this.setAttribute('src', cardArray[cardId].image); //setting an attribute to the image tag

    if(chosenCard.length === 2){
        setTimeout(checkMatch, 500);
    }
  
}

