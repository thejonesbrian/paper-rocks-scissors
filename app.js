function computerPlay() {
    const prs = ['paper', 'rock', 'scissors'];
    return prs[Math.floor(Math.random() * prs.length)];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt('write: paper, scissors, rock').toLowerCase();
        let round = playRound(playerSelection, computerSelection);
        //round score
        if (round === 'win') {
            playerScore += 1;
            console.log('You win');
        } else if (round === 'lost') {
            computerScore += 1;
            console.log('You lost');
        } else {
            console.log('Tied game');
        }
    }
    playerScore > computerScore ? console.log(`Congratulations, you won: ${playerScore} - ${computerScore}`) : console.log(`Sorry, you lost: ${playerScore} - ${computerScore}`);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tied'
    }
    //All win possibilities 
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win'
    }
    //All lose possibilities 
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lost'
    }
}