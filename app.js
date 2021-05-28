function computerPlay() {
    const prs = ['paper', 'rock', 'scissors'];
    return prs[Math.floor(Math.random() * prs.length)];
}

let playerSelection = prompt('write: paper, scissors, rock').toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'You tied!'
    }
    //All wins
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    //All loses
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}
// const result = playRound(playerSelection, computerSelection);
// console.log(playerSelection + computerSelection);
// console.log(result);
