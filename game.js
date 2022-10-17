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