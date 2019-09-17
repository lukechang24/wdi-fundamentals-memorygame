const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const colorList = document.getElementById("color-list");
const flipCardsDownButton = document.getElementById("flipCardsDown-button");
const inputTextbox = document.getElementById("number-of-cards");
let numberOfCards;
let randomNumbers;
let cardColors = "images/gray_back.jpg";

colorList.addEventListener("click", function(e) {
	const grayButton = document.getElementById("gray");
	const redButton = document.getElementById("red");
	const yellowButton = document.getElementById("yellow");
	const blueButton = document.getElementById("blue");
	const purpleButton = document.getElementById("purple");
	if(e.target.id === "gray") {
		cardColors = "images/gray_back.jpg"
	} else if(e.target.id === "red") {
		cardColors = "images/red_back.jpg"
	} else if(e.target.id === "yellow") {
		cardColors = "images/yellow_back.jpg"
	} else if(e.target.id === "blue") {
		cardColors = "images/blue_back.jpg"
	} else if(e.target.id === "purple") {
		cardColors = "images/purple_back.jpg"
	}
})

resetButton.addEventListener("click", function(e) {
	const inputText = document.getElementById("number-of-cards");
	numberOfCards = inputText.value;
	resetBoard();
	document.getElementById("failed").style.visibility = "hidden";
	document.getElementById("success").style.visibility = "hidden";
})

function createBoard() {
	for(const i = 0; i < numberOfCards; i++) {
		const cardElement = document.createElement("img");
		cardElement.setAttribute("src", cards[randomNumbers[i]].cardImage);
		cardElement.setAttribute("id", cards[randomNumbers[i]].id);
		cardElement.setAttribute("alt", cards[randomNumbers[i]].cardImage);
		cardElement.setAttribute("class", "flipped");
		cardElement.width = "120";
		document.getElementById("game-board").appendChild(cardElement);
		cardElement.addEventListener("click", flipCard);
	}
}
 function resetBoard() {
 	const inputText = document.getElementById("number-of-cards");
	if(inputText.value === "2" || inputText.value === "4" || inputText.value === "6") {
		alert("Even babies can figure this out. Choose a higher number.");
		inputText.value = "";
		return;
	}
	if(parseInt(inputText.value) > 52) {
		alert("Please input a number <= 52.");
		inputText.value = "";
		return;
	}
	if(inputText.value % 2 !== 0) {
		alert("Please input an even number.");
		inputText.value = "";
		return;
	}
 	const gameBoard = document.getElementById("game-board")
 	const cards = document.getElementsByTagName("img");
	while(cards.length > 0) {
		gameBoard.removeChild(document.querySelector("img"));
	}
	randomNumbers = generateRan();
	createBoard();
}

startButton.addEventListener("click", function() {
	const inputText = document.getElementById("number-of-cards");
	if(inputText.value === "2" || inputText.value === "4") {
		alert("Even babies can figure this out. Choose a higher number.");
		return;
	}
	if(parseInt(inputText.value) > 52) {
		alert("Please input a number <= 52.");
		return;
	}
	if(inputText.value % 2 !== 0) {
		alert("Please input an even number.");
		return;
	}
	numberOfCards = inputText.value;
	randomNumbers = generateRan();
	createBoard();
	startButton.style.visibility = "hidden";
	flipCardsDownButton.style.visibility = "visible";
	resetButton.style.visibility = "visible";
});
flipCardsDownButton.addEventListener("click", function() {
	document.getElementById("failed").style.visibility = "hidden";
	document.getElementById("success").style.visibility = "hidden";
	const flippedCards = document.querySelectorAll(".flipped");
	for(const i = 0; i < numberOfCards; i++) {
		flippedCards[i].setAttribute("src", cardColors);
		flippedCards[i].setAttribute("class", "face-down");
	}
});

const cardsInPlay = [];

