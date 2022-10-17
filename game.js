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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection == 'ROCK' && computerSelection == 'Rock') {
        console.log('It\'s a draw! You both played rock!')
        return 0
    } else if (playerSelection == 'ROCK' && computerSelection == 'Paper') {
        console.log('You lose! Paper beats rock!')
        return -1
    } else if (playerSelection == 'ROCK' && computerSelection == 'Scissors') {
        console.log('You win! Rock beats scissors!')
        return 1
    } else if (playerSelection == 'PAPER' && computerSelection == 'Rock') {
        console.log('You win! Paper beats rock!')
        return 1
    } else if (playerSelection == 'PAPER' && computerSelection == 'Paper') {
        console.log('It\'s a draw! You both played paper!')
        return 0
    } else if (playerSelection == 'PAPER' && computerSelection == 'Scissors') {
        console.log('You lose! Scissors beats paper!')
        return -1
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock') {
        console.log('You lose! Rock beats scissors!')
        return -1
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Paper') {
        console.log('You win! Scissors beats paper!')
        return 1
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors') {
        console.log('It\'s a draw! you both played scissors!')
        return 0
    }
}