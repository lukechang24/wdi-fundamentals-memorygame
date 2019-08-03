var cards = [
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}
];

var cardsInPlay = [];
document.querySelector("#QoD").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	} else {
		flipCard(e.target);
		cardsInPlay.push(cards[0].rank);
		console.log("User flipped " + cards[0].rank + " of " + cards[0].suit);
		checkForPair(e.target);
	}
}
document.querySelector("#QoH").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	}
	else {
		flipCard(e.target);
		cardsInPlay.push(cards[1].rank);
		console.log("User flipped " + cards[1].rank + " of " + cards[1].suit);
		checkForPair(e.target);
	}}
document.querySelector("#KoD").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	}
	else {
		flipCard(e.target);
		cardsInPlay.push(cards[2].rank);
		console.log("User flipped " + cards[2].rank + " of " + cards[2].suit);
		checkForPair(e.target);
	}
}
document.querySelector("#KoH").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	}
	else {
		flipCard(e.target);
		cardsInPlay.push(cards[3].rank);
		console.log("User flipped " + cards[3].rank + " of " + cards[3].suit);
		checkForPair(e.target);
	}
}
function flipCard(selectedCard) {
	if(selectedCard.id === "QoD") {
		selectedCard.src = "images/queen-of-diamonds.png";
		selectedCard.className = "flipped";
	} else if(selectedCard.id === "QoH") {
		selectedCard.src = "images/queen-of-hearts.png";
		selectedCard.className = "flipped";
	} else if(selectedCard.id === "KoD") {
		selectedCard.src = "images/king-of-diamonds.png";
		selectedCard.className = "flipped";
	} else if(selectedCard.id === "KoH") {
		selectedCard.src = "images/king-of-hearts.png";
		selectedCard.className = "flipped";
	}
}
function flipCardsBack(selectedCard) {
	selectedCard.src = "images/back.png";
	selectedCard.className = "facedown";
}

function checkForPair(card) {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			cardsInPlay = [];

		}
		else {
			alert("You did not find a match.")
			flipCardsBack(document.querySelector(".flipped"));
			flipCardsBack(document.querySelector(".flipped"));
			cardsInPlay = [];
		}
	}
}

document.getElementById("button").onclick = function() {
	checkForPair();
}