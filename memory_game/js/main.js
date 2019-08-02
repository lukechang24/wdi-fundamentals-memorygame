var cardsInPlay = [];
document.querySelector("#QoD").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	} else {
		flipCard(e.target);
		cardsInPlay.push("Queen");
		console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
		checkForPair(e.target);
	}
}
document.querySelector("#QoH").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	}
	else {
		flipCard(e.target);
		cardsInPlay.push("Queen");
		console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
		checkForPair(e.target);
	}}
document.querySelector("#KoD").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	}
	else {
		flipCard(e.target);
		cardsInPlay.push("King");
		console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
		checkForPair(e.target);
	}
}
document.querySelector("#KoH").onclick = function(e) {
	if(e.target.className === "flipped") {
		flipCardsBack(e.target);
	}
	else {
		flipCard(e.target);
		cardsInPlay.push("King");
		console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
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
			card.parentNode.removeChild(document.querySelector(".flipped"));
			card.parentNode.removeChild(document.querySelector(".flipped"));
			console.log("You found a pair!");
			cardsInPlay = [];

		}
		else {
			console.log("You did not find a pair.")
			flipCardsBack(document.querySelector(".flipped"));
			flipCardsBack(document.querySelector(".flipped"));
			cardsInPlay = [];
		}
	}
}

document.getElementById("button").onclick = function() {
	checkForPair();
}