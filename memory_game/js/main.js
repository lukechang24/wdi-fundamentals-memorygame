var cards = [
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
		id: "#QoD"
	},
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
		id: "#QoH"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
		id: "#KoD"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
		id: "#KoH"
	}
];

function createBoard() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("id", cards[i].id);
		cardElement.setAttribute("alt", cards[i].cardImage);
		document.getElementById("game-board").appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
}
var startButton = document.getElementById("start-button");
var resetButton = document.getElementById("reset-button");

function hideStartButton() {
	startButton.style.visibility = "hidden";
}
 function showResetButton() {
 	resetButton.style.visibility = "visible";
 }

 function resetBoard() {
	for(var i = 0; i < cards.length; i++) {
		var gameBoard = document.getElementById("game-board")
		gameBoard.removeChild(document.querySelector("img"));
	}
	createBoard();
}

startButton.addEventListener("click", createBoard);
startButton.addEventListener("click", hideStartButton);
startButton.addEventListener("click", showResetButton);
resetButton.addEventListener("click", resetBoard);

var cardsInPlay = [];

function flipCard() {
	this.src = this.alt;
	if(this.className === "flipped") {
		console.log("You can't select the same card twice!");
	} else {
		if(this.id === "#QoD") {
			this.class = "flipped";
			cardsInPlay.push(cards[0].rank);
			console.log("User flipped " + cards[0].rank + " of " + cards[0].suit);
			checkForPair(cardsInPlay);
		} else if(this.id === "#QoH") {
			this.class = "flipped";
			cardsInPlay.push(cards[1].rank);
			console.log("User flipped " + cards[1].rank + " of " + cards[1].suit);
			checkForPair(cardsInPlay);
		} else if(this.id === "#KoD") {
			this.class = "flipped";
			cardsInPlay.push(cards[2].rank);
			console.log("User flipped " + cards[2].rank + " of " + cards[2].suit);
			checkForPair(cardsInPlay);
		} else {
			this.class = "flipped";
			cardsInPlay.push(cards[3].rank);
			console.log("User flipped " + cards[3].rank + " of " + cards[3].suit);
			checkForPair(cardsInPlay);
		}
	}
}

function checkForPair(card) {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
			console.log("You found a match!");
			cardsInPlay = [];

		}
		else {
			alert("You did not find a match.")
			console.log("You did not find a match.")
			cardsInPlay = [];
		}
	}
}