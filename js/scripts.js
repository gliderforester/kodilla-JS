// plik scripts.js
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () {
	playerPick('kamień')
});
pickPaper.addEventListener('click', function () {
	playerPick('papier')
});
pickScissors.addEventListener('click', function () {
	playerPick('nożyce')
});

var gameState = 'notStarted', //started // ended // notStarted
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};



var newGameBtn = document.getElementById('js-newGameButton'),
	newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
	switch (gameState) {
	case 'started':
		newGameElem.style.display = 'none';
		pickElem.style.display = 'block';
		resultsElem.style.display = 'block';
		break;
	case 'ended':
		newGameBtn.innerText = 'Jeszcze raz';
		newGameElem.style.display = 'block';
		resultsElem.style.display = 'block';
		pickElem.style.display = 'none';
		playerPickElem.style.display = 'none';	computerPickElem.style.display = 'none';
		break;
	case 'notStarted':
		newGameElem.style.display = 'block';
		pickElem.style.display = 'none';
		resultsElem.style.display = 'none';
		break;
	default:
		newGameElem.style.display = 'none';
		pickElem.style.display = 'none';
		resultsElem.style.display = 'none';
	}
}

setGameElements();


var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
	player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		playerNameElem.innerHTML = player.name;

	}

setGameElements();

}


function getComputerPick() {
	var possiblePicks = ['kamień', 'papier', 'nożyce'];
	return possiblePicks[Math.floor(Math.random() * 3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');


function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	var winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'none'; // remis
		computerResultElem.innerHTML = playerResultElem.innerHTML = "Remis";
		computerResultElem.style.color = playerResultElem.style.color = "grey";


	} else if (
		(computerPick == 'kamień' && playerPick == 'nożyce') ||
		(computerPick == 'nożyce' && playerPick == 'papier') ||
		(computerPick == 'papier' && playerPick == 'kamień')) {

		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = "Wygrana!";
		playerResultElem.style.color = 'green';
		player.score++;
		console.log(player.score);
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = "Wygrana!";
		computerResultElem.style.color = 'green';
		computer.score++;
		console.log(computer.score);
	}

	if (player.score == 10) {
		playerResultElem.innerHTML = "Wygrałeś rozgrywkę!";
		computerResultElem.innerHTML = "Komputer nie miał szans";
		playerResultElem.style.color = 'red';
		gameState = 'ended';

	} else if (computer.score == 10) {
		computerResultElem.innerHTML = "Komputer wygrał rozgrywkę!";
		playerResultElem.innerHTML = "Przegrałeś";
		computerResultElem.style.color = 'red';
		gameState = 'ended';
			}

setGameElements();
}



function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}



function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
	setGamePoints();

}