function flipCard() {
	this.src = this.alt;
	if(this.className === "face-down") {
		this.setAttribute("class", "flipped");
		for(const i = 0; i < numberOfCards; i++) {
			if(this.id === cards[randomNumbers[i]].id) {
				cardsInPlay.push(cards[randomNumbers[i]].rank);
				console.log("User flipped " + cards[randomNumbers[i]].rank + " of " + cards[randomNumbers[i]].suit);
				checkForPair(cardsInPlay);
			}
		}
	}
}

function checkForPair(card) {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			cardsInPlay = [];
			console.log("You found a match! Keep going!");
			document.querySelectorAll(".flipped")[1].setAttribute("class", "matched");
			document.querySelectorAll(".flipped")[0].setAttribute("class", "matched");
			if(document.querySelectorAll(".matched").length === parseInt(numberOfCards)) {
				document.getElementById("success").style.visibility = "visible";
				return;
			}
		}
		else {
			document.getElementById("failed").style.visibility = "visible";
			console.log("You did not find a match. You may try again or press reset for a new board.");
			const flippedCards = document.querySelectorAll("img");
			for(const i = 0; i < numberOfCards; i++) {
				flippedCards[i].setAttribute("src", cards[randomNumbers[i]].cardImage);
				flippedCards[i].setAttribute("class", "flipped");
				cardsInPlay = [];
			}
		}
	}
}

function generateRan() {
	const max = numberOfCards;
  	const random = [];
  	for(const i = 0; i < numberOfCards; i++) {
    	const temp = Math.floor(Math.random() * max);
    	if(random.indexOf(temp) == -1){
      		random.push(temp);
    	} else { 
      		i--;
    	}
  	}
  	return random;
}

