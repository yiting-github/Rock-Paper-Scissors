var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var resultText = document.querySelector("#resultText");
var userScoreText = document.getElementById("userScore");
var compScoreText = document.getElementById("compScore");
var playChoices = ["Rock", "Paper", "Scissors"];
var userChoice;
var compChoice;
var userScore = 0;
var compScore = 0;
var result;

if(!userChoice){
    rock.addEventListener("click", function(event){
        userChoice = "Rock";    
        compChoice = playChoices[Math.floor(Math.random() * 3)];

        if(compChoice === "Scissors"){
            userScore++;
            userScoreText.textContent = userScore;
            resultText.textContent  = userChoice + " beats " + compChoice + ". You win!";
        } else if(compChoice === "Paper"){
            compScore++;
            compScoreText.textContent = compScore;
            resultText.textContent  = userChoice + " loses to " + compChoice + ". You lose:(";
        } else{
            resultText.textContent = userChoice + " is equal to " + compChoice + ". Play again!";
        }
    });
    
    paper.addEventListener("click", function(event){
        userChoice = "Paper";   
        compChoice = playChoices[Math.floor(Math.random() * 3)];
        if(compChoice === "Rock"){
            userScore++;
            userScoreText.textContent = userScore;
            resultText.textContent  = userChoice + " covers " + compChoice + ". You win!";
        } else if(compChoice === "Scissors"){
            compScore++;
            compScoreText.textContent = compScore;
            resultText.textContent  = userChoice + " loses to " + compChoice + ". You lose:(";
        } else{
            resultText.textContent = userChoice + " is equal to " + compChoice + ". Play again!";
        } 
    });
    
    scissors.addEventListener("click", function(){
        userChoice = "Scissors";
        compChoice = playChoices[Math.floor(Math.random() * 3)];
        if(compChoice === "Paper"){
            userScore++;
            userScoreText.textContent = userScore;
            resultText.textContent  = userChoice + " beats " + compChoice + ". You win!";
        } else if(compChoice === "Rock"){
            compScore++;
            compScoreText.textContent = compScore;
            resultText.textContent  = userChoice + " loses to " + compChoice + ". You lose:(";
        } else {
            resultText.textContent = userChoice + " is equal to " + compChoice + ". Play again!";
        } 
    });
}
