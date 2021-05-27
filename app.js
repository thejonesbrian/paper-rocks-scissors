function computerPlay() {
    const prs = ['paper', 'rocks', 'scissors'];
    return prs[Math.floor(Math.random() * prs.length)];
}
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
const playerSelection = prompt('write: paper, scissors, rock').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
//console.log(computerPlay());
