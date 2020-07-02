document.addEventListener('DOMContentLoaded', () => {

    var playerWinCount = 0;
    var computerWinCount = 0;
    var play = ['rock', 'paper', 'scissors'];
    var playerSelection = '';
    var computerSelection = '';

    document.querySelectorAll('.choice').forEach(function(button) {

        button.onclick = () => {

            playerSelection = button.dataset.choice;
            computerSelection = play[Math.floor(Math.random() * play.length)];

            if (playerSelection === 'rock' && computerSelection === 'paper') {
                computerWinCount += 1;
                document.querySelector('#computer-win-count').innerHTML = computerWinCount;
                document.querySelector('#message').innerHTML = `Computer picked ${computerSelection}.`;
                document.querySelector('#result').innerHTML = 'You Lose!';
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                playerWinCount += 1;
                document.querySelector('#player-win-count').innerHTML = playerWinCount;
                document.querySelector('#message').innerHTML = `Computer picked ${computerSelection}.`;
                document.querySelector('#result').innerHTML = 'You Win!';
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                playerWinCount += 1;
                document.querySelector('#player-win-count').innerHTML = playerWinCount;
                document.querySelector('#message').innerHTML = `Computer picked ${computerSelection}.`;
                document.querySelector('#result').innerHTML = 'You Win!';
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                computerWinCount += 1;
                document.querySelector('#computer-win-count').innerHTML = computerWinCount;
                document.querySelector('#message').innerHTML = `Computer picked ${computerSelection}.`;
                document.querySelector('#result').innerHTML = 'You Lose!';
            } else {
                document.querySelector('#message').innerHTML = `Computer picked ${computerSelection}.`;
                document.querySelector('#result').innerHTML = 'It is a draw.';
            }

        }

    });
});