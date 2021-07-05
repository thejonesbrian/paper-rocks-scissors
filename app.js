let roundResult = document.getElementById('result'); //return a result in the series
let pScore = document.getElementById('play-score');
let pcScore = document.getElementById('pc-score');
let champ = document.getElementById('champion');

function computerPlay() {
    const prs = ['paper', 'rock', 'scissors'];
    return prs[Math.floor(Math.random() * prs.length)];
}
let playerScore = 0;
let computerScore = 0;
function game(playerSelection) {
    const computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    roundResult.style.display = 'flex';
    //console.log(`Choice: human = ${playerSelection} computer = ${computerSelection}`)
    //round score
    if (round === 'win') {
        playerScore += 1;
        pScore.innerText = playerScore;
    } else if (round === 'lost') {
        computerScore += 1;
        pcScore.innerText = computerScore;
    } else {
        console.log('Tied game');
    }
    winCheck();
    //playerScore > computerScore ? console.log(`Congratulations, you won: ${playerScore} - ${computerScore}`) : console.log(`Sorry, you lost: ${playerScore} - ${computerScore}`);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult.innerHTML = ('<h4>Its a drawn game</h4>');
        return 'tied'
    }
    //All win possibilities 
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult.innerHTML = ('<h4>The Human wins!</h4>');
        return 'win'
    }
    //All lose possibilities 
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult.innerHTML = ('<h4>The Computer wins!</h4>');
        return 'lost'
    }
}

function winCheck() {
    if (playerScore == 5 || computerScore == 5) {
        let winner = playerScore > computerScore ? "Human" : "Computer"
        champ.style.display = 'flex';
        champ.innerHTML = `${winner} is the Champion!`;
        // document.querySelectorAll('.cards').forEach(function (el) {
        //     el.style.display = 'none'
        // });
        document.getElementById('pick-container').style.display = 'none';
        document.getElementById('reset-btn').style.display = 'flex';
    }
}
function reset() {
    playerScore = 0;
    computerScore = 0;
    pScore.innerText = playerScore;
    pcScore.innerText = computerScore;
    document.getElementById('pick-container').style.display = 'flex';
    document.getElementById('reset-btn').style.display = 'none';
    champ.style.display = 'none';
    roundResult.style.display = 'none';
}