const cards = [
	{
		rank: "two",
		suit: "diamonds",
		cardImage: "images/2D.jpg",
		id: "#2oD"
	},
	{
		rank: "two",
		suit: "hearts",
		cardImage: "images/2H.jpg",
		id: "#2oH"
	},
	{
		rank: "two",
		suit: "clubs",
		cardImage: "images/2C.jpg",
		id: "#2oC"
	},
	{
		rank: "two",
		suit: "spades",
		cardImage: "images/2S.jpg",
		id: "#2oS"
	},
	{
		rank: "three",
		suit: "diamonds",
		cardImage: "images/3D.jpg",
		id: "#3oD"
	},
	{
		rank: "three",
		suit: "hearts",
		cardImage: "images/3H.jpg",
		id: "#3oH"
	},
	{
		rank: "three",
		suit: "clubs",
		cardImage: "images/3C.jpg",
		id: "#3oC"
	},
	{
		rank: "three",
		suit: "spades",
		cardImage: "images/3S.jpg",
		id: "#3oS"
	},
	{
		rank: "four",
		suit: "diamonds",
		cardImage: "images/4D.jpg",
		id: "#4oD"
	},
	{
		rank: "four",
		suit: "hearts",
		cardImage: "images/4H.jpg",
		id: "#4oH"
	},
	{
		rank: "four",
		suit: "clubs",
		cardImage: "images/4C.jpg",
		id: "#4oC"
	},
	{
		rank: "four",
		suit: "spades",
		cardImage: "images/4S.jpg",
		id: "#4oS"
	},
	{
		rank: "five",
		suit: "diamonds",
		cardImage: "images/5D.jpg",
		id: "#5oD"
	},
	{
		rank: "five",
		suit: "hearts",
		cardImage: "images/5H.jpg",
		id: "#5oH"
	},
	{
		rank: "five",
		suit: "clubs",
		cardImage: "images/5C.jpg",
		id: "#5oC"
	},
	{
		rank: "five",
		suit: "spades",
		cardImage: "images/5S.jpg",
		id: "#5oS"
	},
	{
		rank: "six",
		suit: "diamonds",
		cardImage: "images/6D.jpg",
		id: "#6oD"
	},
	{
		rank: "six",
		suit: "hearts",
		cardImage: "images/6H.jpg",
		id: "#6oH"
	},
	{
		rank: "six",
		suit: "clubs",
		cardImage: "images/6C.jpg",
		id: "#6oC"
	},
	{
		rank: "six",
		suit: "spades",
		cardImage: "images/6S.jpg",
		id: "#6oS"
	},
	{
		rank: "seven",
		suit: "diamonds",
		cardImage: "images/7D.jpg",
		id: "#7oD"
	},
	{
		rank: "seven",
		suit: "hearts",
		cardImage: "images/7H.jpg",
		id: "#7oH"
	},
	{
		rank: "seven",
		suit: "clubs",
		cardImage: "images/7C.jpg",
		id: "#7oC"
	},
	{
		rank: "seven",
		suit: "spades",
		cardImage: "images/7S.jpg",
		id: "#7oS"
	},
	{
		rank: "eight",
		suit: "diamonds",
		cardImage: "images/8D.jpg",
		id: "#8oD"
	},
	{
		rank: "eight",
		suit: "hearts",
		cardImage: "images/8H.jpg",
		id: "#8oH"
	},
	{
		rank: "eight",
		suit: "clubs",
		cardImage: "images/8C.jpg",
		id: "#8oC"
	},
	{
		rank: "eight",
		suit: "spades",
		cardImage: "images/8S.jpg",
		id: "#8oS"
	},
	{
		rank: "nine",
		suit: "diamonds",
		cardImage: "images/9D.jpg",
		id: "#9oD"
	},
	{
		rank: "nine",
		suit: "hearts",
		cardImage: "images/9H.jpg",
		id: "#9oH"
	},
	{
		rank: "nine",
		suit: "clubs",
		cardImage: "images/9C.jpg",
		id: "#9oC"
	},
	{
		rank: "nine",
		suit: "spades",
		cardImage: "images/9S.jpg",
		id: "#9oS"
	},
	{
		rank: "ten",
		suit: "diamonds",
		cardImage: "images/10D.jpg",
		id: "#10oD"
	},
	{
		rank: "ten",
		suit: "hearts",
		cardImage: "images/10H.jpg",
		id: "#10oH"
	},
	{
		rank: "ten",
		suit: "clubs",
		cardImage: "images/10C.jpg",
		id: "#10oC"
	},
	{
		rank: "ten",
		suit: "spades",
		cardImage: "images/10S.jpg",
		id: "#10oS"
	},
	{
		rank: "jack",
		suit: "diamonds",
		cardImage: "images/JD.jpg",
		id: "#JoD"
	},
	{
		rank: "jack",
		suit: "hearts",
		cardImage: "images/JH.jpg",
		id: "#JoH"
	},
	{
		rank: "jack",
		suit: "clubs",
		cardImage: "images/JC.jpg",
		id: "#JoC"
	},
	{
		rank: "jack",
		suit: "spades",
		cardImage: "images/JS.jpg",
		id: "#JoS"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/QD.jpg",
		id: "#QoD"
	},
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/QH.jpg",
		id: "#QoH"
	},
	{
		rank: "queen",
		suit: "clubs",
		cardImage: "images/QC.jpg",
		id: "#QoC"
	},
	{
		rank: "queen",
		suit: "spades",
		cardImage: "images/QS.jpg",
		id: "#QoS"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/KD.jpg",
		id: "#KoD"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/KH.jpg",
		id: "#KoH"
	},
	{
		rank: "king",
		suit: "clubs",
		cardImage: "images/KC.jpg",
		id: "#KoC"
	},
	{
		rank: "king",
		suit: "spades",
		cardImage: "images/KS.jpg",
		id: "#KoS"
	},
	{
		rank: "ace",
		suit: "diamonds",
		cardImage: "images/AD.jpg",
		id: "#AoD"
	},
	{
		rank: "ace",
		suit: "hearts",
		cardImage: "images/AH.jpg",
		id: "#AoH"
	},
	{
		rank: "ace",
		suit: "clubs",
		cardImage: "images/AC.jpg",
		id: "#AoC"
	},
	{
		rank: "ace",
		suit: "spades",
		cardImage: "images/AS.jpg",
		id: "#AoS"
	}
];