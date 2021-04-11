function computerPlay() {
    // Use the Math.floor() and Math.random() methods to return 'Rock', 'Paper', or 'Scissors' randomly

    let play = Math.floor(Math.random() * 3);

    if (play === 0) {           // Rock
        let answer = play;
        return answer;
    } else if (play === 1) {    // Paper
        let answer = play;
        return answer;
    } else {                    // Scissors
        let answer = play;
        return answer;
    }
}

function playRound(playerSelection, computerSelection) {
    // playerSelection will let the player input either "Rock", "Paper", or "Scissors"
    // playerSelection should be case-insenstive, meaning they can put "RoCK" etc.
    // When both playerSelection and computerSelection have an answer, input a string that tells who the winner is.

    let text = prompt("Rock, Paper, or Scissors?").toLowerCase();

    playerSelection = text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
    // console.log("The player chose: " + playerSelection);

    computerSelection = computerPlay();
    // console.log("The player chose: " + playerSelection);

    let humanScore = 0;
    let computerScore = 0;

    if (playerSelection === "Rock") {

        if (computerSelection === 0) {
            computerSelection === "Rock";
            return "You Tie! " + playerSelection + " ties with Rock.";
        } else if (computerSelection === 1) {
            return "You Lose! " + playerSelection + " loses to Paper.";
        } else {
            return "You Win! " + playerSelection + " beats Scissors." ;
        }

    } else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            return "You Win! " + playerSelection + " beats Rock.";
        } else if (computerSelection === "Paper") {
            return "You Tie! " + playerSelection + " ties with Paper.";
        } else {
            return "You Lose! " + playerSelection + " loses to Scissors"
        }

    } else if (playerSelection === "Scissors") {

        if (computerSelection === "Rock") {
            return "You Lose! " + playerSelection + "loses to Rock.";
        } else if (computerSelection === "Paper") {
            return "You Win! " + playerSelection + " beats Rock.";
        } else {
            return "You Tie! " + playerSelection + " ties with Scissors."
        }

    } else {
        return "Incorrect type of answer.";
    }
}

function game() {

    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}