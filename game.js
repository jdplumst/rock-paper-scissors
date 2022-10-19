// Randomizes the computer's choice
function getComputerChoice() {
    let c = Math.floor(Math.random() * 3)
    if (c == 0) {
        return 'Rock'
    } else if (c == 1) {
        return 'Paper'
    } else if (c == 2) {
        return 'Scissors'
    }
}

// Select results and end div
const resultsDiv = document.querySelector('.results');
const endDiv = document.querySelector('.end');

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        resultsDiv.textContent = 'It\'s a draw! You both played rock!';
        return 0
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        resultsDiv.textContent = 'You lose! Paper beats rock!';
        return -1
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        resultsDiv.textContent = 'You win! Rock beats scissors!';
        return 1
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        resultsDiv.textContent = 'You win! Paper beats rock!';
        return 1
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        resultsDiv.textContent = 'It\'s a draw! You both played paper!';
        return 0
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        resultsDiv.textContent = 'You lose! Scissors beats paper!';
        return -1
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        resultsDiv.textContent = 'You lose! Rock beats scissors!';
        return -1
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        resultsDiv.textContent = 'You win! Scissors beats paper!';
        return 1
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        resultsDiv.textContent = 'It\'s a draw! you both played scissors!';
        return 0
    }
}

// Set player and computer scores
let playerScore = 0;
let computerScore = 0;

// Set result variable (1 = player win, -1 = computer win, 0 = draw)
let result = 0;


// Select player and computer score paragraphs
const playerTag = document.querySelector('.player');
const computerTag = document.querySelector('.computer');

// Updates the scoreboard after every round
function updateScore(result) {
    if (result == 1) {
        playerScore++;
        playerTag.textContent = `Player Score: ${playerScore}`;
    } else if (result == -1) {
        computerScore++;
        computerTag.textContent = `Computer Score : ${computerScore}`;
    }
    if (playerScore == 5) {
        endDiv.textContent = `You win! The score is ${playerScore} - ${computerScore}.\r\n` +
            `Press a button to start a new game and play again.`;
    } else if (computerScore == 5) {
        endDiv.textContent = `You lose! The score is ${playerScore} - ${computerScore}.\r\n` +
            `Press a button to start a new game and play again.`;
    }
}

// Select the buttons and play a round whenever one of the buttons is clicked
const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Reset scoreboard if either player or computer reached 5 points
        if (playerScore == 5 || computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            playerTag.textContent = `Player Score: ${playerScore}`;
            computerTag.textContent = `Computer Score : ${computerScore}`;
            endDiv.textContent = '';
        } 
        // Play a round
        if (btn.id == 'Rock') {
            result = playRound('Rock', getComputerChoice());
        } else if (btn.id == 'Paper') {
            result = playRound('Paper', getComputerChoice());
        } else if (btn.id == 'Scissors') {
            result = playRound('Scissors', getComputerChoice());
        }
        // Update scoreboard
        updateScore(result);
    })
});