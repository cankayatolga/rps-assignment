let userScore = 0;
let computerScore = 0;
const compChoiceList = ['rock', 'paper', 'scissors'];
let playersChoice = (prompt('Rock, paper or scissors?')).toLowerCase();
function getComputerChoice () {
    var computerChoice = compChoice[Math.floor(Math.random()*compChoice.length)];
    console.log("The computer has selected " + choice);
    return computerChoice;
    //computer's random selection of rock, paper or scissors
}


function game () {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 4; i++) {
        if (userScore === 3) {
            console.log('User has won')
        } else if (computerScore === 3) {
            console.log('Sorry the computer has won')
        }else { 
            //There, I tried to make a full description of the game by evaluating the consequenses one by one
            getComputerChoice()
            if (computerChoice === 'rock' && playersChoice === 'rock') {
                console.log("It's a draw")
            } else if (computerChoice === 'rock' && playersChoice === 'paper') {
                console.log("Player won this time with a paper solid decision")
                userScore++;
                document.getElementById('userScore').innerHTML = `User Score: ${userScore}`
                document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
            } else if (computerChoice === 'rock' && playersChoice === 'scissors') {
                console.log("Computer won with a decision of rock")
                computerScore++;
                document.getElementById('userScore').innerHTML = `User Score: ${userScore}`
                document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
            } else if (computerChoice === 'paper' && playersChoice === 'scissors') {
                console.log("Player won with scissors")
                userScore++;
                document.getElementById('userScore').innerHTML = `User Score: ${userScore}`
                document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
            } else if (computerChoice === 'paper' && playersChoice === 'paper') {
                console.log("A draw")
            } else if (computerChoice === 'paper' && playersChoice === 'rock') {
                console.log("Paper enclosed the rock. Sorry dear!")
                computerScore++;
                document.getElementById('userScore').innerHTML = `User Score: ${userScore}`
                document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
            } else if (computerChoice === 'scissors' && playersChoice === 'scissors') {
                console.log("It's a draw")
            } else if (computerChoice === 'scissors' && playersChoice === 'rock') {
                console.log("You have chosen the right one of the 3!")
                userScore++;
                document.getElementById('userScore').innerHTML = `User Score: ${userScore}`
                document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
            } else if (computerChoice === 'scissors' && playersChoice === 'paper') {
                console.log("Scissors cuts paper :(")
                computerScore++;
                document.getElementById('userScore').innerHTML = `User Score: ${userScore}`
                document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
            }
        } 
      }
}



